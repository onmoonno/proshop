// Can be sent at any point needed
import { Alert } from "react-bootstrap";
import React from "react";

// variant: the color of message, danger etc.., children: message
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

// Set default as info
Message.defaultProps = {
  variant: "info",
};

export default Message;
