const style = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5rem",
    "& img": {
      maxWidth: 150,
      margin: theme.spacing(3),
    },
  },
  fields: {
    "& svg": {
      margin: theme.spacing(0.5),
    },
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    placeContent: "end space-between",
    color: "#8e8b8e",
    "& .MuiIconButton-root": {
      borderRadius: 3,
      width: 16,
      height: 16,
      margin: theme.spacing(1),
      color: "#fff",
    },
  },
});

export default style;
