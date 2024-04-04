import { ThemeProvider } from '@0xsequence/design-system'
import '@0xsequence/design-system/styles.css'

import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit'

import { sequenceWallet } from '@0xsequence/rainbowkit-plugin'
import { metaMaskWallet, injectedWallet, rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'

import { configureChains, createConfig, WagmiConfig, Connector } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'viem/chains'
import { sequence } from '0xsequence'
import Demo from './Demo'

const App = () => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, sepolia],
    [
      chain => {
        const network = sequence.network.findNetworkConfig(sequence.network.allNetworks, chain.id)
        if (!network) {
          throw new Error(`Could not find network config for chain ${chain.id}`)
        }

        return { chain, rpcUrls: { http: [network.rpcUrl] } }
      }
    ]
  )

  const walletConnectProjectId = 'ecf05e6e910a7006159c69f03dafbaeb'

  const urlParams = new URLSearchParams(window.location.search)
  let walletAppURL = 'https://sequence.app'

  if (urlParams.get('walletAppURL') && urlParams.get('walletAppURL').length > 0) {
    walletAppURL = urlParams.get('walletAppURL')
  }

  const connectors = connectorsForWallets([
    {
      groupName: 'Recommended',
      wallets: [
        sequenceWallet({
          projectAccessKey: 'iK0DPkHRt0IFo8o4M3fZIIOAAAAAAAAAA',
          chains,

          defaultNetwork: 1,

          connect: {
            app: 'Demo app'
          },

          // This is optional, and only used to point to a custom
          // environment for the wallet app. By default, it will
          // point to https://sequence.app/
          walletAppURL
        }),
        metaMaskWallet({ chains, projectId: walletConnectProjectId, shimDisconnect: true }),
        rainbowWallet({ chains, projectId: walletConnectProjectId }),
        walletConnectWallet({
          chains,
          projectId: walletConnectProjectId
        }),
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
