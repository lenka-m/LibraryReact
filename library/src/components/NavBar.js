import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = ({numOfReadBooks}) => {

  return (
    <div className='NavBar'>
        

        <img className = "NavBarLogo"src = "https://cutewallpaper.org/24/book-logo-png/1984316215.jpg"></img>
        <ul className='NavBarList'>
          <li><Link to = "/"> All Books</Link></li>
          <li><Link to = "/ReadBooks"> ReadBooks</Link></li>
          <li><Link to = "/BooksToRead"> Books to Read</Link></li>
          <li> <u>{numOfReadBooks} / 10</u></li>
        </ul>
    </div>
  )
}

export default NavBar