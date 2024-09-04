import '@0xsequence/design-system/styles.css'
import '@rainbow-me/rainbowkit/styles.css'

import './global.css'

import { ThemeProvider } from '@0xsequence/design-system'
import { Chain, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit'

import { sequenceWallet } from '@0xsequence/rainbowkit-plugin'
import { metaMaskWallet, injectedWallet, rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon, polygonMumbai, optimism, arbitrum, sepolia, bsc, bscTestnet } from 'viem/chains'
import { sequence } from '0xsequence'
import Demo from './Demo'

const arbitrumSepolia: Chain = {
  id: 421614,
  name: 'Arbitrum Sepolia',
  network: 'aribtrum-sepolia',
  testnet: true,
  nativeCurrency: {
    name: 'Arbitrum Sepolia Ether',
    symbol: 'ASETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://nodes.sequence.app/arbitrum-sepolia']
    },
    public: {
      http: ['https://nodes.sequence.app/arbitrum-sepolia']
    }
  },
  //iconUrl: 'https://assets.sequence.info/images/networks/medium/421614.webp'
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI2LjYiIGhlaWdodD0iMjYuNiIgeD0iLjciIHk9Ii43IiBmaWxsPSIjMkQzNzRCIiBzdHJva2U9IiM5NkJFREMiIHN0cm9rZS13aWR0aD0iMS40IiByeD0iMTMuMyIvPjxtYXNrIGlkPSJhIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHg9IjAiIHk9IjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiPjxyZWN0IHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iI0M0QzRDNCIgcng9IjE0Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMyOEEwRjAiIGQ9Im0xNC4wODYxIDE4LjYwNDEgNi41MDE0IDEwLjIyMzkgNC4wMDU3LTIuMzIxMy03Ljg2LTEyLjM5NDMtMi42NDcxIDQuNDkxN1ptMTMuMDc0NCAzLjQ2OTItLjAwMy0xLjg1OTktNy4zMDY0LTExLjQwNy0yLjMwODcgMy45MTczIDcuMDkxIDExLjQzMDMgMi4xNzItMS4yNTg2YS45NjI4Ljk2MjggMCAwIDAgLjM1NTUtLjcwMDlsLS4wMDA0LS4xMjEyWiIvPjxyZWN0IHdpZHRoPSIyNS45IiBoZWlnaHQ9IjI1LjkiIHg9IjEuMDUiIHk9IjEuMDUiIGZpbGw9InVybCgjYikiIGZpbGwtb3BhY2l0eT0iLjMiIHN0cm9rZT0iIzk2QkVEQyIgc3Ryb2tlLXdpZHRoPSIyLjEiIHJ4PSIxMi45NSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0uMzYzNCAyOC4yMjA3LTMuMDctMS43Njc0LS4yMzQtLjgzMzNMNy43NDYxIDkuMDE5NGMuNzI5OC0xLjE5MTMgMi4zMTk3LTEuNTc1IDMuNzk1Ny0xLjU1NDFsMS43MzIzLjA0NTdMLjM2MzQgMjguMjIwN1pNMTkuMTY1NSA3LjUxMWwtNC41NjUzLjAxNjZMMi4yNCAyNy45NTMzbDMuNjEwMyAyLjA3ODguOTgxOC0xLjY2NTJMMTkuMTY1NSA3LjUxMVoiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+Cg=='
}

const polygonAmoy: Chain = {
  id: 80002,
  name: 'Polygon Amoy',
  network: 'polygon-amoy',
  testnet: true,
  nativeCurrency: {
    name: 'Matic Amoy',
    symbol: 'MATIC',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://nodes.sequence.app/amoy']
    },
    public: {
      http: ['https://nodes.sequence.app/amoy']
    }
  },
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iQSIgeDE9Ii0xOC4yNzUlIiB4Mj0iODQuOTU5JSIgeTE9IjguMjE5JSIgeTI9IjcxLjM5MyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhMjI5YzUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3YjNmZTQiLz48L2xpbmVhckdyYWRpZW50PjxjaXJjbGUgaWQ9IkIiIGN4PSIxNCIgY3k9IjE0IiByPSIxNCIvPjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJDIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNCIi8+PC9tYXNrPjxnIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbD0idXJsKCNBKSIgZD0iTS0xLjMyNi0xLjMyNmgzMC42NTF2MzAuNjUxSC0xLjMyNnoiIG1hc2s9InVybCgjQykiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMDQ5IDE3LjAyMWwzLjk2LTIuMjg3YS42ODEuNjgxIDAgMCAwIC4zNC0uNTg5VjkuNTcyYS42ODMuNjgzIDAgMCAwLS4zNC0uNTlsLTMuOTYtMi4yODZhLjY4Mi42ODIgMCAwIDAtLjY4IDBsLTMuOTYgMi4yODdhLjY4Mi42ODIgMCAwIDAtLjM0LjU4OXY4LjE3M0wxMC4yOSAxOS4zNWwtMi43NzctMS42MDR2LTMuMjA3bDIuNzc3LTEuNjA0IDEuODMyIDEuMDU4VjExLjg0bC0xLjQ5Mi0uODYxYS42ODEuNjgxIDAgMCAwLS42OCAwbC0zLjk2IDIuMjg3YS42ODEuNjgxIDAgMCAwLS4zNC41ODl2NC41NzNjMCAuMjQyLjEzLjQ2OC4zNC41OWwzLjk2IDIuMjg2YS42OC42OCAwIDAgMCAuNjggMGwzLjk2LTIuMjg2YS42ODIuNjgyIDAgMCAwIC4zNC0uNTg5di04LjE3NGwuMDUtLjAyOCAyLjcyOC0xLjU3NSAyLjc3NyAxLjYwM3YzLjIwOGwtMi43NzcgMS42MDMtMS44My0xLjA1NnYyLjE1MWwxLjQ5Ljg2YS42OC42OCAwIDAgMCAuNjggMHoiLz48L2c+PC9nPjwvc3ZnPg=='
}

const App = () => {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, bsc, sepolia, polygonMumbai, polygonAmoy, arbitrumSepolia, bscTestnet],
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
