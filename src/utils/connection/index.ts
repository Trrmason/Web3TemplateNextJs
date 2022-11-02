import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { ChainId, RPC_PROVIDERS } from '../../../constants/networks'
import { Connection, ConnectionType } from './types'

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`)
}

const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
  (actions) =>
    new Network({
      actions,
      urlMap: RPC_PROVIDERS,
      defaultChainId: ChainId.MAINNET,
    }),
)
export const networkConnection: Connection = {
  connector: web3Network,
  hooks: web3NetworkHooks,
  type: ConnectionType.NETWORK,
}

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions, onError }),
)
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
}


const ye = ''
export default ye