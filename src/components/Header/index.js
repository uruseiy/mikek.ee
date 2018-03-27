import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from "styled-components"
import Img from "gatsby-image"

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome) ? "70vh" : "20vh"};
  h1 {
    img {
      height: 80px;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const {location} = this.props;
    if(location.pathname !== prevProps.location.pathname) {
      if(location.pathname === '/' ) {
        this.wrapper.animate([
          {height: "20vh"},
          {height: "70vh"}
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      } else {
        this.wrapper.animate([
          {height: "70vh"},
          {height: "20vh"}
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      }
    }
  }

  render() {
    const {data, location} = this.props

    return (
      <HeaderWrapper 
        isHome={this.props.location.pathname==='/'}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </h1>        
          <p>{data.site.siteMetadata.description}</p>
        </HeaderContainer>
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={data.background.sizes }
        />
      </HeaderWrapper>
    )
  }
}


