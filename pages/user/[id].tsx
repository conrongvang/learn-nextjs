import Head from "next/head";

import { getAllPostIds, getPostData } from "lib/posts";
import Layout from "components/layout";
import Date from "components/date";
import utilStyles from "styles/utils.module.css";

// getStaticPaths run first, and return paths for getStaticProps
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// getStaticProps run second, and query data depend on getStaticPaths's result
// final return props data for React component
export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Info run last, and receive props data depend on getStaticProps's result
export default function Info({ postData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
