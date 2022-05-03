import React,{useState} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {reset_password} from '../actions/auth';

const ResetPassword = ({reset_password}) =>{
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    }

    // is the user authenticated
    // Redirect them to page of interest
    if(requestSent) {
        return <Navigate to = '/' />
    }
    return (
        <div className='container mt-5'>
            <h1>Request Password Reset</h1>
            <p>Sign into your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                        className='form-control mt-3'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='btn btn-primary mt-3' typr='submit'>Reset Password</button>
            </form>
        </div>

    );
};

export default connect(null,{reset_password})(ResetPassword);