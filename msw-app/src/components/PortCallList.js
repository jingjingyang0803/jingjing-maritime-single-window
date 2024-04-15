import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function PortCallList({ portCalls }) {
  const columns = [
    {
      field: "vesselName",
      headerName: "Ship",
      width: 150,
    },
    {
      field: "portToVisit",
      headerName: "Port",
      width: 150,
    },
    {
      field: "ata",
      headerName: "Arrival",
      width: 200,
    },
    {
      field: "atd",
      headerName: "Departure",
      width: 200,
    },
  ];

  const rows = portCalls.map((portCall) => {
    let ata = portCall.portAreaDetails[0].ata;
    let atd = portCall.portAreaDetails[0].atd;

    let ataStr = "";
    let atdStr = "";

    if (ata && typeof ata === "string") {
      ataStr = ata.split(".")[0].replace("T", " ");
    }

    if (atd && typeof atd === "string") {
      atdStr = atd.split(".")[0].replace("T", " ");
    }
    return {
      id: portCall.portCallId,
      vesselName: portCall.vesselName,
      portToVisit: portCall.portToVisit,
      ata: ataStr, // Actual Time of Arrival (ATA)
      atd: atdStr, // Actual Time of Departure (ATD)
    };
  });

  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}
