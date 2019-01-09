import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Item from '../components/item'

const IndexPage = () => (
  <Layout>
    <SEO
      title="home"
      keywords={[ 'frontend', 'developer', 'development', 'article' ]}
    />

    <ul css={[ styles.list ]}>
      <Item
        number={4}
        date={'2019. 01. 09'}
        note={'Introducing React Hooks'}
        url={'https://medium.com/@kimdhoe1/4-introducing-hooks-db43f3be428f'}
      />
      <Item
        number={3}
        date={'2019. 01. 08'}
        note={'Better reusable React components with the overrides pattern'}
        url={'https://medium.com/@kimdhoe1/3-better-reusable-react-components-with-the-overrides-pattern-bee73a42428e'}
      />
      <Item
        number={2}
        date={'2019. 01. 07'}
        note={'A unified styling language'}
        url={'https://medium.com/@kimdhoe1/2-a-unified-styling-language-b957e4daa8ea'}
      />
      <Item
        number={1}
        date={'2019. 01. 06'}
        note={'Things I don\'t know'}
        url={'https://medium.com/@kimdhoe1/1-things-i-dont-know-3dcc616811ef'}
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
  list: {
    padding: 0,
    listStyleType: 'none',
  },
  footer: {
    marginTop: '5em',
  },
}

export default IndexPage
