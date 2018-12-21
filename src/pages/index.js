import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import "../scss/main.scss"

export default () => (
  <Layout>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
  </Layout>
)
