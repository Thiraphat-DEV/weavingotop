import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  layerStyles: {
    base: {
      bg: "black.50",
      border: "2px solid",
      borderColor: "black.500",
    },
    selected: {
      bg: "cyan.500",
      color: "teal.700",
      borderColor: "yellow.500",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
