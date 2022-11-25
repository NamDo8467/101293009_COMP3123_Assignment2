import React from "react"
import { Navigate } from "react-router-dom"
import Employees from "./Employees/Employees"
function Home() {
	if (!localStorage.getItem("login")) {
		return <Navigate to='/login' />
	}
	return <Employees />
}

export default Home
