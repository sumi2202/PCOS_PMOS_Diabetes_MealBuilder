"use client";

import { useRouter } from "next/navigation";
function Welcome_Page(){

    const router = useRouter()
    
    return(
            <div className ="WelcomeScreen">
            <div className ="WelcomeContent">
                <h1>Welcome to Chef Cystem</h1>
                <h3>Meet your personalized AI Chef!</h3>
                <button className ="WelcomeButton" onClick={() => router.push("/auth_options")}>Let's Get Cookin'!</button>
            </div>
            </div>
    )
}

export default Welcome_Page;