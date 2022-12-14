import Head from 'next/head'
import { getSession } from "next-auth/react";
import { Header } from '../components/Header'
import { Login } from '../components/Login';
import { Sidebar } from '../components/Sidebar'
import { Feed } from '../components/Feed';


export default function Home({ session }) {

  if (!session) return <Login />;


  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Feed (Create Post and Posts) */}
        <Feed />
        {/* Right sidebar*/}


      </main>
    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context);

  return {
  
    props: {session}
  }

}
