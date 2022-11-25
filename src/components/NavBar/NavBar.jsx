import React from "react"
import { Link, Outlet } from "react-router-dom"
function NavBar() {
	return (
		<>
			<nav className='nav h-1/5 bg-purple-300 flex items-center justify-between relative'>
				<Link to='/' className='text-3xl text-white pl-2'>
					Employee Management System
				</Link>
				<button className='p-2 bg-yellow-300 rounded-md absolute right-3'>Logout</button>
			</nav>
			<Outlet></Outlet>
		</>
	)
}

export default NavBar
