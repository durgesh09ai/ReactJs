import React, { useState } from 'react';
import { Box, Paper, Typography, Button, IconButton } from '@mui/material';
import { Close as CloseIcon, ContentCopy as CopyIcon } from '@mui/icons-material';

export const TipsTooltip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 5,
        right: 13,
        width: 433,
        maxWidth: '100%',
        bgcolor: 'grey.50',
        p: 2,
        borderRadius: '0px 24px 24px 24px',
        border: '1px solid #E4E4E5',
        zIndex: 1000
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.25 }}>
        <Typography sx={{ fontWeight: "bold",fontSize:12 }}>
          Tips from Intelliwise
        </Typography>
        <IconButton 
          size="small"
          onClick={() => setIsVisible(false)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 1.125, mb: 1.25 }}>
        <Typography sx={{ fontWeight: "bold",fontSize:12 }}>Suggestion:</Typography>
        <Typography sx={{fontSize:12}}>Add type hints for better readability.</Typography>
      </Box>
      
      <Paper
        elevation={0}
        sx={{
          border: '1px solid #E4E4E5',
          bgcolor: 'white',
          p: 1.5,
          borderRadius: 1.25,
          mb: 1.25
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.125 }}>
          <Typography sx={{ fontWeight: 400,fontSize:12 }}>
            Suggested fix:
          </Typography>
          <IconButton size="small">
            <CopyIcon fontSize="small" />
          </IconButton>
        </Box>
        
        <Box sx={{ fontFamily: 'monospace', fontSize: '14px' }}>
          <Box>
            <span style={{ color: 'rgba(76,175,80,1)' }}>def </span>
            add(x: <span style={{ color: 'rgba(15,73,119,1)' }}>int</span>, y:
            <span style={{ color: 'rgba(15,73,119,1)' }}> int</span>)
          </Box>
          <Box sx={{ mt: 1.125 }}>
            <span style={{ color: 'rgba(76,175,80,1)' }}>def </span>
            add(x: <span style={{ color: 'rgba(15,73,119,1)' }}>int</span>, y:{' '}
            <span style={{ color: 'rgba(15,73,119,1)' }}>int</span>) → int
          </Box>
        </Box>
      </Paper>
      
      <Box sx={{ display: 'flex', gap: 1, minHeight: 32 }}>
        <Button 
          variant="contained"
          sx={{ 
            bgcolor: '#0B3454',
            color: 'white',
            fontWeight: 500,
            px: 2,
            py: 0.75,
            '&:hover': { bgcolor: '#0F4977' }
          }}
        >
          Add suggestion
        </Button>
        <Button 
          variant="outlined"
          onClick={() => setIsVisible(false)}
          sx={{ 
            color: '#0F4977',
            borderColor: '#0F4977',
            fontWeight: 500,
            px: 2,
            py: 0.75,
            '&:hover': { bgcolor: '#F3FAFF' }
          }}
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};
