import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
// import Employees from "./components/Employees/Employees"
// import Employee from "./components/Employees/Employee/Employee"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
function App() {
	return (
		<div className='app h-screen relative'>
			<nav className='nav h-1/5 bg-purple-300 flex items-center justify-between relative'>
				<Link to='/' className='text-3xl text-white'>
					Employee Management System
				</Link>
				<button className='p-2 bg-yellow-300 rounded-md absolute right-3'>Logout</button>
			</nav>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/' element={<Home />} />
				<Route path='*' element={<h1>Not found</h1>} />
				{/* <Route path='/employees' element={<Employees />} /> */}
				{/* <Route path='/employees/:id' element={<Employee />} /> */}
			</Routes>
		</div>
	)
}

export default App
