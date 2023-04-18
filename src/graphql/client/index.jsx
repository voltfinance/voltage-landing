import { ApolloClient, InMemoryCache } from '@apollo/client'
import { FUSESWAP_SUBGRAPH_URL, STABLESWAP_SUBGRAPH_URL, VOLTAGE_SUBGRAPH_URL } from '../constants'

export const voltageSubgraphClient = new ApolloClient({
  uri: VOLTAGE_SUBGRAPH_URL,
  cache: new InMemoryCache(),
})

export const stableswapSubgraphClient = new ApolloClient({
  uri: STABLESWAP_SUBGRAPH_URL,
  cache: new InMemoryCache(),
})

export const fuseswapSubgraphClient = new ApolloClient({
  uri: FUSESWAP_SUBGRAPH_URL,
  cache: new InMemoryCache(),
})

export const voltHolderSubgraphClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/t0mcr8se/volt-holders-subgraph',
  cache: new InMemoryCache(),
})
export const voltStakeHolderSubgraphClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/t0mcr8se/makerv2-fuse',
  cache: new InMemoryCache(),
})
