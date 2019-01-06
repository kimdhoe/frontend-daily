import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import 'sanitize.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div css={[ styles.container ]}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div css={[ styles.contentContainer ]}>
          <main>
            {children}
          </main>

          <footer css={[ styles.footer ]}>
          </footer>
        </div>
      </div>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = {
  container: {

  },
  contentContainer: {
    margin: '0 auto',
    maxWidth: 768,
  },
  footer: {
    marginTop: '5em',
  },
}

export default Layout
