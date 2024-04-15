import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import PortCallList from "./components/PortCallList";
function App() {
  const [portCalls, setPortCalls] = useState([]);

  useEffect(() => {
    fetch("https://meri.digitraffic.fi/api/port-call/v1/port-calls")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPortCalls(data.portCalls || []);
        console.log(`There are ${data.portCalls.length} portcalls.`);
      })
      .catch((error) => {
        console.error("Failed to fetch port calls:", error);
      });
  }, []);

  return (
    <Container style={{ margin: "30px auto" }}>
      <Typography variant="h3" textAlign="center">
        There are {portCalls.length} portcalls.
      </Typography>
      <PortCallList portCalls={portCalls} />
    </Container>
  );
}

export default App;
