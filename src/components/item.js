import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ number, date, note, url }) => (
  <li css={[ styles.container ]}>
    <a href={url} css={[ styles.link ]}>
      <div css={[ styles.left ]}>
        <p css={[ styles.number ]}>
          {number}.
        </p>
      </div>
      <div css={[ styles.right ]}>
        <p css={[ styles.note ]}>
          {note}
        </p>
        <p css={[ styles.date ]}>
          {date}
        </p>
      </div>
    </a>
  </li>
)

const styles = {
  container: {
    marginBottom: 10,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    textDecoration: 'none',
    color: '#444',
    backgroundColor: '#f8f9fa',
    transition: 'all 70ms',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 16px',
    },
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.5em',
    width: 70,
    padding: '2.5em 0',
    textAlign: 'center',
    borderRadius: 7,
  },
  right: {
  },
  number: {
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
  },
  note: {
    margin: '0 0 0.5em 0',
    fontWeight: 'bold',
    fontSize: '17px',
  },
  date: {
    margin: 0,
    fontSize: '13px',
    color: '#adb5bd',
  },
}

export default ListItem
