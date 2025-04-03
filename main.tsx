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

export const InsightGen = () => {
    return (
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4">InsightGen: Insights Generation & Reporting</Typography>
        <Typography variant="body1" sx={{ mt: 1, backgroundColor: "#f0f8ff", p: 1 }}>
          Generate summaries, analyze findings, and export reports based on your selected topic.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Selected Topic: <b>Diabetes</b></Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Based on Research Question: <i>Effectiveness and Safety of Dapagliflozin in Type 2 Diabetes Mellitus Management</i></Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Found 3 paper(s) related to this topic.</Typography>
        
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Select Review Format</Typography>
          <Select defaultValue="Paper-wise Information">
            <MenuItem value="Paper-wise Information">Paper-wise Information</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Select Information To Extract</Typography>
          <Select defaultValue="" displayEmpty>
            <MenuItem value="" disabled>Choose an option</MenuItem>
          </Select>
        </FormControl>
        
        <Button variant="contained" sx={{ mt: 3, backgroundColor: "#e74c3c" }}>Generate Review</Button>
      </Paper>
    );
  };

