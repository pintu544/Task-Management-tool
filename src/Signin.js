import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signin } from './API/userAPI';

function Signin() {
    const [data , setLogin] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()
    
    const onHandleEvent = (event) =>{
        setLogin({...data, [event.target.name]: event.target.value, [event.target.name]: event.target.value})
        console.log(data);
    }

    const onSignin = async() =>{
        console.log(data);
        const apiResponce = await signin(data)
        if (apiResponce.status === 200) {
            console.log("responcemessage", apiResponce.data.message);
            navigate('/home');
        } else {
            console.log("error");
        }
    }


    return (
        <div>
            
            <h4 className="my-5 fs-2 text-danger">SIGN IN</h4>
            <div>
                <form className="d-flex flex-column align-items-center ">
                    <input
                        type='text'
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
                <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => onSignin()}>
                    SIGN IN
                </button>
                <div>
                <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() =>navigate('/')}>
                    SIGN UP
                </button>
                </div>
            </div>
        </div>
    )
}

export default Signin