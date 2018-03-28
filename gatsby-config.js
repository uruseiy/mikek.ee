module.exports = {
  siteMetadata: {
    title: 'mikek.ee',
    description: "there's no place like home"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [{
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: "language-",
              inlineCodeMarker: '±'
            }
        }]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ],

};
