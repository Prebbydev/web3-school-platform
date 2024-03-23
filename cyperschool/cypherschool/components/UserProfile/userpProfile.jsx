import React, { useState, useEffect } from 'react';
// import './userProfile.css';
import useUpdateProfile from "../../hooks/useUpdateProfile"
import { useWriteContract, useSimulateContract, useAccount, useReadContract  } from "wagmi";

const UserProfile = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [othername, setothername] = useState('');
    
    const [email, setEmail] = useState('');
  

    const [isEditing, setIsEditing] = useState(true);

    const { address } = useAccount()

//   const othername = othername
  const wallet_address = address

    const { notification, update, isLoading } = useUpdateProfile({
        firstname,
  lastname,
  othername,
  wallet_address,
    })
 
 
    

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProfilePicture(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };


   const handleUpdate= async (e) => {
    e.preventDefault();

    // if (!isValidTogether()) {
    //   return;
    // }

    await update()
  };
  console.log(notification);

    return (
        <div className="profile-container">
            
            {/* {profilePicture ? null : <p style={{color:'#007bff'}}>Add Profile Picture</p>} */}
            <form className="profile-form" onSubmit={handleUpdate}>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id='firstname' placeholder="First Name" value={firstname} onChange={(e) => setfirstname(e.target.value)} disabled={!isEditing} />
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id='lastname' placeholder="Last Name" value={lastname} onChange={(e) => setlastname(e.target.value)} disabled={!isEditing} />
                <label htmlFor="othername">Other Name(s):</label>
                <input type="text" id='othername' placeholder="Other Names" value={othername} onChange={(e) => setothername(e.target.value)} disabled={!isEditing} />
                
                <div className="buttons">
                    {isLoading ? (
                        <button type='submit'>Save</button>
                    ) : (
                        <button type='submit'>Update</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
