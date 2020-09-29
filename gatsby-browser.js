import React from 'react'
import "./src/styles/global.css"
import { Provider } from './src/shared/provider'

export const wrapRootElement = ({ element }) => (
  <Provider>{element}</Provider>
)