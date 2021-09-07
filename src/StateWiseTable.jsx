import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from "react";
import { useEffect } from "react";
import "./StateWiseTable.css";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
    table: {
        minWidth: 650,

        color: "white"
    },

    row: {
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white"
    },

    head: {
        color: "white",
        fontWeight:"900"
    },

    data: {
        color: "white",
        fontWeight:"700"
    },

    rowData: {
        backgroundColor: "rgba(17, 82, 147,0.8)",
    },

});


function StateWiseTable(props) {

    let stateWise = useSelector((storeData) => storeData.stateWise);
    let tbData = props.swTable;
    console.log(tbData);



    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow className={classes.row}>
                            <TableCell className={classes.head}>Region</TableCell>
                            <TableCell align="center" className={classes.head}>Active Cases</TableCell>
                            <TableCell align="center" className={classes.head}>Change In Active Cases Since Yesterday</TableCell>
                            <TableCell align="center" className={classes.head}>Total Recovered</TableCell>
                            <TableCell align="center" className={classes.head}>New Recovered</TableCell>
                            <TableCell align="center" className={classes.head}>Total Deaths</TableCell>
                            <TableCell align="center" className={classes.head}>New Deaths</TableCell>
                            <TableCell align="center" className={classes.head}>Total Cases</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {stateWise.map((row) => (
                            <TableRow key={row.region} className={classes.rowData}>
                                <TableCell component="th" scope="row" className={classes.data}>{row.region} </TableCell>
                                <TableCell align="center" className={classes.data}>{row.activeCases}</TableCell>
                                <TableCell align="center" className={classes.data}>{row.newInfected}</TableCell>
                                <TableCell align="center" className={classes.data}>{row.recovered}</TableCell>
                                <TableCell align="center" className={classes.data}>{row.newRecovered}</TableCell>
                                <TableCell align="center" className={classes.data}>{row.deceased}</TableCell>
                                <TableCell align="center" className={classes.data}>{row.newDeceased}</TableCell>
                                <TableCell align="center" className={classes.data}>{row.totalInfected}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}

export default StateWiseTable;