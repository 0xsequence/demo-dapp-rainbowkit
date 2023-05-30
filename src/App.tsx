import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';

import { ThemeProvider } from '@0xsequence/design-system'
import '@0xsequence/design-system/styles.css'

import {
  RainbowKitProvider,
  connectorsForWallets,

} from '@rainbow-me/rainbowkit';

import { sequenceWallet } from '@0xsequence/rainbowkit-plugin'
import {
  metaMaskWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

import {
  configureChains,
  createConfig,
  WagmiConfig,
} from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from '@wagmi/chains'
import { publicProvider } from 'wagmi/providers/public';
import Demo from './Demo'

const App = () => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
      publicProvider()
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: 'Recommended',
      wallets: [
        sequenceWallet({ chains, connect: { app: 'Demo app', networkId: 137 } }),
        metaMaskWallet({ chains, shimDisconnect: true }),
        // rainbowWallet({ chains }),
        // walletConnectWallet({
        //   chains,
        //   projectId: '244ab38f5571af5263358fc67131697d',
        // }),
        injectedWallet({ chains, shimDisconnect: true })
      ]
    }
  ])
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient
  })

  return (
    <ThemeProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Demo />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}

export default App
