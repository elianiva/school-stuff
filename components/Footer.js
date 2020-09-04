export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>
            Web ini dibangun menggunakan{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next JS
            </a>{" "}
            dan dihosting di{" "}
            <a
              href="https://vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </p>
          <p>
            Kode sumber ada pada{" "}
            <a
              href="https://github.com/elianiva/school-log"
              target="_blank"
              rel="noopener noreferrer"
            >
              repositori berikut
            </a>
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            border-top: 0.125rem #d4e1ef solid;
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
            color: #5c90ff;
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
