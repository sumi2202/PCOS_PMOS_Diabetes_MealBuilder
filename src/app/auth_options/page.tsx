"use client";

import { useRouter } from "next/navigation";

function Auth_Options(){

    const router = useRouter()
    
    return(
        <div className="OptionContainer">
            <div className="ButtonOptions">
                <h2>Get Started</h2>
                <h3>Already have an account?</h3>
                <button className="loginOpt" onClick={()=> router.push('/login')}>Log In</button>
                <h3>Starting fresh?</h3>
                <button className="registerOpt"onClick={()=> router.push('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Auth_Options;