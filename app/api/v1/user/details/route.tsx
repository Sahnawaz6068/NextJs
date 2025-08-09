import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json ({
        user:"Sahnawaz",
        email:"sahnawaz@gmail.com"
    })
}

export function POST(){
    return NextResponse.json ({
        user:"Sahnawaz This is POST request",
        email:"sahnawaz@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json ({
        user:"Sahnawaz This is put request",
        email:"sahnawaz@gmail.com"
    })
}

export function PATCH(){
    return NextResponse.json ({
        user:"Sahnawaz This is patch request",
        email:"sahnawaz@gmail.com"
    })
}

export function DELETE(){
    return NextResponse.json ({
        user:"Sahnawaz This is delete request",
        email:"sahnawaz@gmail.com"
    })
}