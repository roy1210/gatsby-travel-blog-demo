import { Link } from 'gatsby'
import React from "react"
import Featured from '../components/featured'
import Footer from '../components/footer'
import Home from '../components/home'
import Layout from "../components/layout"
import Nav from '../components/nav'
import SEO from "../components/seo"
import './index.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className='viewmore'>View More</Link>
    <Footer />
  </Layout>
)

export default IndexPage
