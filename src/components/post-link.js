import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="post-link">
    <Link to={post.frontmatter.path}>
      <div>
          {post.frontmatter.title} 
      </div>
      <span>{post.frontmatter.date}</span>
    </Link>
  </div>
)

export default PostLink