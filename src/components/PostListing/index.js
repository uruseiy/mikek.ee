import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({post}) => (
  <article>
    <Link to={post.fields.slug} as='h3'>
      <h3>{post.frontmatter.title}</h3>
    </Link>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
  </article>
)

export default PostListing