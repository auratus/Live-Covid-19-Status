import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Cards from "./Card";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function IndiaStats() {

    let [data,setData] = useState([]);

    useEffect(() => {
        let xml = new XMLHttpRequest();
        xml.open("GET", `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`, true);
        xml.send();
        xml.onreadystatechange=function(){
            if(xml.readyState===4 && xml.status===200){
let jsonData = xml.responseText;
let parsed = JSON.parse(jsonData);
// let arr  = Object.values(parsed); to convert object into array
setData(parsed);  
            }
        }
    }, []);
    return (
        <>

        
        <Cards cases={[data.activeCases,data.activeCasesNew,data.recovered,data.recoveredNew,data.deaths,data.deathsNew,data.previousDayTests,data.totalCases,data.lastUpdatedAtApify]}/>

        </>
    );
}

export default IndiaStats;