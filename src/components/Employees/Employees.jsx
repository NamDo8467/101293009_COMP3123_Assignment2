import React, { useEffect, useState, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
function Employees() {
	const tableRowClass = "border p-3"
	const tableRowHoverClass = "hover:bg-slate-200 hover:cursor-pointer"
	const tableHeaderClass = "border bg-slate-400"

	let employeeIdRef = useRef()
	const [navigate, setNavigate] = useState(false)
	const [reload, setReload] = useState(false)
	const [employeeList, setEmployeeList] = useState([])
	const URL = "https://101293009-comp-3123-assignment1.vercel.app/api/emp/employees/"

	useEffect(() => {
		axios
			.get(URL)
			.then(response => {
				setEmployeeList(response.data)
			})
			.catch(error => {
				console.log(error)

				// setEmployeeList([])
			})
	}, [])

	const handleClick = e => {
		e.preventDefault()
		employeeIdRef.current = employeeIdRef.current.innerHTML
		setNavigate(true)
	}
	const handleDelete = e => {
		e.stopPropagation()
		e.preventDefault()
		// console.log(employeeIdRef.current.innerHTML)
		axios
			.post(`${URL}delete`, { id: employeeIdRef.current.innerHTML })
			.then(response => {
				console.log(response)
				setReload(true)
				// setEmployeeList([])
			})
			.catch(error => {
				setReload(true)
				console.log(error)
			})
	}
	if (navigate === true) {
		return <Navigate to={`/employee/${employeeIdRef.current}`} />
	} else if (reload === true) {
		window.location.reload()
	}
	return (
		<div className='employees-container h-4/5 relative flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold text-center'>Employees Table</h1>
			<div className='w-5/6'>
				<button className='p-2 my-4 bg-purple-400 rounded-md self-start'>
					<Link to='/addEmployee'>Add Employee</Link>
				</button>
				<table className='table-fixed text-center border border-collapse w-full'>
					<thead>
						<tr>
							<th className={tableHeaderClass}>Employee Name</th>
							<th className={tableHeaderClass}>Email</th>
							<th className={tableHeaderClass}>Gender</th>
							<th className={tableHeaderClass}>Salary</th>
							<th className={tableHeaderClass}>Action</th>
						</tr>
					</thead>
					<tbody>
						{employeeList.map(employee => {
							return (
								<tr className={tableRowHoverClass} key={employee._id} onClick={handleClick}>
									<td ref={employeeIdRef} hidden>
										{employee._id}
									</td>
									<td className={tableRowClass}>{employee.first_name + " " + employee.last_name}</td>
									<td className={tableRowClass}>{employee.email}</td>
									<td className={tableRowClass}>{employee.gender}</td>
									<td className={tableRowClass}>{employee.salary}</td>
									<td className={`flex justify-evenly ${tableRowClass}`}>
										<button className='p-2 bg-green-500 rounded-md'>
											<Link to={`/updateEmployee/${employee._id}`}>Update</Link>
										</button>

										<button className='p-2 bg-red-500 rounded-md' onClick={handleDelete}>
											Delete
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Employees
