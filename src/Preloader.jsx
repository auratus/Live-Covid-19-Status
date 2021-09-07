import React, { useState } from "react";
import { useEffect } from "react";
import "./Preloader.css";
import corona from "./corona.gif";


function Preloader(){
let[hide,setHide] = useState({ display:"flex" });
    useEffect(()=>{
        setTimeout(()=>{
setHide({ display:"none" });
        },2000)
    },[]);
    return (
        <>
<div id="preloader"  style={hide}>
    <div style={{backgroundImage:`url(${corona})`}} id="pre_child">

    </div>

</div>
        </>
    );
}

export default Preloader;