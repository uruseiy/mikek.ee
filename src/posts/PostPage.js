import React, {Component} from 'react'

export default class PostPage extends Component {
    render() {
        const {data} = this.props

        return (
            <div>
                <span>{data.markdownRemark.frontmatter.date}</span>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html
                }}/>

            </div>
        )
    }
}

export const query = graphql`
query PostContent($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      id
      html
      frontmatter {
        title,
        date (formatString: "D MMMM YYYY")
      }
    }
  }
  `