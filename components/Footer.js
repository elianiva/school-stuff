export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>
            This is is built using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next JS
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </p>
          <p>
            Source code is availabel{" "}
            <a
              href="https://github.com/elianiva/school-log"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here
            </a>
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            border-top: 0.125rem #d4e1ef solid;
            padding: 2rem;
            margin-top: 2rem;
          }
          div {
            margin: 0 auto;
            max-width: 800px;
            text-align: center;
          }
          a {
            font-weight: 600;
            color: #5c90ff;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}
