import React from 'react'
import ReactMarkdown from 'react-remarkable'
import './markdown.css'

const Markdown = ({ children, style }) => (
  <div style={style} className="markdown-body">
    <ReactMarkdown container="div">{children}</ReactMarkdown>
  </div>
)

export default Markdown
