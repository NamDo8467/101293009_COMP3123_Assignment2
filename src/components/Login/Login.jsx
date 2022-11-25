import React, { useRef, useState } from "react"
import loginImage from "../../images/login.jpg"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
function Login() {
	let userNameRef = useRef()
	let passwordRef = useRef()
	let URL = "https://101293009-comp-3123-assignment1.vercel.app/api/user/login"
	// let errorBorderRef = useRef("border-purple-400")
	const [error, setError] = useState("")
	const [navigate, setNavigate] = useState(false)
	const handleLogin = async e => {
		e.preventDefault()
		const username = userNameRef.current.value
		const password = passwordRef.current.value

		try {
			let response = await axios.post(URL, { username, password })
			let data = response.data
			if (data.message === "User logged in successfully") {
				localStorage.setItem("login", true)
				setNavigate(true)
			}
		} catch (error) {
			console.log(error)
			setError(error.response.data.message)
		}
	}
	if (navigate === true) {
		return <Navigate to='/' />
	}
	return (
		<div className='login-container flex h-5/6 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<div className='image basis-3/5'>
				<img src={loginImage} alt='login' />
			</div>
			<div className='inputs flex flex-col items-center justify-around basis-2/5 h-3/5 self-center'>
				<h1 className='text-3xl font-bold'>Login</h1>
				<div className='error text-red-600 italic'>{error}</div>
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
				<button className='p-2 border border-purple-300 bg-purple-300 rounded-md px-4' onClick={handleLogin}>
					Login
				</button>
				<p>
					Don't have an account?{" "}
					<Link to='/signup' className='underline'>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
