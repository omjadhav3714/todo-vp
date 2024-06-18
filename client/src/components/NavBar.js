import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='navbar-brand'>MERN - Todo App</div>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#myNavbar' aria-controls='navbarSupportedContent' aria-expanded="false" aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='myNavbar'>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <p className='nav-link'>Todos</p>
                    </li>
                    <li className='navbar-item'>
                        <p className='nav-link'>Add Todo</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar