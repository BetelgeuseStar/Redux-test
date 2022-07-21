import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className='Navbar'>
			<Link className='Navbar__link' to='/' >Todos</Link>
			<Link className='Navbar__link' to='/posts' >Posts</Link>
		</div>
	)
}

export default Navbar