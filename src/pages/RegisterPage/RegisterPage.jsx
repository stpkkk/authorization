import React from 'react'
import { Link } from "react-router-dom";


const RegisterPage = () => {
  return (
	<div>
		<h1>RegisterPage</h1>
		<p>
			Already have an account ? <Link to = "/authform">Sign in</Link>
		</p>
	</div>
  )
}

export default RegisterPage