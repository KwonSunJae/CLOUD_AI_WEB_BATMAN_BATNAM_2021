import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    zIndex: "9999",
    backgroundColor: "rgba(255,255,255,1)",
    color: "black",
    maxWidth: 400,
    minHeight: 50,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius: "1rem",
    padding: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
}));

const HoverTooltips = ({ children, message }) => {
  return (
    <HtmlTooltip title={message} placement="top">
      {children}
    </HtmlTooltip>
  );
};

export default HoverTooltips;
