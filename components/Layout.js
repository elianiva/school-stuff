import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} | School Log</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
          min-height: 65vh;
        }
      `}</style>
    </>
  )
}
