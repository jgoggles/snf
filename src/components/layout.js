import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div id="snf">
    <Helmet>
      <title>Supernatural Feat</title>
    </Helmet>
    <h1>Supernatural Feat</h1>
    {children}
  </div>
)
