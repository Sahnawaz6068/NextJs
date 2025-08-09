"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function(){
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const router=useRouter();
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input onChange={(e)=>{setUserName(e.target.value)}} className="m-2" type="text" placeholder="userName" />
            <input onChange={(e)=>{setPassword(e.target.value)}} className="mx-4" type="password" placeholder="password"/>

            <button className="border" onClick={async ()=>{
                console.log(username);
                console.log(password);
                await axios.post("http://localhost:3000/api/v1/signin" ,
                    {
                        username,
                        password
                    })
                    router.push("/");
            }}>Signin</button>
        </div>

    </div>
}