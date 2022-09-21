import React from 'react'

const Filter = ({onSelectFilter}) => {
  return (
    <div className='filterClass'>
        <button className='filterButton' onClick={()=>onSelectFilter("any")}>All</button>
        <button className="filterButton" onClick={()=>onSelectFilter("novel")}>Novel</button>
        <button className = "filterButton" onClick={()=>onSelectFilter("horror")}> Horror</button>
    </div>
  )
}

export default Filter