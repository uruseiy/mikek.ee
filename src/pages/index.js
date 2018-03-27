import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h1>Posts</h1>
    {
      data.allMarkdownRemark.edges.map(({node}) => {
        return <PostListing key={node.id} post={node}/>
      })
    }
  </div>
)

export default IndexPage

export const query = graphql`
query PostIndex {
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges {
      node {
        id
        fields {
          slug
        }
        excerpt
        frontmatter {
          title
          date (formatString: "D MMMM YYYY")
        }
      }
    }
  }
}`