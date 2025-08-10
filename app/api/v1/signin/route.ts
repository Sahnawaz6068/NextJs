import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const client=new PrismaClient();

export async function POST(req:NextRequest){
      //req.body ??

    const data=await req.json();
    

    await client.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })
    
    console.log(data);
    
    return NextResponse.json("User Signin sucessfully");
}

export async function GET(){
      //req.body ??

    
    
    return NextResponse.json("User Signin sucessfully");
}