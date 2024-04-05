import { Box, Image, Text, Button, TokenImage, GradientAvatar, Field } from '@0xsequence/design-system'
import React, { useState, useEffect } from 'react'

import logoUrl from './images/logo.svg'

import { ethers } from 'ethers'
import { sequence } from '0xsequence'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Address, formatEther, parseEther } from 'viem'
import { usePublicClient, useWalletClient, useAccount } from 'wagmi'

import { ERC_20_ABI } from './constants/abi'

import { configureLogger } from '@0xsequence/utils'
import { Group } from './components/Group'
import { Console } from './components/Console'

configureLogger({ logLevel: 'DEBUG' })

const App = () => {
  const { isConnected } = useAccount()
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()

  const [consoleMsg, setConsoleMsg] = useState<null | string>(null)
  const [consoleLoading, setConsoleLoading] = useState<boolean>(false)

  const appendConsoleLine = (message: string) => {
    return setConsoleMsg(prevState => {
      return `${prevState}\n\n${message}`
    })
  }

  const resetConsole = () => {
    setConsoleMsg(null)
    setConsoleLoading(true)
  }

  const addNewConsoleLine = (message: string) => {
    setConsoleMsg(() => {
      return message
    })
  }

  const consoleWelcomeMessage = () => {
    setConsoleLoading(false)
    setConsoleMsg('Status: Wallet not connected. Please connect wallet to use Methods')
  }

  const consoleErrorMesssage = () => {
    setConsoleLoading(false)
    setConsoleMsg('An error occurred')
  }

  useEffect(() => {
    if (isConnected) {
      setConsoleMsg('Wallet connected!')
    } else {
      consoleWelcomeMessage()
    }
  }, [isConnected])

  const getChainID = async () => {
    try {
      resetConsole()
      const chainId = await walletClient.getChainId()
      console.log('walletClient.getChainId()', chainId)
      addNewConsoleLine(`walletClient.getChainId(): ${chainId}`)
      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const getBalance = async () => {
    try {
      resetConsole()
      const [account] = await walletClient.getAddresses()
      const balance = await publicClient.getBalance({
        address: account
      })
      const formattedBalance = formatEther(balance)
      console.log('balance', formattedBalance)
      addNewConsoleLine(`balance: ${formattedBalance}`)

      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const getNetwork = async () => {
    try {
      resetConsole()
      const network = publicClient.chain
      console.log('network:', network)

      addNewConsoleLine(`network: ${JSON.stringify(network, null, 2)}`)
      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const signMessageEIP6492 = async () => {
    try {
      resetConsole()

      const message = `This signature is compatible with EIP-6492, this means that it can be verified by a smart contract wallet like Sequence, without having to deploy anything onchain.`

      const [account] = await walletClient.getAddresses()

      const sig = (await walletClient.request({
        method: 'sequence_sign',
        params: [message, account]
      })) as string

      // Disable EIP-6492 after signing
      // otherwise all subsequent signatures will be EIP-6492 compatible
      // and may fail to verify with non-EIP-6492 compatible apps

      console.log('signature:', sig)
      addNewConsoleLine(`signature: ${sig}`)

      // get networkRpcUrl from walletClient, or set it yourself
      const networkRpcUrl = walletClient.chain.rpcUrls.default.http[0]
      const rpcProvider = new ethers.providers.JsonRpcProvider(networkRpcUrl)

      // We use the sequence.utils.isValidMessageSignature method to verify signatures
      // which works on Metamask, WalletConnect, Sequence, and any EOA / Smart wallet :)
      // This single method can verify signatures from any kind of wallet.
      const isValid = await sequence.utils.isValidMessageSignature(account, message, sig, rpcProvider)

      console.log('isValid?', isValid)
      appendConsoleLine(`isValid? ${isValid}`)

      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const signMessage = async () => {
    try {
      resetConsole()
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

      const [account] = await walletClient.getAddresses()

      // sign
      const sig = await walletClient.signMessage({
        message,
        account: account
      })

      console.log('signature:', sig)
      addNewConsoleLine(`signature: ${sig}`)

      const isValid = await publicClient.verifyMessage({
        address: account,
        message,
        signature: sig
      })

      console.log('isValid?', isValid)

      appendConsoleLine(`isValid? ${isValid}`)
      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const sendETH = async () => {
    try {
      resetConsole()

      console.log(`Transfer txn on ${walletClient.getChainId()}`)
      addNewConsoleLine(`Transfer txn on ${walletClient.getChainId()}`)

      const toAddress = ethers.Wallet.createRandom().address

      const balance1 = await publicClient.getBalance({
        address: toAddress as Address
      })
      console.log(`balance of ${toAddress}, before:`, balance1)
      appendConsoleLine(`balance of ${toAddress}, before: ${balance1}`)

      const [account] = await walletClient.getAddresses()

      /* @ts-ignore-next-line */
      await walletClient.sendTransaction({
        to: toAddress as Address,
        value: parseEther('0.000123'),
        account
      })

      const balance2 = await publicClient.getBalance({
        address: toAddress as Address
      })
      console.log(`balance of ${toAddress}, after:`, balance2)
      appendConsoleLine(`balance of ${toAddress}, after: ${balance2}`)
      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const sendDAI = async () => {
    try {
      resetConsole()
      const toAddress = ethers.Wallet.createRandom().address

      const amount = ethers.utils.parseUnits('0.0123', 18)

      const daiContractAddress = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' // (DAI address on Polygon)

      const [account] = await walletClient.getAddresses()

      /* @ts-ignore-next-line */
      const hash = await walletClient.sendTransaction({
        account,
        to: daiContractAddress,
        value: 0n,
        data: new ethers.utils.Interface(ERC_20_ABI).encodeFunctionData('transfer', [
          toAddress,
          amount.toHexString()
        ]) as `0x${string}`
      })

      console.log('transaction response', hash)
      addNewConsoleLine(`TX response ${hash}`)
      setConsoleLoading(false)
    } catch (e) {
      console.error(e)
      consoleErrorMesssage()
    }
  }

  const disableActions = !isConnected

  const getWalletActions = () => {
    if (!isConnected) {
      return null
    }
    return (
      <>
        <Box marginBottom="4">
          <Text variant="normal" color="text80">
            Please open your browser dev inspector to view output of functions below
          </Text>
        </Box>
        <Group label="State">
          <Button width="full" shape="square" disabled={disableActions} onClick={() => getChainID()} label="ChainID" />
          <Button width="full" shape="square" disabled={disableActions} onClick={() => getNetwork()} label="Networks" />
          <Button width="full" shape="square" disabled={disableActions} onClick={() => getBalance()} label="Get Balance" />
        </Group>

        <Group label="Signing">
          <Button
            width="full"
            shape="square"
            disabled={disableActions}
            onClick={() => signMessage()}
            label="Sign Message legacy"
          />
          <Button
            width="full"
            shape="square"
            disabled={disableActions}
            onClick={() => signMessageEIP6492()}
            label="Sign Message EIP6492"
          />
        </Group>

        <Group label="Transactions">
          <Button width="full" shape="square" disabled={disableActions} onClick={() => sendETH()} label="Send ETH" />
          <Button width="full" shape="square" disabled={disableActions} onClick={() => sendDAI()} label="Send DAI Tokens" />
        </Group>
      </>
    )
  }

  return (
    <Box marginY="0" marginX="auto" paddingX="6" style={{ maxWidth: '720px', marginTop: '80px', marginBottom: '80px' }}>
      <Box marginBottom="4">
        <Image height="10" alt="logo" src={logoUrl} />
      </Box>

      <Box marginBottom="4">
        <Text color="text100" variant="large">
          Demo Dapp + RainbowKit
        </Text>
      </Box>

      <ConnectButton.Custom>
        {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <Box
              marginBottom="4"
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }
              })}
            >
              {!connected ? (
                <Button onClick={openConnectModal} type="button" label="Connect Wallet" />
              ) : chain.unsupported ? (
                <Button onClick={openChainModal} type="button" label="Wrong network" />
              ) : (
                <Box gap="2">
                  <Field label="Network" width="full">
                    <Button
                      width="full"
                      onClick={openChainModal}
                      type="button"
                      label={
                        <Box gap="2" alignItems="center">
                          <TokenImage size="sm" src={chain.iconUrl} />
                          {/* <TokenImage size="sm" src={`https://assets.sequence.info/images/networks/small/${chain.id}.webp`} /> */}
                          <Text>{chain.name}</Text>
                        </Box>
                      }
                      data-testid="network-button"
                    ></Button>
                  </Field>

                  <Field label="Account" width="full">
                    <Button
                      width="full"
                      onClick={openAccountModal}
                      type="button"
                      label={
                        <Box gap="2" alignItems="center">
                          <GradientAvatar size="sm" address={account.address} />
                          {account.displayName}
                        </Box>
                      }
                      data-testid="account-button"
                    />
                  </Field>
                </Box>
              )}
            </Box>
          )
        }}
      </ConnectButton.Custom>

      {getWalletActions()}

      <Console message={consoleMsg} loading={consoleLoading} />
    </Box>
  )
}

export default React.memo(App)
