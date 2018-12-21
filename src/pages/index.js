import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import 'normalize.css'
import "../scss/main.scss"

export default () => (
  <Layout>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
  </Layout>
)
