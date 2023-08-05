import { getClient } from "utils/sanity";
import { configQuery } from "utils/queries";
import Head from "next/head";
import groq from "groq";
import Link from "next/link";

import Layout from "components/Layout";
import Seo from "components/Seo";
import Container from "components/Container";

const query = groq`
  *[_type == 'post']
`;

const Landing = ({ docs, config }) => {
  return (
    <Layout>
      <Seo config={config} />
      {docs && docs.length > 0 && (
        <section>
          <Container>
            <ul className="list-disc">
              {docs.map((doc) => {
                return (
                  <li key={doc._id}>
                    <Link href={`/${doc.slug.current}`} className="underline">
                      {doc.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const docs = await getClient(true).fetch(query);
  const config = await getClient().fetch(configQuery);
  return {
    props: { docs, config }, // will be passed to the page component as props
  };
};

export default Landing;
