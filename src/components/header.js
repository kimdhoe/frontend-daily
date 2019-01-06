import React from 'react'
import PropTypes from 'prop-types'

import bookImage from '../images/book-open.svg'

const Header = ({ siteTitle }) => (
  <div css={[ styles.container ]}>
    <div css={[ styles.wrapper ]}>
      <h1 css={[ styles.heading ]}>
        {siteTitle}
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

const styles = {
  container: {
  },
  wrapper: {
    margin: '0 auto',
    padding: '1.5em 0',
    maxWidth: 768,
  },
  heading: {
    letterSpacing: 1,
  },
  char: {
  }
}

export default Header
