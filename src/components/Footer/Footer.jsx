import React from 'react'

const Footer = () => {
  return (
    <footer style={{
        background : "white",
        position : "fixed",
        left : '0px',
        bottom : '0px',
        width : '100%',
        textAlign : 'center',
        fontWeight : 'bold'
    }}>
      <p>© {new Date().getFullYear()} || Developed by <a href="https://github.com/rameem2003">Rameem</a> ❤</p>
    </footer>
  )
}

export default Footer
