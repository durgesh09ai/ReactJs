import React, { useState } from "react";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

interface SidebarProps {
    selectedAgent: string;
    setSelectedAgent: React.Dispatch<React.SetStateAction<string>>;
  }


 export const Sidebar = ({ selectedAgent, setSelectedAgent }: SidebarProps) => {

    const agents = ["LitSeek", "TopicWeaver", "InsightGen", "InsightGapX", "ProtoGen"];
    return (
      <Paper sx={{ p: 2, width: "250px", textAlign: "center" }}>
        <img src="/path-to-logo.png" alt="EXL Logo" style={{ width: "100px", marginBottom: "10px" }} />
        <Typography variant="h6">Welcome, <b>admin</b>!</Typography>
        <FormControl component="fieldset">
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Go to Agent:</Typography>
          <RadioGroup
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
          >
            {agents.map((agent) => (
              <FormControlLabel key={agent} value={agent} control={<Radio />} label={agent} />
            ))}
          </RadioGroup>
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }}>Logout</Button>
      </Paper>
    );
  };
  
