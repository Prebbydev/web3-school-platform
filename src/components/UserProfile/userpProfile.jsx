import React, { useState } from 'react';
import '../UserProfile/userProfile.css';

const UserProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [otherNames, setOtherNames] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [email, setEmail] = useState('');
    const [faculty, setFaculty] = useState('');
    const [department, setDepartment] = useState('');
    const [level, setLevel] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [nationality, setNationality] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [schoolEmail, setSchoolEmail] = useState('');
    const [yearOfEntry, setYearOfEntry] = useState('');
    const [modeOfAdmission, setModeOfAdmission] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const [isEditing, setIsEditing] = useState(true);
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

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleUpdate = () => {
        setIsEditing(true);
    };

    return (
        <div className="profile-container">
            <div className="profile-picture">
                {profilePicture ? (
                    <img src={profilePicture} alt="Profile" />
                ) : (
                    <label htmlFor="file-input" className="profile-placeholder">

                        <span>+</span>
                        <input id="file-input" type="file" onChange={handlePictureChange} />
                    </label>
                )}
            </div>
            {profilePicture ? null : <p>Add Profile Picture</p>}
            <div className="profile-form">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!isEditing} />
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!isEditing} />
                <label htmlFor="othername">Other Name(s):</label>
                <input type="text" placeholder="Other Names" value={otherNames} onChange={(e) => setOtherNames(e.target.value)} disabled={!isEditing} />
                <label htmlFor="regnum">Reg Number:</label>
                <input type="text" placeholder="Registration Number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} disabled={!isEditing} />
                <label htmlFor="email">Email Address:</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />
                <label htmlFor="faculty">Faculty:</label>
                <input type="text" placeholder="Faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} disabled={!isEditing} />
                <label htmlFor="department">Department:</label>
                <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} disabled={!isEditing} />
                <label htmlFor="level">Level:</label>
                <input type="text" placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} disabled={!isEditing} />
                <label htmlFor="gender">Gender:</label>
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} disabled={!isEditing} />
                <label htmlFor="Dob">Date Of Birth:</label>
                <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} disabled={!isEditing} />
                <label htmlFor="nationality">Nationality:</label>
                <input type="text" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} disabled={!isEditing} />
                <label htmlFor="state">State Of Origin::</label>
                <input type="text" placeholder="State of Origin" value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.target.value)} disabled={!isEditing} />
                <label htmlFor="maritalStatus">Marital Status:</label>
                <input type="text" placeholder="Marital Status" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} disabled={!isEditing} />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={!isEditing} />
                <label htmlFor="schoolEmail">School Email:</label>
                <input type="email" placeholder="School Email" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} disabled={!isEditing} />
                <label htmlFor="year">Year Of Entry:</label>
                <input type="text" placeholder="Year of Entry" value={yearOfEntry} onChange={(e) => setYearOfEntry(e.target.value)} disabled={!isEditing} />
                <label htmlFor="mode">Mode Of Admission:</label>
                <select value={modeOfAdmission} onChange={(e) => setModeOfAdmission(e.target.value)} disabled={!isEditing}>
                    <option value="">Select Mode of Admission</option>
                    <option value="UTME">UTME</option>
                    <option value="Direct Entry">Direct Entry</option>
                    <option value="Transfer">Transfer</option>
                </select>
                <div className="buttons">
                    {isEditing ? (

                        <button onClick={handleSave}>Save</button>
                    ) : (
                        <button onClick={handleUpdate}>Update</button>

                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
