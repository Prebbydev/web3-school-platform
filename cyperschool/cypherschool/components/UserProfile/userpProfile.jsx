import React, { useState, useEffect } from 'react';
// import './userProfile.css';

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

    // Load user profile from local storage when the component mounts
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (storedProfile) {
            setFirstName(storedProfile.firstName);
            setLastName(storedProfile.lastName);
            setOtherNames(storedProfile.otherNames);
            setRegistrationNumber(storedProfile.registrationNumber);
            setEmail(storedProfile.email);
            setFaculty(storedProfile.faculty);
            setDepartment(storedProfile.department);
            setLevel(storedProfile.level);
            setGender(storedProfile.gender);
            setDateOfBirth(storedProfile.dateOfBirth);
            setNationality(storedProfile.nationality);
            setStateOfOrigin(storedProfile.stateOfOrigin);
            setMaritalStatus(storedProfile.maritalStatus);
            setPhoneNumber(storedProfile.phoneNumber);
            setSchoolEmail(storedProfile.schoolEmail);
            setYearOfEntry(storedProfile.yearOfEntry);
            setModeOfAdmission(storedProfile.modeOfAdmission);
            setProfilePicture(storedProfile.profilePicture);
        }
    }, []);

    // Update local storage whenever user profile data changes
    useEffect(() => {
        const userProfile = {
            firstName,
            lastName,
            otherNames,
            registrationNumber,
            email,
            faculty,
            department,
            level,
            gender,
            dateOfBirth,
            nationality,
            stateOfOrigin,
            maritalStatus,
            phoneNumber,
            schoolEmail,
            yearOfEntry,
            modeOfAdmission,
            profilePicture
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }, [
        firstName,
        lastName,
        otherNames,
        registrationNumber,
        email,
        faculty,
        department,
        level,
        gender,
        dateOfBirth,
        nationality,
        stateOfOrigin,
        maritalStatus,
        phoneNumber,
        schoolEmail,
        yearOfEntry,
        modeOfAdmission,
        profilePicture
    ]);

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
            {profilePicture ? null : <p style={{color:'#007bff'}}>Add Profile Picture</p>}
            <div className="profile-form">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id='firstname' placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!isEditing} />
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id='lastname' placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!isEditing} />
                <label htmlFor="othername">Other Name(s):</label>
                <input type="text" id='othername' placeholder="Other Names" value={otherNames} onChange={(e) => setOtherNames(e.target.value)} disabled={!isEditing} />
                <label htmlFor="regnum">Reg Number:</label>
                <input type="text" id='regnum' placeholder="Registration Number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} disabled={!isEditing} />
                <label htmlFor="email">Email Address:</label>
                <input type="email" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />
                <label htmlFor="faculty">Faculty:</label>
                <input type="text" id='faculty' placeholder="Faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} disabled={!isEditing} />
                <label htmlFor="department">Department:</label>
                <input type="text" id='department' placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} disabled={!isEditing} />
                <label htmlFor="level">Level:</label>
                <input type="text" id='level' placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} disabled={!isEditing} />
                <label htmlFor="gender">Gender:</label>
                <input type="text" id='gender' placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} disabled={!isEditing} />
                <label htmlFor="Dob">Date Of Birth:</label>
                <input type="date" id='Dob' placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} disabled={!isEditing} />
                <label htmlFor="nationality">Nationality:</label>
                <input type="text" id='nationality' placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} disabled={!isEditing} />
                <label htmlFor="state">State Of Origin::</label>
                <input type="text" id='state' placeholder="State of Origin" value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.target.value)} disabled={!isEditing} />
                <label htmlFor="maritalStatus">Marital Status:</label>
                <input type="text" id='maritalStatus' placeholder="Marital Status" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} disabled={!isEditing} />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id='phoneNumber' placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={!isEditing} />
                <label htmlFor="schoolEmail">School Email:</label>
                <input type="email" id='schoolEmail' placeholder="School Email" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} disabled={!isEditing} />
                <label htmlFor="year">Year Of Entry:</label>
                <input type="text" id='year' placeholder="Year of Entry" value={yearOfEntry} onChange={(e) => setYearOfEntry(e.target.value)} disabled={!isEditing} />
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
