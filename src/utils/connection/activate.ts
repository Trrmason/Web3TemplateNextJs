import { useCallback } from 'react'
import { Connection } from './types'

// This can be expanded to handle more connection logic
const useActivate = () => {
  const activate = useCallback(async (connection: Connection) => {
    console.log(connection)
    try {
      console.log('here')
      await connection.connector.activate()
      console.log('asd')
    } catch (error) {
      console.log('heasdasdsadasre')
      console.debug(error)
      console.error(`connection error: ${error}`)
    }
  }, [])
  return activate
}

export default useActivate
