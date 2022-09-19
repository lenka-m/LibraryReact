import React from 'react'

const NavBar = ({numOfBooks}) => {

  return (
    <div className='NavBar'>
        

        <h1> Online knjizara</h1>
        <div className='library-books'>
          <p className='books-number'>{numOfBooks}</p>
        </div>
    </div>
  )
}

export default NavBar