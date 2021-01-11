import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div>
            <Link href="/">
              <a className="link">Posts</a>
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          border-bottom: 0.125rem #ebdbb2 solid;
          background-color: #fffbf0;
          margin-bottom: 2rem;
          padding: 1rem;
          font-family: "PT Sans", sans-serif;
        }
        .container {
          display: flex;
          max-width: 800px;
          margin: 0 auto;
        }
        .container div {
          flex: 1;
          text-align: center;
        }
        .link {
          color: #292d3e;
          text-decoration: none;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
