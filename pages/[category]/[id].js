import Layout from "../../components/Layout"
import { getAllPostsSlug, getPostData } from "../../lib/posts"

export default function Post({ postData }) {
  return (
    <>
      <Layout title={postData.title}>
        <div className="container">
          <h1>{postData.title}</h1>
          <hr />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postData.body }}
          ></div>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          max-width: 80ch;
          margin: 0 auto;
        }
        h1 {
          font-family: "PT Sans", Arial, sans-serif;
          text-align: center;
          font-size: 1.75rem;
          line-height: 2rem;
          margin: 0;
        }
        hr {
          width: 10rem;
          background-color: #5c90ff;
          height: 0.25rem;
          border-radius: 0.5rem;
          border: none;
          margin: 0.5rem auto 1.5rem;
        }
        .content {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostsSlug()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.category, params.id)
  return {
    props: {
      postData
    }
  }
}
