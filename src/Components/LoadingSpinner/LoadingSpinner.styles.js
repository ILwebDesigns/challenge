const style = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2),
    height: "100%",
  },
  progress: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
    marginTop: "5rem",
  },
  text: {
    marginTop: "2rem",
  },
});

export default style;
