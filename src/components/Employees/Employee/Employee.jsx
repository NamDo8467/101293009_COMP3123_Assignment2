import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function Employee() {
	const { id } = useParams()
	const URL = `https://101293009-comp-3123-assignment1.vercel.app/api/emp/employees/${id}`

	const [employee, setEmployee] = useState({})
	useEffect(() => {
		axios
			.get(URL)
			.then(response => {
				setEmployee(response.data)
			})
			.catch(error => {
				setEmployee({})
			})
	}, [])
	return (
		<div className='border border-green-500 h-4/5 relative'>
			<div className='employee-detail grid grid-cols-2 w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-purple-300 py-2'>
				<h1 className='text-2xl font-bold text-center col-span-2'>Employee Detail</h1>
				<div className='label justify-self-end text-right m-2'>
					<p>First Name:</p>
					<p>Last Name:</p>
					<p>Email:</p>
					<p>Gender:</p>
					<p>Salary:</p>
				</div>

				<div className='label m-2'>
					<p>{employee.first_name}</p>
					<p>{employee.last_name}</p>
					<p>{employee.email}</p>
					<p>{employee.gender}</p>
					<p>{employee.salary}</p>
				</div>
			</div>
		</div>
	)
}

export default Employee
