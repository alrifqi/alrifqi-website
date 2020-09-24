import React from "react"
import DefaultLayout from '../layouts/default'
import Jumbotron from '../components/Jumbotron'


export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col items-center">
        <Jumbotron />
        <div className="bg-white w-full">
          Portfolio
        </div>
      </div>
    </DefaultLayout>
  )
}
