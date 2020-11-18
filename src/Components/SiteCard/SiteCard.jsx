import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 380,
    margin: theme.spacing(1),
    border: "4px solid #fff",
  },
  media: {
    height: 250,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    padding: theme.spacing(2),
  },
  sizer: {
    flexGrow: 1,
  },
}));

const imageFallback =
  "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg";

function MediaCard({ props }) {
  const classes = useStyles();

  function checkImg(link) {
    const validLink = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    if (validLink.test(link)) {
      return link;
    } else {
      return imageFallback;
    }
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={checkImg(props.url_imagen)}
        title="Contemplative Reptile"
      />
      <Box className={classes.content}>
        <CardContent>
          <Typography gutterBottom variant="button" component="h2">
            {props.nombre}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {props.descripcion}
          </Typography>
        </CardContent>
        <Box className={classes.sizer} />
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            href={
              props.ubicacion &&
              `http://www.google.com/maps/place/${props.ubicacion._lat},${props.ubicacion._long}`
            }
            target="_blank"
            rel="noreferrer"
          >
            Ver en Maps
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

MediaCard.propTypes = {
  imgurl: PropTypes.string,
};

export default MediaCard;
