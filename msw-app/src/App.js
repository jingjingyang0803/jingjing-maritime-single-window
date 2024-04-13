import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

function App() {
  const [portCalls, setPortCalls] = useState(0);
  const [firstPortCall, setFirstPortCall] = useState(null);

  useEffect(() => {
    fetch("https://meri.digitraffic.fi/api/port-call/v1/port-calls")
      .then((response) => response.json())
      .then((data) => {
        setPortCalls(data.portCalls.length);
        console.log(`There are ${data.portCalls.length} portcalls.`);

        setFirstPortCall(data.portCalls[0]);
      });
  }, []);

  return (
    <Container style={{ margin: "20px auto" }}>
      <Typography variant="h3" gutterBottom>
        There are {portCalls} portcalls.
      </Typography>
      {firstPortCall && (
        <Card
          variant="outlined"
          className="MuiCard-root MuiCard-outlined"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <CardContent>
            <pre>{JSON.stringify(firstPortCall, null, 4)}</pre>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default App;
