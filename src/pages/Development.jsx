import React from 'react'
import "../assets/styles/Development.css"
export default function Development() {
  return (
    <div className='development'>
        {/* <img src="errorBG.jpg" alt="error BG" /> */}
      <div className="error">
        <div className="img-container">
            <img src="catError.jpg" alt="cat logo" />
        </div>
        <div className="info-container">
            <div className="info-head">
                <span>404
                </span>
                <h1>Error</h1>
            </div>
            <div className="info-details">
                <h2>🚧 Page Under Construction</h2>
                <span>This page is currently being built and refined to bring you the best experience.</span>
                <span>Please check back soon — it will be available shortly!</span>
                <span>Thank you for your patience 🙏</span>
            </div>
        </div>
      </div>
    </div>
  )
}
