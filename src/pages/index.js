import React from "react"
import { graphql, navigate } from 'gatsby'
import DefaultLayout from '../layouts/default'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'

function generatePortfolioCards(datas) {
  const result = datas.map(({ node: data }) => {
    return (
      <div className="w-1/3" key={ data.id }>
        <Card
          img={ data.cover_image.publicURL }
          click={ goToLink }
          url={ data.url }
          data={ data }
        >
          <div className="flex flex-col text-center mt-4">
            <span className="font-bold">{ data.name }</span>
            <span className="font-light">
              { data.short_description }
            </span>
          </div>
        </Card>
      </div>
    )
  })
  return result
}

function generateBlogCards(datas) {
  const result = datas.map(({ node: data }) => {
    return (
      <div className="w-1/3" key={ data.id }>
        <Card
          img={ data.cover_image.publicURL }
          click={ ({ data }) => navigate(`/blog/${data.id}`) }
          url={ data.url }
          data={ data }
        >
          <div className="flex flex-col text-center mt-4">
            <span className="font-bold">{ data.title }</span>
            <span className="font-light">
              { data.short_description }
            </span>
          </div>
        </Card>
      </div>
    )
  })
  return result
}

function goToLink({ data }) {
  navigate(`/portfolio/${data.id}`)
}

export default function Home({ data }) {
  console.log(data)
  const { allStrapiBlog: blogs, allStrapiPortfolio: portfolios} = { ...data }
  const portfoliosCard = generatePortfolioCards(portfolios.edges)
  const blogsCard = generateBlogCards(blogs.edges)

  return (
    <DefaultLayout>
      <div className="w-full flex flex-col items-center">
        <Jumbotron />
        <div className="w-full px-32">
          <span className="font-bold text-4xl">Portfolio</span>
          <div className="flex flex-row mt-4 space-x-8">
            <div className="w-full flex flex-row space-x-6">
              { portfoliosCard }
            </div>
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
          short_description
          description
          cover_image {
            publicURL
          }
        }
      }
    }
    allStrapiBlog(limit: 3) {
      edges {
        node {
          id
          title,
          cover_image {
            publicURL
          }
        }
      }
    }
  }
`