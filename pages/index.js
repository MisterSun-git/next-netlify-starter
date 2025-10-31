import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>IP9</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ip9.site" />
        <p className="description">
          <a src="https://ip9.site">IP9.SITE</src>
        </p>
      </main>

      <Footer />
    </div>
  )
}
