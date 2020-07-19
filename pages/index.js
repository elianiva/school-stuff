import Layout from "../components/Layout"
import Card from "../components/Card"
import { getSortedPostsData } from "../lib/posts"

export default function Home({ allPostsData, slug }) {
  return (
    <Layout title="All Posts">
      <div className="container">
        <h1>All posts</h1>
        <hr />
        {allPostsData.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            desc={post.desc}
            date={post.date}
            category={post.category}
            slug={post.slug}
          />
        ))}
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 80ch;
          padding: 0 1rem;
        }

        h1 {
          color: #292d3e;
          text-align: center;
          font-family: "PT Sans", Arial, sans-serif;
        }

        hr {
          width: 10rem;
          background-color: #5c90ff;
          height: 0.25rem;
          border-radius: 0.5rem;
          border: none;
          margin: 0.5rem auto 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
