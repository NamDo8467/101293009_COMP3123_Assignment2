import React, { useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import signUpImage from "../../images/signup.jpg"
import axios from "axios"
function Signup() {
	let emailRef = useRef()
	let userNameRef = useRef()
	let passwordRef = useRef()
	let URL = "https://101293009-comp-3123-assignment1.vercel.app/api/user/signup"
	const [error, setError] = useState(true)
	const [navigate, setNavigate] = useState(false)

	const handleSignUp = async e => {
		e.preventDefault()
		let email = emailRef.current.value
		let username = userNameRef.current.value
		let password = passwordRef.current.value

		if (email === "" || username === "" || password === "") {
			setError("Inputs can not be empty")
			return
		} else if (email.indexOf("@") === -1) {
			setError("Email must be valid")
		}
		try {
			let response = await axios.post(URL, { email, username, password })
			let data = response.data
			setNavigate(true)
			console.log(data)
		} catch (error) {
			console.log(error.response.data)
			setError(error.response.data.message)
		}
	}
	if (navigate === true) {
		return <Navigate to='/login' />
	}
	return (
		<div className='login-container flex h-5/6 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<div className='image basis-3/5'>
				<img src={signUpImage} alt='login' />
			</div>
			<form className='inputs flex flex-col items-center justify-around basis-2/5 h-4/5 self-center'>
				<h1 className='text-3xl font-bold'>Sign Up</h1>
				<div className='error text-red-600 italic'>{error}</div>
				<input ref={emailRef} className={`border-b border-purple-400 w-3/4 focus:outline-none`} placeholder='Email' />
				<input
					ref={userNameRef}
					type='text'
					className={`border-b border-purple-400 w-3/4 focus:outline-none`}
					placeholder='Username'
				/>
				<input
					ref={passwordRef}
					type='password'
					className='border-b border-purple-400 w-3/4 focus:outline-none'
					placeholder='Password'
				/>
				<button className='p-2 border border-purple-300 bg-purple-300 rounded-md px-4' onClick={handleSignUp}>
					Sign Up
				</button>
				<p>
					Already a member?{" "}
					<Link to='/login' className='underline'>
						Log in
					</Link>
				</p>
			</form>
		</div>
	)
}

export default Signup
