import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import '../styles/Profile.css'
import CommonSection from '../components/UI/CommonSection'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'


const Profile = () => {
    const auth = getAuth()
    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const { name, email } = formData

    const navigate = useNavigate()

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const onSubmit = async () => {
        try {
            if(auth.currentUser.displayName !== name) {
                // update the display name in firebase
                await updateProfile(auth.currentUser, {
                    displayName: name,
                })
                // update in firestore
                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name,
                })
            }

            toast.success('Profile updated successfully')
            
        } catch (error) {
            toast.error('Could not update profile details')
        }
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
   
 
  return <>
    <Helmet title="Profile">
        <CommonSection title="My Profile"/>

        <section className='profile-section'>
            <div className="profile">
                <header className="profileHeader">
                    <p className="pageHeader"> </p>
                    <button className="logout" type='button' onClick={onLogout}>
                        Logout
                    </button>
                </header>

                <main>
                    <div className="profiledetailsheader">
                        <p className="profiledetailstext">Personal Details</p>
                        <p className="changepersonaldetails" onClick={() =>  {
                            changeDetails && onSubmit()
                            setChangeDetails((prevState) => !prevState)
                        }}
                        >
                            {changeDetails ? 'Save' : 'Edit'}
                        </p>
                    </div>

                    <div className="profilecard">
                        <form action="">
                            <input type="text" id="name" className={!changeDetails ? 'profileName' : 'profileNameActive'}
                            disabled={!changeDetails}
                            value={name}
                            onChange={onChange}/>

                            <input type="text" id="email" className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
                            disabled={!changeDetails}
                            value={email}
                            onChange={onChange}/>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    </Helmet>
  </>
    
    
  
}

export default Profile