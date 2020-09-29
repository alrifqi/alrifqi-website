import React from 'react'
import DefaultLayout from '../../../layouts/default'

export default function PortfolioIndex(props) {
  return  (
    <DefaultLayout>
      <div>
        { props.params.id }
      </div>
    </DefaultLayout>
  )
}