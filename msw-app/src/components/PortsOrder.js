import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import Typography from "@mui/material/Typography";

export default function PortsOrder({ portCall }) {
  let voyage = portCall.imoInformation[0].briefParticularsVoyage;
  let portsArray = [];

  if (voyage && typeof voyage === "string") {
    portsArray = voyage.split("-");
  } else {
    portsArray = ["No info!"];
  }

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {portsArray.map((port) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <DirectionsBoatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {port}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
