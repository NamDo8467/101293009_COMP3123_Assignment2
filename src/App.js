import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar/NavBar"
import AddEmployee from './components/Employees/Employee/AddEmployee'
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
function App() {
	return (
		<div className='app h-screen relative'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/' element={<NavBar />}>
					<Route index element={<Home />} />
					<Route path='addEmployee' element={<AddEmployee />} />
				</Route>
				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
			<Routes></Routes>
		</div>
	)
}

export default App
