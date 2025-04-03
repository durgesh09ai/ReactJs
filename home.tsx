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

import {Sidebar} from './sidebar';
import {InsightGen} from './main';


const Home = () => {
    const [selectedAgent, setSelectedAgent] = useState("InsightGen");
  
    return (
      <Container sx={{ display: "flex", gap: 3, mt: 3 }}>
        <Sidebar selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />
        <Container>{selectedAgent === "InsightGen" && <InsightGen />}</Container>
      </Container>
    );
  };
  
  export default Home;