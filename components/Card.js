import Link from "next/link"

export default function Card({ title, desc, date, category, slug }) {
  return (
    <>
      <Link href="/[category]/[id]" as={`/${slug}`}>
        <a className="container">
          <h1>{title}</h1>
          <span>{date}</span>
          <p>
            {desc
              .split(" ")
              .slice(0, 30)
              .join(" ")}
            ...
          </p>
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
          border: 1px solid #ebdbb2;
          background-color: #fffbf0;
          padding: 1rem;
          font-family: "PT Sans", Arial, sans-serif;
        }

        h1 {
          font-size: 1.5rem;
          line-height: 2rem;
          color: #1d2021;
        }

        span {
          display: block;
          color: #d79921;
          margin-bottom: 0.5rem;
          line-height: 1.5rem;
        }

        p {
          line-height: 1.5rem;
          color: #1d2021;
        }

        .category {
          display: inline-block;
          background-color: #ffdfa0;
          color: #ab7a1c;
          padding: 0.5rem;
          border-radius: 0.25rem;
          margin-top: 1rem;
          font-weight: 600;
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}
