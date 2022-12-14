import React, { useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
function AddEmployee() {
	let firstNameRef = useRef()
	let lastNameRef = useRef()
	let emailRef = useRef()
	let genderRef = useRef()
	let salaryRef = useRef()

	const [navigate ,setNavigate] = useState(false)
	const [error, setError] = useState()
	const URL = "https://101293009-comp-3123-assignment1.vercel.app/api/emp/employees"
	const handleAddEmployee = e => {
		e.preventDefault()
		axios
			.post(URL, {
				first_name: firstNameRef.current.value,
				last_name: lastNameRef.current.value,
				email: emailRef.current.value,
				gender: genderRef.current.value,
				salary: salaryRef.current.value
			})
			.then(response => {
				setNavigate(true)
				
			})
			.catch(error => {
				// console.log(error)
				setError(error.response.data.message)
			})
	}
	if (navigate === true) {
		return <Navigate to="/" />
	}
	if (!localStorage.getItem("login")) {
		return <Navigate to='/login' />
	}
	return (
		<div className='h-4/5 flex justify-center items-center'>
			<form className='h-5/6 w-1/3 border border-green-500 p-3 flex flex-col justify-evenly'>
				<h1 className='text-2xl font-semibold text-center'>Employee Management System</h1>
				<div className="text-lg text-red-600 italic text-center">{error}</div>
				<div className='name flex justify-between'>
					<input
						ref={firstNameRef}
						type='text'
						className='first-name border-b-2 border-purple-300 focus:outline-none'
						placeholder='First name'
					/>
					<input
						ref={lastNameRef}
						type='text'
						className='last-name border-b-2 border-purple-300 focus:outline-none'
						placeholder='Last name'
					/>
				</div>
				<div className='email'>
					<input
						ref={emailRef}
						type='text'
						className='email border-b-2 border-purple-300 w-full focus:outline-none'
						placeholder='Email'
					/>
				</div>

				<select
					ref={genderRef}
					name='gender'
					id='gender'
					className='gender w-1/2 focus:outline-none border-b-2 border-purple-300'
				>
					{/* <option value="" className='text-gray-400'>Gender</option> */}
					<option value='male'>Male</option>
					<option value='female'>Female</option>
					<option value='other'>Other</option>
				</select>

				<div className='salary'>
					<input
						ref={salaryRef}
						type='text'
						className='salary border-b-2 border-purple-300 w-full focus:outline-none'
						placeholder='Salary'
					/>
				</div>
				<div className='buttons w-1/3 flex justify-between'>
					<button className='add-btn px-3 py-2 bg-purple-300 rounded-md' onClick={handleAddEmployee}>
						Add
					</button>
					<button className='add-btn p-2 bg-yellow-300 rounded-md'>
						<Link to='/'>Cancel</Link>
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddEmployee
