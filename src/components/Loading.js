import React from "react"
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="logo512.png" alt="Logo" className="loading-logo" />
      <div className="spinner"></div>
    </div>
  )
}

export default Loading
