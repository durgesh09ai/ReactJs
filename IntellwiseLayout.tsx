import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Avatar, IconButton, Paper, Typography } from '@mui/material';
import { Menu as MenuIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import Editor from '@monaco-editor/react';

import { FileExplorer } from './FileExplorer';
import { AssessmentPanel } from './AssessmentPanel';
import { TipsTooltip } from './TipsTooltip';

const sourceCode = `def fetch_user_data(user_id):
    response = api_call("https://example.com/user/" + user_id)
    print("User data fetched:", response)`;

const targetCode = `def api_call(url):
    import requests
    result = requests.get(url)
    return result.json()`;

export const IntellwiseLayout: React.FC = () => {
  const [sourceCodeValue, setSourceCodeValue] = useState(sourceCode);
  const [targetCodeValue, setTargetCodeValue] = useState(targetCode);

  useEffect(() => {
    const handler = (e: any) => {
      if (
        e.message === 'ResizeObserver loop completed with undelivered notifications.' ||
        e.message === 'ResizeObserver loop limit exceeded'
      ) {
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener('error', handler);
    return () => window.removeEventListener('error', handler);
  }, []);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #ddd' }}>
        <Toolbar sx={{ minHeight: '48px', px: 2 }}>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="small" sx={{ color: '#000' }}>
            <SettingsIcon />
          </IconButton>
          <Avatar
            src="https://cdn.builder.io/api/v1/image/assets/b22a1f591db946d8a5b6fadc33b7c231/6d52b79fd3531aa382b63551280764dcc2ab6a1b?placeholderIfAbsent=true"
            sx={{ width: 32, height: 32 }}
          />
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, minHeight: 0 }}>
        <ReflexContainer orientation="vertical">
          
          <ReflexElement minSize={0} maxSize={400} flex={0.2} >
            <Box sx={{ height: '100%', p: 1, bgcolor: '#f9f9f9', overflow: 'auto' }}>
              <FileExplorer />
            </Box>
          </ReflexElement>

          <ReflexSplitter propagate />

          <ReflexElement>
            <ReflexContainer orientation="horizontal">
              {/* Editors */}
              <ReflexElement flex={0.6} minSize={150}>
                <Box sx={{ height: '100%', p: 1, overflow: 'hidden' }}>
                  <ReflexContainer orientation="vertical" style={{ height: '100%' }}>
                    {/* Source Editor */}
                    <ReflexElement flex={0.5} minSize={150}>
                      <Paper
                        elevation={0}
                        sx={{
                          height: '100%',
                          bgcolor: '#F3FAFF',
                          border: '1px solid #e0e0e0',
                          borderRadius: 1,
                          overflow: 'hidden'
                        }}
                      >
                        <Box sx={{ p: 1.5, borderBottom: '1px solid #e0e0e0' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '14px' }}>
                            Source Code
                          </Typography>
                        </Box>
                        <Editor
                          height="calc(100% - 50px)"
                          language="python"
                          value={sourceCodeValue}
                          onChange={(val) => setSourceCodeValue(val || '')}
                          theme="vs-light"
                          options={{
                            minimap: { enabled: false },
                            fontSize: 12,
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                            automaticLayout: true,
                            padding: { top: 10, bottom: 10 }
                          }}
                        />
                      </Paper>
                    </ReflexElement>

                    <ReflexSplitter propagate />

                    {/* Target Editor */}
                    <ReflexElement flex={0.5} minSize={150}>
                      <Paper
                        elevation={0}
                        sx={{
                          height: '100%',
                          bgcolor: '#f5f5f5',
                          border: '1px solid #e0e0e0',
                          borderRadius: 1,
                          overflow: 'hidden'
                        }}
                      >
                        <Box sx={{ p: 1.5, borderBottom: '1px solid #e0e0e0' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '14px' }}>
                            Target Code
                          </Typography>
                        </Box>
                        <Editor
                          height="calc(100% - 50px)"
                          language="python"
                          value={targetCodeValue}
                          onChange={(val) => setTargetCodeValue(val || '')}
                          theme="vs-light"
                          options={{
                            minimap: { enabled: false },
                            fontSize: 12,
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                            automaticLayout: true,
                            padding: { top: 10, bottom: 10 }
                          }}
                        />
                      </Paper>
                    </ReflexElement>
                  </ReflexContainer>
                </Box>
              </ReflexElement>

              <ReflexSplitter propagate />

              {/* Assessment Panel */}
              <ReflexElement flex={0.4} minSize={100}>
                <Box sx={{ height: '100%', p: 1, bgcolor: '#f5f5f5', overflow: 'auto' }}>
                  <AssessmentPanel />
                </Box>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </Box>

      <TipsTooltip />
    </Box>
  );
};
