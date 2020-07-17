export default function Footer() {
  return (
    <>
      <footer>
        <div>
          This is is built using <a href="https://nextjs.org">Next JS</a> and
          hosted on Vercel
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
        `}
      </style>
    </>
  )
}
