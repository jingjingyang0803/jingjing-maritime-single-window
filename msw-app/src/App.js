import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import PortCallList from "./components/PortCallList";
// import PortCallTable from "./components/PortCallTable";
// import PortCallTimeline from "./components/PortCallTimeline";
// import PortsOrder from "./components/PortsOrder";

function App() {
  const [portCalls, setPortCalls] = useState([]);
  let vesselFound = false;

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
      <Typography variant="h3" textAlign="center" gutterBottom>
        There are {portCalls.length} portcalls.
      </Typography>
      {portCalls.map((portCall) => {
        if (portCall.vesselName.includes("bank")) {
          vesselFound = true;
          return (
            <div>
              <Typography variant="h5" textAlign="center">
                Ship: {portCall.vesselName}
              </Typography>
            </div>
          );
        }
      })}
      {!vesselFound && (
        <div>
          <Typography variant="h5" textAlign="center">
            There is no port call of vessel Kwintebank.
          </Typography>
        </div>
      )}
      {/* <PortCallTable portCalls={portCalls} />

      <Typography variant="h3" textAlign="center" gutterBottom>
        There are {portCalls.length} port calls.
      </Typography> */}
      <PortCallList portCalls={portCalls} />
      {/* {portCalls.map((portCall) => (
        <div>
          <Typography variant="h5" textAlign="center">
            Ship: {portCall.vesselName}
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PortCallTimeline key={portCall.portCallId} portCall={portCall} />
            <PortsOrder key={portCall.portCallId} portCall={portCall} />
          </div>
        </div>
      ))} */}
    </Container>
  );
}

export default App;
