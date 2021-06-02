import {createContext, useReducer, useContext} from 'react'

const initialState = {
  data: false
}

export const store = createContext(initialState)

const { Provider } = store

export const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    const {type} = action
    switch(type) {
      case 'set true':
        return {
          ...state,
          data: true
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export const useGlobalState = () => useContext(store)
