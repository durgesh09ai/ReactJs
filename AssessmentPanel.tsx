import React, { useState } from 'react';
import {
  Box, Paper, Tabs, Tab, Typography, List, ListItemButton, ListItemText,ListItemIcon
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import PsychologyIcon from '@mui/icons-material/Psychology';

type TabType = 'assessment' | 'metrics' | 'generation' | 'debug' | 'reasoning';

const leftTabItems: Record<TabType, { label: string; icon: React.ReactNode }[]> = {
  assessment: [
    { label: 'Fix Suggestions', icon: <AssessmentIcon /> },
    { label: 'Static Summary', icon: <AssessmentIcon /> },
    { label: 'Code Complexity', icon: <BarChartIcon /> },
    { label: 'Maintainability', icon: <BarChartIcon /> },
    { label: 'AI Code Generator', icon: <CodeIcon /> },
    { label: 'Logs', icon: <BugReportIcon /> },
    { label: 'AI Reasoning', icon: <PsychologyIcon /> }
  ],
  metrics: [
    { label: 'Code Complexity', icon: <BarChartIcon /> },
    { label: 'Maintainability', icon: <BarChartIcon /> }
  ],
  generation: [
    { label: 'AI Code Generator', icon: <CodeIcon /> }
  ],
  debug: [
    { label: 'Logs', icon: <BugReportIcon /> }
  ],
  reasoning: [
    { label: 'AI Reasoning', icon: <PsychologyIcon /> }
  ]
};

export const AssessmentPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('assessment');
  const [activeSideTab, setActiveSideTab] = useState<number>(0);

  const handleTopTabChange = (_: React.SyntheticEvent, newValue: TabType) => {
    setActiveTab(newValue);
    setActiveSideTab(0); // reset side tab on top tab switch
  };

  const currentSideTabs = leftTabItems[activeTab];

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        bgcolor: '#f5f5f5',
        border: '1px solid #e4e4e5',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Top Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTopTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          borderBottom: '1px solid #e0e0e0',
          minHeight: '40px',
          '& .MuiTab-root': {
            minHeight: '40px',
            textTransform: 'none',
            fontSize: '12px',
            color: '#000',
            fontWeight: 500,
            px: 2,
            '&.Mui-selected': {
              color: '#0F4977',
              bgcolor: '#F3FAFF'
            }
          },
          '& .MuiTabs-indicator': { display: 'none' }
        }}
      >
        <Tab label="Assessment" value="assessment" />
        <Tab label="Advance Metrics" value="metrics" />
        <Tab label="Code Generation" value="generation" />
        <Tab label="Debug" value="debug" />
        <Tab label="Reasoning" value="reasoning" />
      </Tabs>

      {/* Content Area */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Left Side Tabs */}
        <Box sx={{ width: 60,borderRight: '1px solid #ddd', bgcolor: '#fff' }}>
          {currentSideTabs.map((item, index) => (
            <ListItemButton
              key={item.label}
              selected={activeSideTab === index}
              onClick={() => setActiveSideTab(index)}
              sx={{ px: 2 }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
              {/* <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '13px' }} /> */}
            </ListItemButton>
          ))}
        </Box>

        {/* Right Content */}
        <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, fontSize: '14px' }}>
            {currentSideTabs[activeSideTab]?.label}
          </Typography>
          <Typography sx={{ fontSize: '13px' }}>
            Content for <b>{currentSideTabs[activeSideTab]?.label}</b> under <b>{activeTab}</b> tab.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
