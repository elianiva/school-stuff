import Layout from "../../components/Layout"
import { getAllPostsSlug, getPostData } from "../../lib/posts"

export default function Post({ postData }) {
  return (
    <>
      <Layout>{postData.title}</Layout>
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
  const postData = getPostData(params.category, params.id)
  return {
    props: {
      postData
    }
  }
}
