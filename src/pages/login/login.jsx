import "./login.css"
import { useState } from "react"

export default function LoginPage() {    
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")

    return (    
        <div className="bg-picture w-full h-screen flex justify-center items-center">    
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
                <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute top-10"/>
                
                <input type="email" placeholder="Email" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"/>
                
                <input type="password" placeholder="Password" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"/>
                <button className="my-8 w-[300px] h-[40px] bg-[#efac38] text-white text-2xl rounded-lg">Login</button>
            </div>
        </div>
    )
}