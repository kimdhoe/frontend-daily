import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ siteTitle }) => (
  <li css={[ styles.listItem ]}>
    2. 2019.01.06
  </li>
)

const styles = {
  container: {
  },
  wrapper: {
    margin: '0 auto',
    padding: '1.5em 0',
    maxWidth: 768,
  },
}

export default Header
