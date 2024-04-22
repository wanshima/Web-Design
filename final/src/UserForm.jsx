import React, { useState } from 'react';

function UserForm({ onFormSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [submissionMessage, setSubmissionMessage] = useState(''); // State to hold the submission message

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};

        if (name.length <= 3) {
            validationErrors.name = 'Name must be filled and longer than 3 characters.';
        }

        if (!email.includes('@')) {
            validationErrors.email = 'Email must be filled and contain an "@".';
        }

        if (Object.keys(validationErrors).length === 0) {
            onFormSubmit({ name, email });
            setName('');
            setEmail('');
            setErrors({});
            setSubmissionMessage('Thank you for registering with us!'); 
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
            {submissionMessage && <p style={{ color: 'green' }}>{submissionMessage}</p>} 
        </form>
    );
}

export default UserForm;
