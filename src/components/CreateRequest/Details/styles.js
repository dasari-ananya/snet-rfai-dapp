export const useStyles = theme => ({
  detailsMainContainer: {
    padding: "0 99px 53px 120px",
    "@media(max-width:1280px)": { padding: "0 20px 53px 20px" },
    "& > div": {
      position: "relative",
      "& label": {
        position: "absolute",
        top: -7,
        left: 40,
        padding: "0 5px",
        backgroundColor: theme.palette.text.white,
        color: theme.palette.text.black1,
        fontSize: 12,
        letterSpacing: 0.4,
        lineHeight: "16px",
        zIndex: 1,
      },
      "& > span": {
        marginBottom: 13,
        marginLeft: 15,
        display: "block",
        color: theme.palette.text.alertBoxColor,
        fontSize: 12,
        letterSpacing: 0.4,
        lineHeight: "16px",
      },
      "& input, & textarea": {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.text.inputBorder,
        borderRadius: 4,
      },
      "& input": {
        width: 235,
        padding: "19px 15px",
        marginBottom: 32,
        "@media(max-width:1112px)": { width: 200 },
        "@media(max-width:730px)": { width: 290 },
        "@media(max-width:422px)": { width: 250 },
      },
      "& textarea": {
        width: "90%",
        padding: 15,
        resize: "none",
        "@media(max-width:1280px)": { width: "91%" },
        "@media(max-width:1112px)": { width: "89%" },
        "@media(max-width:730px)": { width: "85%" },
        "@media(max-width:470px)": { width: "71%" },
      },
    },
  },
  infoIcon: {
    color: theme.palette.text.lightShadedGray,
    fontSize: 18,
    marginRight: 11,
    verticalAlign: "middle",
  },
  reqTitleContainer: {
    marginLeft: 31,
    "& label": { left: "15px !important" },
  },
  descriptionContainer: {
    "& label": { left: "42px !important" },
    "& textarea": { marginLeft: 28 },
    "& span": { marginLeft: "45px !important" },
  },
  acceptanceCriteriaContainer: {
    "& svg": {
      paddingTop: 10,
      verticalAlign: "top",
    },
    "& span": { marginLeft: "40px !important" },
  },
  githubURLContainer: {
    position: "static",
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width:1112px)": { paddingRight: 12 },
    "@media(max-width:730px)": { flexDirection: "column" },
  },
  githubLinkContainer: { position: "relative" },
  trainingDBContainer: { position: "relative" },
  btnContainer: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center",
  },
  dialogStyles: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  dialogStylesContent: { width: "80%", align: "center", margin: "auto" },
  expiryDateContainer: {
    "& > div": {
      "& > div": {
        "&::before": { border: "none" },
        "&:hover": {
          "&:not(.Mui-disabled):before": { border: "none" },
        },
      },
    },
    "& input": { marginBottom: "0 !important" },
  },
});
