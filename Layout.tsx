import React, { useState } from "react";
import {
  Box,
  Stack,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { CollapseToggleContainer, ContentPaper, InnerContent, MainContent, OutletContainer, RootBox, SidebarContainer, theme } from "./Layout.style";

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootBox>
        <ContentPaper>
          <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <SidebarContainer sidebarCollapsed={sidebarCollapsed}>
              <Sidebar collapsed={sidebarCollapsed} />
            </SidebarContainer>
            <MainContent>
              <Box sx={{ width: "100%" }}>
                <Header />
                <InnerContent>
                  <OutletContainer>
                    <Outlet />
                  </OutletContainer>
                </InnerContent>
              </Box>
            </MainContent>
          </Box>
        </ContentPaper>
      </RootBox>
    </ThemeProvider>
  );
};

export default Layout;
