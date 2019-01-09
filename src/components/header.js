import React from 'react'
import PropTypes from 'prop-types'

import bookImage from '../images/book-open.svg'

const Header = ({ siteTitle }) => (
  <div css={[ styles.container ]}>
    <div css={[ styles.wrapper ]}>
      <h1 css={[ styles.heading ]}>
        {siteTitle}
      </h1>

      <h2 css={[ styles.subtitle ]}>
        읽은 글을 기록/공유하기 위한 미니 큐레이션 프로젝트.<br />
        그날그날 읽고 선별한 Front-end 개발 관련 글을 업데이트합니다.
      </h2>
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
  subtitle: {
    fontSize: 17,
    lineHeight: 1.7,
    fontWeight: 400,
  }
}

export default Header
