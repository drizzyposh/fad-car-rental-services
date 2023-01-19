import React from 'react'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import '../styles/Spinner.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState()

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Email was sent successfully')
            
        } catch (error) {
            toast.error('Could not send reset email')
        }
    }

  return (
    <>
        <section>
            <header>
                <p className="pageheader">Reset Password</p>
            </header>
            <main>
                <form onSubmit={onSubmit} className="submitform m-auto text-center">
                    <div className="input">
                            <input type="email" className='emailinput' placeholder='Email' id='email' value={email} onChange={onChange}/>
                            
                            <Link className="forgotpasswordlink m-auto" to="/login">Log In</Link>
                        

                        <div className="signinbar">
                            <button className="signintext">Send Reset Link</button>
                        </div>
                    </div>
                </form>
            </main>
        </section>
    </>
  )
}

export default ForgotPassword