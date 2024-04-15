import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

export default function PortCallTimeline({ portCall }) {
  let ata = portCall.portAreaDetails[0].ata;
  let atd = portCall.portAreaDetails[0].atd;

  let ataStr = "null";
  let atdStr = "null";

  if (ata && typeof ata === "string") {
    ataStr = ata.split(".")[0].replace("T", " ");
  }

  if (typeof atd === "string" && atd.trim() !== "") {
    atdStr = atd.split(".")[0].replace("T", " ");
  } else {
    atdStr = "null";
  }

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          {atdStr}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            ATD
          </Typography>
          <Typography>Actual Time of Departure</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          {ataStr}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            ATA
          </Typography>
          <Typography>Actual Time of Arrival</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
