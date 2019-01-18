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
        number={12}
        date={'2019. 01. 17'}
        note={'Write tests. Not too many. Mostly integration.'}
        url={'https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c'}
      />
      <Item
        number={11}
        date={'2019. 01. 16'}
        note={'Why I\'ve stopped exporting defaults from my JavaScript modules'}
        url={'https://medium.com/frontend-daily/why-ive-stopped-exporting-defaults-from-my-javascript-modules-24391eef247c'}
      />
      <Item
        number={10}
        date={'2019. 01. 15'}
        note={'Why I no longer use D3.js'}
        url={'https://medium.com/frontend-daily/10-why-i-no-longer-use-d3-js-544d19128ca9'}
      />
      <Item
        number={9}
        date={'2019. 01. 14'}
        note={'The elements of UI engineering'}
        url={'https://medium.com/frontend-daily/9-the-elements-of-ui-engineering-d3302fd8173b'}
      />
      <Item
        number={8}
        date={'2019. 01. 13'}
        note={'Transducers: Efficient data processing pipelines in JavaScript'}
        url={'https://medium.com/frontend-daily/8-transducers-efficient-data-processing-pipelines-in-javascript-96afb0bfd4b5'}
      />
      <Item
        number={7}
        date={'2019. 01. 12'}
        note={'Defensive JavaScript'}
        url={'https://medium.com/frontend-daily/7-defensive-javascript-46bf4172e273'}
      />
      <Item
        number={6}
        date={'2019. 01. 11'}
        note={'Linked lists in the wild: React Hooks'}
        url={'https://medium.com/frontend-daily/6-linked-lists-in-the-wild-react-hooks-68082d59d3bc'}
      />
      <Item
        number={5}
        date={'2019. 01. 10'}
        note={'A comprehensive look back at front-end in 2018'}
        url={'https://medium.com/frontend-daily/5-a-comprehensive-look-back-at-front-end-in-2018-f08b852b4e97'}
      />
      <Item
        number={4}
        date={'2019. 01. 09'}
        note={'Introducing React Hooks'}
        url={'https://medium.com/frontend-daily/4-introducing-hooks-db43f3be428f'}
      />
      <Item
        number={3}
        date={'2019. 01. 08'}
        note={'Better reusable React components with the overrides pattern'}
        url={'https://medium.com/frontend-daily/3-better-reusable-react-components-with-the-overrides-pattern-bee73a42428e'}
      />
      <Item
        number={2}
        date={'2019. 01. 07'}
        note={'A unified styling language'}
        url={'https://medium.com/frontend-daily/2-a-unified-styling-language-b957e4daa8ea'}
      />
      <Item
        number={1}
        date={'2019. 01. 06'}
        note={'Things I don\'t know'}
        url={'https://medium.com/frontend-daily/1-things-i-dont-know-3dcc616811ef'}
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
