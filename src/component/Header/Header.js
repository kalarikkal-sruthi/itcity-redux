import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div  style={{display:'flex'}}>
      <h2>movieapp</h2>
    <Link to="/">
    <div className='logoimage'>



<h2>logo</h2>
    </div>
    </Link>
    </div>
  )
}

export default Header