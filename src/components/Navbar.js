import React from 'react'
import Search from './Search'
import SearchNav from './SearchNav'

function Navbar() {
    return (
        <div className="Navbar">
            <h3 className="nav-logo">logo</h3>
            <SearchNav/>
            <Search />
            <a href="#">Home</a>
            <a href="#">Manga</a>
            <a href="#">Top</a>
            <a href="#">Genre</a>
            <a href="#">News</a>
            <a href="#">About</a>
        </div >
    )
}

export default Navbar
