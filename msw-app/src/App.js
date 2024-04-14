import React, { useState, useEffect } from "react";
import { TagCloud } from "react-tagcloud";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

function App() {
  const [portCalls, setPortCalls] = useState(0);
  const [firstPortCall, setFirstPortCall] = useState(null);

  const tags = [
    { value: "Maritime Single Window", count: 38 },
    { value: "Port Calls", count: 30 },
    { value: "Data Visualization", count: 28 },
    { value: "Vessel Traffic", count: 25 },
    { value: "Navigational Information", count: 33 },
    { value: "Marine Safety", count: 18 },
    { value: "Ship Tracking", count: 20 },
    { value: "Cargo Handling", count: 15 },
    { value: "Maritime Logistics", count: 10 },
    { value: "Port Authorities", count: 12 },
    { value: "Vessel Identification", count: 22 },
    { value: "E-navigation", count: 16 },
    { value: "Marine Communication", count: 27 },
    { value: "Maritime Traffic Notification", count: 14 },
    { value: "Real-time Information", count: 17 },
    { value: "Digital Submission", count: 24 },
    { value: "Visit Identification", count: 19 },
    { value: "Arrival Notice", count: 23 },
    { value: "Cargo Declaration", count: 21 },
    { value: "Fairway Dues Declaration", count: 26 },
    { value: "Liquefied Natural Gas", count: 29 },
    { value: "Data Spaces", count: 31 },
    { value: "Data-driven Decision Making", count: 32 },
    { value: "Timeline", count: 34 },
    { value: "Port Arrival", count: 35 },
    { value: "Port Departure", count: 36 },
  ];

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
    <Container style={{ margin: "30px auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={8}>
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
        </Grid>
        <Grid item xs={6} md={4}>
          <div style={{ marginTop: "60px" }}>
            <TagCloud
              minSize={12}
              maxSize={35}
              tags={tags}
              colorOptions={{
                luminosity: "light",
                hue: "blue",
              }}
              // className="simple-cloud"
              randomSeed={42}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
