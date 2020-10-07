import React from 'react'
import { useQuery, gql } from '@apollo/client'
import DefaultLayout from '../../../layouts/default'
import BlogPage from '../../../components/BlogPage'

const GET_BLOG_DATA = (id) => {
  const extractId = id.split("_")
  return gql`
    query BlogDetailQuery {
      blog(id: ${extractId[1]}) {
        title
        content
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
  if (data.blog) {
    elem = BlogPage(data)
  }
  return elem
}

export default function BlogIndex({ params }) {
  const { loading, data } = useQuery(GET_BLOG_DATA(params.id))
  return (
    <DefaultLayout>
      <div className="px-32 mt-16">
        {
          loading
          ? (
            <div>
              loading
            </div>
          )
          : renderData(data) 
        }
      </div>
    </DefaultLayout>
  )
}