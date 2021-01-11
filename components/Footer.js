export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>
            <a
              href="https://github.com/elianiva/school-log"
              target="_blank"
              rel="noopener noreferrer"
            >
              src
            </a>
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            border-top: 0.125rem #ebdbb2 solid;
            background-color: #fffbf0;
            padding: 1rem 2rem;
            margin-top: 2rem;
            font-family: "PT Sans", sans-serif;
          }
          div {
            margin: 0 auto;
            max-width: 800px;
            text-align: center;
          }
          a {
            font-weight: 600;
            color: #d79921;
            text-decoration: none;
          }
          p {
            line-height: 2rem;
          }
        `}
      </style>
    </>
  )
}
