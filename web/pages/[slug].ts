import { getClient } from 'utils/sanity'
import { configQuery } from 'utils/queries'
import Head from 'next/head'
import groq from 'groq'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'

const query = groq`
  *[_type == 'post' && slug.current == $slug][0]
`

const Post = ({ doc, config, preview }) => {
  return (
    <Layout>
      <Seo config={config} doc={doc} />
      {doc &&
        <section>
          <Container>
            <h1 className='text-2xl'>{doc.title}</h1>
          </Container>
        </section>
      }
    </Layout>
  )
}

export const getStaticProps = async ({ params, preview = false }) => {
  const doc = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  const config = await getClient().fetch(configQuery)
  return {
    props: { preview, doc, config }
  }
}

export const getStaticPaths = async () => {
  const routes = await getClient()
    .fetch(`*[_type == 'post'][].slug.current`)

  return {
    paths: routes.map((slug) => ({ params: { slug } })),
    fallback: true
  }
}

export default Post
