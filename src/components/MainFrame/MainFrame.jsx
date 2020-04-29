import React from 'react'
import './MainFrame.css'

const MainFrame = ({ children }) => {
  return (
    <>
      <div className="content-frame">
        {children}
      </div>
    </>
  )
}

export default MainFrame
