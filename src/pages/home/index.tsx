import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { Flex, Text, Card, Button } from 'theme-ui'
import { injectedConnection } from '../../utils/connection'

const Home = () => {
  const {
    account,
    accounts,
    ENSName,
    ENSNames,
    isActivating,
    isActive,
    connector,
  } = useWeb3React()
  console.log(accounts, isActivating, isActive)

  return (
    <Flex
      sx={{
        height: '100vh',
        width: '100%',
        background: 'background',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card>
        <Text sx={{ color: 'black', mb: '10px', alignSelf: 'center' }}>
          Connector
        </Text>
        {!account && (
          <Button onClick={() => injectedConnection.connector.activate()}>
            Press to login to metamask
          </Button>
        )}
        {account && (
          <>
            <Text sx={{ color: 'black', mb: '10px' }}>{account}</Text>{' '}
            <Button onClick={() => connector.resetState()}>
              Press to logout of metamask
            </Button>
          </>
        )}
      </Card>
    </Flex>
  )
}

export default Home
