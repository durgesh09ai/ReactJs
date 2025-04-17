import { Box, createTheme, Paper, styled } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#0F4977",
      },
      secondary: {
        main: "#F3FAFF",
      },
      background: {
        default: "#F5F7FA",
        paper: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
  });
  
  interface SidebarContainerProps {
    sidebarCollapsed: boolean;
  }
  
  // Styled Components
  export const RootBox = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
  }));
  
  
  export const ContentPaper = styled(Paper)(({ theme }) => ({
    flex: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.shape.borderRadius * 2,
  }));
  
  
  export const SidebarContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "sidebarCollapsed",
  })<SidebarContainerProps>(({ sidebarCollapsed }) => ({
    width: sidebarCollapsed ? "80px" : "280px",
    flexShrink: 0,
    transition: "width 0.3s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",        // take up full vertical space
    overflow: "hidden",    // prevent scroll unless explicitly needed
  }));
  
  
  export const CollapseToggleContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginTop: theme.spacing(2),
    marginLeft: -theme.spacing(2),
    zIndex: 2,
  }));
  
  export const MainContent = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    height: "100%",
    minWidth: 0, // ← important fix for content cutting off
  }));
  
  export const InnerContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));
  
  export const OutletContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    height: "100%",
  }));