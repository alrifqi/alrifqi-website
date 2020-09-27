import React from "react"
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/default'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'

function generatePortfolioCards(datas) {
  const result = datas.map(({ node: data }) => {
    return (
      <Card title={ data.name } key={ data.id } />
    )
  })
  return result
}

function generateBlogCards(datas) {
  const result = datas.map(({ node: data }) => {
    return (
      <Card title={ data.title } key={ data.id } />
    )
  })
  return result
}

export default function Home({ data }) {
  const { allStrapiBlog: blogs, allStrapiPortfolio: portfolios} = { ...data }
  const portfoliosCard = generatePortfolioCards(portfolios.edges)
  const blogsCard = generateBlogCards(blogs.edges)

  return (
    <DefaultLayout>
      <div className="w-full flex flex-col items-center">
        <Jumbotron />
        <div className="w-full px-32">
          <span className="font-bold text-4xl">Portfolio</span>
          <div className="flex flex-row mt-4">
            { portfoliosCard }
          </div>
        </div>

        <div className="w-full px-32 mt-20">
          <span className="font-bold text-4xl">Latest Blog</span>
          <div className="flex flex-row mt-4">
            { blogsCard }
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query getIndex{
    allStrapiPortfolio(limit: 3) {
      edges {
        node {
          id
          name
          url
          description
        }
      }
    }
    allStrapiBlog(limit: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`