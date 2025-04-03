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
  List,
  ListItem,
  ListItemText,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const TopicWeaver: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState("TopicWeaver");
  const [selectedTopic, setSelectedTopic] = useState("Diabetes");

  const agents = ["LitSeek", "TopicWeaver", "InsightGen", "InsightGapX", "ProtoGen"];
  const topics = [
    "Diabetes",
    "Dapagliflozin",
    "Type 2 diabetes mellitus",
    "Effectiveness",
    "Safety",
    "Management",
    "Glycemic control",
    "Sodium-glucose cotransporter-2 inhibitors",
    "Sglt2 inhibitors",
  ];
  const papers = [
    "Safety and efficacy of fixed-dose combination of dapagliflozin and saxagliptin in patients with type 2 diabetes mellitus - a phase 4 study in India.",
    "A cost utility analysis of adding SGLT2 inhibitors for the management of type 2 diabetes with chronic kidney disease in Thailand.",
  ];

  return (
    <Container sx={{ display: "flex", gap: 3, mt: 3 }}>
      {/* Sidebar */}
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
              <FormControlLabel 
                key={agent} 
                value={agent} 
                control={<Radio />} 
                label={agent} 
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }}>Logout</Button>
      </Paper>

      {/* Main Content */}
      <Container>
        {selectedAgent === "TopicWeaver" && (
          <>
            <Typography variant="h4">TopicWeaver: Topic Analysis & Selection</Typography>
            <Typography variant="body1" sx={{ mt: 1, backgroundColor: "#f0f8ff", p: 1 }}>
              Explore topics extracted from the filtered papers and select one for deeper analysis.
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>Topics From Filtered Literature</Typography>
            <Typography variant="subtitle1">Your Question: Effectiveness and Safety of Dapagliflozin in Type 2 Diabetes Mellitus Management</Typography>
            
            <Typography variant="subtitle2" sx={{ mt: 2 }}>Choose your Topic</Typography>
            <RadioGroup
              row
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              {topics.map((topic) => (
                <FormControlLabel key={topic} value={topic} control={<Radio />} label={topic} />
              ))}
            </RadioGroup>

            <Typography variant="h6" sx={{ mt: 3 }}>Papers Related To Topic: {selectedTopic}</Typography>
            <List>
              {papers.map((paper, index) => (
                <ListItem key={index} sx={{ border: "1px solid #ddd", borderRadius: 1, mb: 1 }}>
                  <ListItemText primary={paper} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {selectedAgent === "LitSeek" && (
          <>
            <Typography variant="h4">LitSeek: Search & Filter Literature</Typography>
            <Typography variant="body1" sx={{ mt: 1, backgroundColor: "#f0f8ff", p: 1 }}>
              Use this agent to search for research papers, apply filters, and view the fetched list.
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your healthcare-related question here..."
              sx={{ mt: 2 }}
            />
            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#e74c3c" }}>Search</Button>
          </>
        )}

        {selectedAgent === "InsightGen" && (
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
        )}
      </Container>
    </Container>
  );
};

export default TopicWeaver;
