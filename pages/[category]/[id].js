import Layout from "../../components/Layout"
import { getAllPostsSlug, getPostData } from "../../lib/posts"

export default function Post({ postData }) {
  return (
    <>
      <Layout title={postData.title}>
        <div className="container">
          <h1>{postData.title}</h1>
          <span>{postData.date}</span>
          <hr />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postData.body }}
          ></div>
        </div>
        <style jsx>{`
          .container {
            max-width: 80ch;
            margin: 0 auto;
            padding: 0 1rem;
            font-family: "PT Sans", Arial, sans-serif;
          }
          h1 {
            text-align: center;
            font-size: 1.75rem;
            line-height: 2rem;
            margin: 0;
            color: #292d3e;
          }
          hr {
            background-color: #d79921;
            height: 0.125rem;
            border-radius: 0.5rem;
            border: none;
            margin: 0.5rem auto 1.5rem;
          }
          span {
            text-align: center;
            display: block;
            color: #d79921;
            font-weight: 600;
          }
        `}</style>
      </Layout>
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
