import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    color: "#fff",
  },
  head: {
    display: "flex",
    flexFlow: "row",
    "& .MuiTypography-root": {
      fontWeight: "bolder",
    },
    "& svg": {
      fontSize: "3rem",
    },
  },
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.head}>
        <Typography variant="h3">Hey! Welcome to Churrasco Travel</Typography>
        <Box ml={1}>
         <FlightIcon />
        </Box>
      </Box>
      <Box mt={3}>
        <Typography variant="h5">
          These are some of the destinations we can offer FOR FREE!
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography color="textSecondary" variant="caption">
          DISCLAIMER: We only offer Google Maps based travels.
        </Typography>
        <br />
        <Typography color="textSecondary" variant="caption">
          If you have any issues while traveling... it's Google's fault.
        </Typography>
      </Box>
    </Box>
  );
}
