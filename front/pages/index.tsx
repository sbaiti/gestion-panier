import type { NextPage } from 'next'
import Router from "next/router"

const Home: NextPage = () => {
  Router.push("accueil")
  return null
}

export default Home
