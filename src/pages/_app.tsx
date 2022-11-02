import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { injectedConnection, networkConnection } from '../utils/connection'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const connections = [networkConnection, injectedConnection]
const connectors: [
  Connector,
  Web3ReactHooks,
][] = connections.map(({ hooks, connector }) => [connector, hooks])

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
