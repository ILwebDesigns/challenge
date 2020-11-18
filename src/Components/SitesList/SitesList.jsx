import React from "react";
import SiteCard from "../SiteCard";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    placeContent: 'center space-evenly'    
  },
}));

function SitesList({ list }) {  
  const classes = useStyles();
  return (    
    <Box className={classes.root}>
      {list &&
        Object.keys(list).map((key) => (
          <SiteCard key={key} props={list[key]} />
        ))}
    </Box>    
  );
}

SitesList.propTypes = {
  list: PropTypes.array,
};

export default SitesList;
