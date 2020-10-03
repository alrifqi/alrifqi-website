import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../../../layouts/default'


export default function BlogPage({ data }) {
  console.log(data)
  return (
    <DefaultLayout>
      <div className="px-32 w-full">
        Blog
      </div>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query getBlogDetail{
    strapiBlog {
      id
      title
      content
      cover_image {
        publicURL
      }
      created_at
    }
  }
`