
import React, { useState } from 'react';
import './updatePassForm.css';

const UpdatePasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        
        setError(null);
        setSuccess(false);

        if (currentPassword === '' || newPassword === '' || confirmNewPassword === '') {
            setError('Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        setLoading(true);

        try {
            // Send password update request to server
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            if (!response.ok) {
                throw new Error('Failed to update password.');
            }

            setSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <h2>Update Your Password</h2>
            <div>
                <label>Current Password:</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </div>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm New Password:</label>
                <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Password'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Password updated successfully.</p>}
        </form>
    );
};

export default UpdatePasswordForm;
