import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Link from "@mui/material/Link"; // Import Link component from MUI

export default function PortETA({ portCalls }) {
  const columns = [
    {
      field: "vesselName",
      headerName: "Vessel",
      width: 150,
    },
    {
      field: "nextPort",
      headerName: "Next Port",
      width: 150,
    },
    {
      field: "ata",
      headerName: "Actual Arrival Time",
      width: 200,
    },
    {
      field: "eta",
      headerName: "Estimated Arrival Time",
      width: 200,
    },
    {
      field: "location",
      headerName: "Location",
      width: 200,
      renderCell: (params) => {
        return (
          <Link href={params.value} target="_blank" rel="noopener noreferrer">
            View Location
          </Link>
        );
      },
    },
  ];

  const rows = portCalls.map((portCall) => {
    let ata = portCall.portAreaDetails[0].ata;
    let eta = portCall.portAreaDetails[0].eta;

    let ataStr = "";
    let etaStr = "";

    if (ata && typeof ata === "string") {
      ataStr = ata.split(".")[0].replace("T", " ");
    } else {
      ataStr = "null";
    }

    if (eta && typeof eta === "string") {
      etaStr = eta.split(".")[0].replace("T", " ");
    } else {
      etaStr = "null";
    }

    return {
      id: portCall.portCallId,
      vesselName: portCall.vesselName,
      nextPort: portCall.nextPort,
      ata: ataStr, // Actual Time of Arrival (ATA)
      eta: etaStr, // Estimated Time of Departure (ETD)
      location: `https://baltice.org/map/ships/${portCall.radioCallSign}`,
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
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </Box>
  );
}
