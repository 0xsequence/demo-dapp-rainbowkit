import React, { useState, useEffect } from 'react'

import logoUrl from './images/logo.svg'

import { ethers } from 'ethers'
import { sequence } from '0xsequence'
import { useConnectModal, ConnectButton } from '@rainbow-me/rainbowkit'
import { useSigner, useProvider, useAccount } from 'wagmi'


import { ERC_20_ABI } from './constants/abi'

import { configureLogger } from '@0xsequence/utils'
import { Group } from './components/Group'
import { styled, typography } from './style'
import { Button } from './components/Button'


configureLogger({ logLevel: 'DEBUG' })

const App = () => {
  const { isConnected } = useAccount()
  const provider = useProvider()
  const { data: signer } = useSigner()

  const getChainID = async () => {
    console.log('signer.getChainId()', await signer.getChainId())
  }

  const getBalance = async () => {
    const account = await signer.getAddress()
    const balanceChk1 = await provider!.getBalance(account)
    console.log('balance check 1', balanceChk1.toString())

    const balanceChk2 = await signer.getBalance()
    console.log('balance check 2', balanceChk2.toString())
  }

  const getNetworks = async () => {
    console.log('networks:', await provider!.getNetwork())
  }

  const signMessage = async () => {
    const message = `Two roads diverged in a yellow wood,
Robert Frost poet

And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`

    // sign
    const sig = await signer.signMessage(message)
    console.log('signature:', sig)

    const isValid = await sequence.utils.isValidMessageSignature(await signer.getAddress(), message, sig, provider as ethers.providers.Web3Provider)
    console.log('isValid?', isValid)
  }

  const sendETH = async () => {
    console.log(`Transfer txn on ${signer.getChainId()}`)

    const toAddress = ethers.Wallet.createRandom().address

    const tx1 = {
      gasLimit: '0x55555',
      to: toAddress,
      value: ethers.utils.parseEther('1.234'),
      data: '0x'
    }

    console.log(`balance of ${toAddress}, before:`, await provider!.getBalance(toAddress))

    const txnResp = await signer.sendTransaction(tx1)
    await txnResp.wait()

    console.log(`balance of ${toAddress}, after:`, await provider!.getBalance(toAddress))
  }

  const sendDAI = async () => {
    const toAddress = ethers.Wallet.createRandom().address

    const amount = ethers.utils.parseUnits('5', 18)

    const daiContractAddress = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' // (DAI address on Polygon)

    const tx = {
      gasLimit: '0x55555',
      to: daiContractAddress,
      value: 0,
      data: new ethers.utils.Interface(ERC_20_ABI).encodeFunctionData('transfer', [toAddress, amount.toHexString()])
    }

    const txnResp = await signer.sendTransaction(tx)
    await txnResp.wait()
  }

  const disableActions = !isConnected

  const getWalletActions = () => {
    if (!isConnected) {
      return null
    }
    return (
      <>
        <Description>Please open your browser dev inspector to view output of functions below</Description>
        <Group label="State" layout="grid">
          <Button disabled={disableActions} onClick={() => getChainID()}>
            ChainID
          </Button>
          <Button disabled={disableActions} onClick={() => getNetworks()}>
            Networks
          </Button>
          <Button disabled={disableActions} onClick={() => getBalance()}>
            Get Balance
          </Button>
        </Group>

        <Group label="Signing" layout="grid">
          <Button disabled={disableActions} onClick={() => signMessage()}>
            Sign Message
          </Button>
        </Group>

        <Group label="Transactions" layout="grid">
          <Button disabled={disableActions} onClick={() => sendETH()}>
            Send ETH
          </Button>
          <Button disabled={disableActions} onClick={() => sendDAI()}>
            Send DAI Tokens
          </Button>
        </Group>
        </>
    )
  }

  return (
    <Container>
      <SequenceLogo alt="logo" src={logoUrl} />
      <Title>Demo Dapp + RainbowKit</Title>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button onClick={openConnectModal} type="button">
                      Connect Wallet
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <Button onClick={openChainModal} type="button">
                      Wrong network
                    </Button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <Button
                      onClick={openChainModal}
                      style={{ display: 'flex', alignItems: 'center' }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </Button>

                    <Button onClick={openAccountModal} type="button">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </Button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
      {getWalletActions()}
    </Container>
  )
}

export default React.memo(App)

// @ts-ignore
const Container = styled('div', {
  padding: '80px 25px 80px',
  margin: '0 auto',
  maxWidth: '720px'
})

// @ts-ignore
const SequenceLogo = styled('img', {
  height: '40px'
})

// @ts-ignore
const Title = styled('h1', typography.h1, {
  color: '$textPrimary',
  fontSize: '25px'
})

// @ts-ignore
const Description = styled('p', typography.b1, {
  color: '$textSecondary',
  marginBottom: '15px'
})
