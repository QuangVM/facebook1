import React,{memo  } from "react";
import useImage from 'use-image';
import AvatarLogin from "./avatar.jpg";
import styled from "styled-components"


export const Avatar = memo(function(){
    return (
        <a href="https://facebook.com"><img src={AvatarLogin} alt="" /></a>
    )
})