import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ListItem = ({ number, date, note, url }) => (
  <li css={[ styles.listItem ]}>
    <a href={url} css={[ styles.listItemLink ]}>
      <div css={[ styles.listItemLeft ]}>
        <p css={[ styles.number ]}>
          {number}.
        </p>
      </div>
      <div css={[ styles.listItemRight ]}>
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

const IndexPage = () => (
  <Layout>
    <SEO
      title="home"
      keywords={[ 'frontend', 'developer', 'development', 'article' ]}
    />

    <ul css={[ styles.list ]}>
      <ListItem
        number={1}
        date={'2019. 01. 06'}
        note={'You must know EVERYTHING!!!'}
        url={'/'}
      />
    </ul>

    <footer css={[ styles.footer ]}>
      Curated by
      {` `}
      <a href="https://dhk.party">Kimdhoe</a>
    </footer>
  </Layout>
)

const styles = {
  container: {

  },
  list: {
    padding: 0,
    listStyleType: 'none',
  },
  listItem: {
  },
  listItemLink: {
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
  listItemLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.5em',
    width: 70,
    padding: '2.5em 0',
    textAlign: 'center',
    borderRadius: 7,
  },
  listItemRight: {
  },
  number: {
    margin: 0,
    padding: 0,
    fontSize: '0.9em',
    fontWeight: 'bold',
  },
  note: {
    margin: '0 0 0.5em 0',
    fontWeight: 'bold',
  },
  date: {
    margin: 0,
    fontSize: '0.7em',
    fontWeight: 'bold',
    color: '#adb5bd',
  },
  footer: {
    marginTop: '5em',
  },
}

export default IndexPage
