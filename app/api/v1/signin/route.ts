import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
//req.body ??

    const data=await req.json();
    //clent.user.create{
    // data:{data}}
    console.log(data);
    return NextResponse.json("User Signin sucessfully");
}