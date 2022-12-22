import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signup } from './API/userAPI';

function Signup() {
    const [signupData , setSignupData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()
    
    const onHandleEvent = (event) =>{
        console.log(event.target.name)
        setSignupData({...signupData, [event.target.name]: event.target.value})
        console.log(signupData);
    }

    const onSignup = async() =>{
        console.log(signupData);
        const apiResponce = await signup(signupData)
        if (apiResponce.status === 200) {
            console.log("responcemessage", apiResponce.data.message);
            navigate('/signin');
        } else {
            console.log("error");
        }
    }


    return (
        <div>
            
            <h4 className="my-5 fs-2 text-danger">SIGN UP</h4>
            <div>
                <form className="d-flex flex-column align-items-center ">
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter email'
                        className="form-control w-50 mt-2"
                        onChange={(e) => onHandleEvent(e)}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-control w-50 mt-2"
                        onChange={(e) => onHandleEvent(e)}
                    />
                </form>
                <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => onSignup()}>
                    SIGN UP
                </button>
                <div>
                <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() =>navigate('/signin')}>
                    SIGN IN
                </button>
                </div>
            </div>
        </div>
    )
}

export default Signup