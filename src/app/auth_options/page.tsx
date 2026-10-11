"use client";

import { useRouter } from "next/navigation";

function Auth_Options(){

    const router = useRouter()
    
    return(
        <div className="OptionContainer">
            <div className="ButtonOptions">
                <button className="loginOpt" onClick={()=> router.push('/login')}>Log In</button>
                <button className="registerOpt"onClick={()=> router.push('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Auth_Options;