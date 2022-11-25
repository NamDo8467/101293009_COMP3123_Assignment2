import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar/NavBar"
import AddEmployee from "./components/Employees/Employee/AddEmployee"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Employee from "./components/Employees/Employee/Employee"
import UpdateEmployee from "./components/Employees/Employee/UpdateEmployee"
function App() {
	return (
		<div className='app h-screen relative'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/' element={<NavBar />}>
					<Route index element={<Home />} />
					<Route path='addEmployee' element={<AddEmployee />} />
					<Route path='employee/:id' element={<Employee />} />
					<Route path='updateEmployee/:id' element={<UpdateEmployee />} />
				</Route>

				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
			<Routes></Routes>
		</div>
	)
}

export default App
