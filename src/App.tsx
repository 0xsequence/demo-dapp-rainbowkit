import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';

import {
  RainbowKitProvider,
  connectorsForWallets,

} from '@rainbow-me/rainbowkit';

import { sequenceWallet } from '0xsequence/rainbowkit-plugin'
import {
  metaMaskWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import Demo from './Demo'

const App = () => {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      publicProvider()
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: 'Recommended',
      wallets: [
        sequenceWallet({ chains, shimDisconnect: true, appName: 'Demo App' }),
        metaMaskWallet({ chains, shimDisconnect: true }),
        rainbowWallet({ chains }),
        walletConnectWallet({ chains }),
        injectedWallet({ chains, shimDisconnect: true })
      ]
    }
  ])
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Demo />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App