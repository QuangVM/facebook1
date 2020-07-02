import React,{memo, } from "react";
import { Logo } from "./components/Logo";
import { InputName } from "./components/InputName";
import { Avatar } from "./components/Avatar";

export const LoginScreen = memo(function(){

    return (
        <div>
        <Avatar/>
        <Logo/> 
        <InputName/> 
        </div>
    )
})