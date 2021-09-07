import React, { useEffect, useState } from "react";
import "./StateWise.css";
import StateWiseTable from "./StateWiseTable";
import { useSelector, useDispatch } from "react-redux";
import { updateArray } from "./actions";

function StateWise(){

    let dispatch = useDispatch();

    useEffect(() => {
        let xmlTable = new XMLHttpRequest();
        xmlTable.open("GET", `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`, true);
        xmlTable.send();
        xmlTable.onreadystatechange=function(){
            if(xmlTable.readyState===4 && xmlTable.status===200){
let jsonDataTable = xmlTable.responseText;
let parsedTable = JSON.parse(jsonDataTable);
// let arr  = Object.values(parsed); to convert object into array
console.log(parsedTable); 

dispatch(updateArray(parsedTable.regionData));
            }
        }
    }, []);

    return (
        <>
<div id="StateWise">
<div id="table_heading">
    <h2>Covid-19 Statewise Status </h2>
</div>
<StateWiseTable/>

</div>
        </>
    );
}

export default StateWise;