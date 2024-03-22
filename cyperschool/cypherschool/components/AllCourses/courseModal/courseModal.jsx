import React from 'react';


const courseModal = ({ isOpen, closeModal, courseName }) => {
    return (
        isOpen && (
            <div className="course-modal">
                <div className="course-modalContent">
                    <span className="modal-close" onClick={closeModal}>&times;</span>
                    <p>Register to begin {courseName}</p>
                </div>
            </div>
        )
    );
};

export default courseModal;
