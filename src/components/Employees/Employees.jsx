import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
function Employees() {
	const tableRowClass = "border p-3"
	const tableRowHoverClass = "hover:bg-slate-200 hover:cursor-pointer"
	const tableHeaderClass = "border bg-slate-400"

	const [employeeList, setEmployeeList] = useState([])
	const URL = "https://101293009-comp-3123-assignment1.vercel.app/api/emp/employees"
	useEffect(() => {
		console.log("I run")
		axios
			.get(URL)
			.then(response => {
				console.log(response.data)
				setEmployeeList(response.data)
			})
			.catch(error => {
				console.log(error)
				setEmployeeList([])
			})
	}, [])
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
								<tr className={tableRowHoverClass}>
									<td className={tableRowClass}>{employee.first_name + " " + employee.last_name}</td>
									<td className={tableRowClass}>{employee.email}</td>
									<td className={tableRowClass}>{employee.gender}</td>
									<td className={tableRowClass}>{employee.salary}</td>
									<td className={`flex justify-evenly ${tableRowClass}`}>
										<button className='p-2 bg-green-500 rounded-md'>Update</button>

										<button className='p-2 bg-red-500 rounded-md'>Delete</button>
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
