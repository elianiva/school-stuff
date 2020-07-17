import Link from "next/link"

export default function Card({ title, desc, date, category, slug }) {
  return (
    <>
      <Link href={slug}>
        <a className="container">
          <h1>{title}</h1>
          <span>{date}</span>
          <p>{desc}</p>
          <div className="category">{category}</div>
        </a>
      </Link>
      <style jsx>{`
        .container {
          display: block;
          text-decoration: none;
          border-radius: 0.5rem;
          max-width: 80ch;
          margin: 1rem auto;
          border: 1px solid #d4e1ef;
          padding: 1rem;
          font-family: "PT Sans", Arial, sans-serif;
        }

        h1 {
          font-size: 1.5rem;
          line-height: 2rem;
          color: #292d3e;
        }

        span {
          display: block;
          color: #a3b1be;
          margin-bottom: 0.5rem;
          line-height: 1.5rem;
        }

        p {
          line-height: 1.5rem;
          font-family: "Open Sans", sans-serif;
          color: #292d3e;
        }

        .category {
          display: inline-block;
          background-color: #e1effe;
          color: #1c64f2;
          padding: 0.5rem;
          border-radius: 0.25rem;
          margin-top: 1rem;
          font-weight: 600;
          font-family: "Open Sans", sans-serif;
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}
