import React from 'react'
import { useQuery, gql } from '@apollo/client'

import DefaultLayout from '../../../layouts/default'

const GET_PORTFOLIO_DATA = (id) => {
  const extractId = id.split("_")
  return gql`
    query PortfolioDetailQuery {
      portfolio(id: ${extractId[1]}) {
        name
        url
      }
    }
  `
}

const renderData = (data) => {
  let elem = (
    <div>
      Data Not found
    </div>
  )
  if (data.portfolio) {
    elem = (
      <div>
        { data.portfolio.name }
      </div>
    )
  }
  return elem
}

export default function PortfolioIndex({ params }) {
  const { loading, data } = useQuery(GET_PORTFOLIO_DATA(params.id))
  
  return  (
    <DefaultLayout>
      <div>
        {
          !loading
          ? renderData(data)
          : (
            <div>
              loadaing
            </div>
          )
        }
      </div>
    </DefaultLayout>
  )
}
