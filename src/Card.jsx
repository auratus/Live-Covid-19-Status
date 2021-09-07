import React from "react";
import "./IndiaStats.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./IndiaStats.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    cursor: "pointer",
    // marginRight: 35,
    boxShadow:"0px 0px 5px 4px grey"
  },

  content: {
    display: "flex",
    // justifyContent:"space-between",
    alignItems: "center",
    flexDirection: "column"
  },

  title: {
    fontWeight: 700,
    marginBottom: 10,
    color: "rgb(100, 100, 100)",
    // textShadow: "2px 2px rgba(0,0,0,0.7)"
    textAlign:"center"
  },

  value: {
    color: "rgba(17, 82, 147,0.8)",
    fontWeight: 700,
    textShadow: "2.5px 2.5px rgba(0,0,0,0.2)"
  },

  sources: {
    // color: "rgba(0,0,0,0.6)",
    fontWeight: 700,
  },

  link:{
    color: "rgba(17, 82, 147,0.8)",
    wordWrap:"break-word",
    fontSize:"1.6vmax",
    // lineHeight:"10px"
  }
});

function Cards(props) {
  const classes = useStyles();
  return (
    <>
    <div id="live">
<span id="dot"><FiberManualRecordIcon/></span>
<h5 id="liveText">LIVE</h5>
    </div>
      <div id="stats_india">

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Active Cases
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[0]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Change In Active Cases Since Yesterday
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[1]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Total Recovered
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[2]}
            </Typography>
          </CardContent>
        </Card>


        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Recovered Since Yesterday
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[3]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Total Deaths
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[4]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
           Previous Day Deaths
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[5]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Previous Day Tests
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[6]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Total Cases
            </Typography>
            <Typography variant="h3" component="h2" className={classes.value}>
              {props.cases[7]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Last Updated
            </Typography>
            <Typography variant="h5" component="h2" className={classes.value}>
              {props.cases[8]}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant="h5" component="h2">
              Sources
            </Typography>
            <Typography variant="h6" component="h2" className={classes.sources}>
              <a className={classes.link} target="_blank" href="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true">https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true</a>
              <br/><br/><a className={classes.link} target="_blank" href="https://www.mohfw.gov.in">https://www.mohfw.gov.in</a>

            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Cards;