import {
  primaryColor,
  grayColor,
  title
} from "./../../material-kit-react";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  infoCoin: {
    maxWidth: "560px",
    margin: "0 auto",
    padding: "0px"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    paddingTop: "5em",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor
  },

  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title,
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "1.5em"

  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
