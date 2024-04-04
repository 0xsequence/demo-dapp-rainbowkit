import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@0xsequence/design-system'
import '@0xsequence/design-system/styles.css'

import { Chain, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit'

import { sequenceWallet } from '@0xsequence/rainbowkit-plugin'
import { metaMaskWallet, injectedWallet, rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'viem/chains'
import { sequence } from '0xsequence'
import Demo from './Demo'
import { Transport } from 'viem'

const App = () => {
  // const { chains, publicClient, webSocketPublicClient } = configureChains(
  //   [mainnet, polygon, optimism, arbitrum, sepolia],
  //   [
  //     chain => {
  //       const network = sequence.network.findNetworkConfig(sequence.network.allNetworks, chain.id)
  //       if (!network) {
  //         throw new Error(`Could not find network config for chain ${chain.id}`)
  //       }

  //       return { chain, rpcUrls: { http: [network.rpcUrl] } }
  //     }
  //   ]
  // )

  const walletConnectProjectId = 'ecf05e6e910a7006159c69f03dafbaeb'

  const urlParams = new URLSearchParams(window.location.search)
  let walletAppURL = 'https://sequence.app'

  if (urlParams.get('walletAppURL') && urlParams.get('walletAppURL').length > 0) {
    walletAppURL = urlParams.get('walletAppURL')
  }

  const chains = [mainnet, polygon, optimism, arbitrum, sepolia] as const satisfies Chain[]
  const transports = chains.reduce((acc, chain) => {
    acc[chain.id] = http()

    return acc
  }, {} as Record<number, Transport>)

  const connectors = connectorsForWallets(
    [
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
          metaMaskWallet({ projectId: walletConnectProjectId }),
          rainbowWallet({ projectId: walletConnectProjectId }),
          walletConnectWallet({
            projectId: walletConnectProjectId
          }),
          injectedWallet()
        ]
      }
    ],
    {
      appName: 'RainbowKit demo',
      projectId: 'YOUR_PROJECT_ID'
    }
  )

  const config = createConfig({
    chains,
    transports,
    connectors
  })

  const queryClient = new QueryClient()

  return (
    <ThemeProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider initialChain={1}>
            <Demo />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}

export default App
