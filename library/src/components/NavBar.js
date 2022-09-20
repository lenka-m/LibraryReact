import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = ({numOfBooks}) => {

  return (
    <div className='NavBar'>
        

        <img class = "NavBarLogo"src = "https://cutewallpaper.org/24/book-logo-png/1984316215.jpg"></img>
        <ul className='NavBarList'>
          <li><Link to = "/"> Our Library</Link></li>
          <li><Link to = "/ReadBooks"> ReadBooks</Link></li>
          <li>Number of read books: <u>{numOfBooks}</u></li>
        </ul>
    </div>
  )
}

export default NavBar