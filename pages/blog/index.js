import Head from "next/head"
import Link from "next/link"

function Home() {
    return (
    <>
        <Head>
            <title> My Blog! </title>
            <meta name="viewport" content="inital-scale=1.0, width=device-width" /> 
        </Head>
        <div>Welcome, Reader!</div>
        <Link href="/">
            <a>Go back home</a>
        </Link>
    </>
    )
}

export default Home