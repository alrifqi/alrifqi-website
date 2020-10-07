import React from 'react'
import { useQuery, gql } from '@apollo/client'

import DefaultLayout from '../../../layouts/default'
import PortfolioPage from '../../../components/PortfolioPage'

const GET_PORTFOLIO_DATA = (id) => {
  const extractId = id.split("_")
  return gql`
    query PortfolioDetailQuery {
      portfolio(id: ${extractId[1]}) {
        name
        url
        description
        tech_stack
        cover_image {
          url
        }
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
    elem = PortfolioPage(data)
  }
  return elem
}

export default function PortfolioIndex({ params }) {
  const { loading, data } = useQuery(GET_PORTFOLIO_DATA(params.id))
  
  return  (
    <DefaultLayout>
      <div className="px-32 mt-16">
        {
          loading
          ? (
            <div>
              loadaing
            </div>
          )
          : renderData(data) 
        }
      </div>
    </DefaultLayout>
  )
}
