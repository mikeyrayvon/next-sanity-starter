import { getClient } from 'utils/sanity'
import { configQuery } from 'utils/queries'
import Head from 'next/head'
import groq from 'groq'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'

const query = groq`
  *[_type == 'post']
`

const Landing = ({ docs, config }) => {
  return (
    <Layout>
      <Seo config={config} />
      {docs && docs.length > 0 &&
        <Container></Container>
      }
    </Layout>
  )
}

export const getStaticProps = async () => {
  const docs = await getClient(true).fetch(query)
  const config = await getClient().fetch(configQuery)
  return {
    props: { docs, config } // will be passed to the page component as props
  }
}

export default Landing
