import * as React from "react";
import { TextField, Box, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import "./parking.css"

export default function SelectCity() {
  return (
    <div className="selectCity">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={AllLocation}
        sx={{ width: 400 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Location" />
        )}
      />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

const AllLocation = [
  { label: "Banglore" },
  { label: "Hubli-Dharwad" },
  { label: "Mysore" },
  { label: "Kalaburagi" },
  { label: "Mangalore" },
  { label: "Hegade Naga" },
  { label: "Hesaraghatta" },
  { label: "Hoskote" },
  { label: "Hosur" },
  { label: "Hosur Road" },
  { label: "Indiranagar" },
  { label: "JP Nagar" },
  { label: "Jayanagar" },
  { label: "Kaggalipura" },
  { label: "KGA Golf Course" },
  { label: "Koramangala" },
  { label: "Krishnarajapuram" },
  { label: "Kundana" },
  { label: "Langford Town" },
  { label: "Malleswaram" },
  { label: "Marathahalli" },
  { label: "MG Road " },
  { label: "Minerva Circle" },
  { label: "Mysore Road" },
  { label: "Palace Grounds" },
  { label: "Race Course Road" },
  { label: "Rajajinagar" },
  { label: "Seshadripuram " },
  { label: "Shivaji Nagar " },
  { label: "Tumkur Road" },
  { label: "Ulsoor Lake" },
  { label: "Vasanth Nagar" },
  { label: "Whitefield" },
  { label: "Yelahanka" },
  { label: "Yelahanka Devanhalli Road" },
];
