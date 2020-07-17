import Layout from "../components/Layout"
import Card from "../components/Card"

export default function Home() {
  return (
    <Layout title="All Posts">
      <div className="container">
        <h1>All posts</h1>
        <hr />
        <Card
          title="Rangkuman Basis Data"
          desc="This is a short desc of something that would go here like lorem ipsum for example. But lorem ipsum is used to frequently so I use this made up phrase instead. On a second thought, making this phrase long enough is quite challenging..."
          date="12 Juli 2020"
          category="Basis Data"
          slug="/something"
        />
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 80ch;
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
