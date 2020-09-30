import React, { useState } from 'react'

export const AppContext = React.createContext()

export const Provider = props => {
  const [portfolios, setPortfoliosData] = useState(false)
  const provider = {
    portfolios: portfolios,
    setPortfoliosData: setPortfoliosData
  }
  return (
    <AppContext.Provider value={ provider }>
      {props.children}
    </AppContext.Provider>
  )
}
