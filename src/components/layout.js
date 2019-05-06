import React from "react"
import { Helmet } from "react-helmet"
import 'normalize.css'
import "../scss/main.scss"
import Header from "./header"

export default ({ children }) => (
  <div id="snf">
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139719124-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-139719124-1');
      </script>
      <title>Supernatural Feat</title>
      {/* <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>
)
