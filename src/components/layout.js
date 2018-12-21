import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"

export default ({ children }) => (
  <div id="snf">
    <Helmet>
      <title>Supernatural Feat</title>
    </Helmet>
    <Header />
    {children}
  </div>
)
