import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Breadcrumb } from "../components/SolutionCatalogueDetail/Breadcrum";
import { ProjectHeader } from "../components/SolutionCatalogueDetail/ProjectHeader";
import { ProjectGallery } from "../components/SolutionCatalogueDetail/ProjectGallery";
import { TimelineChart } from "../components/SolutionCatalogueDetail/TimelineChart";
import { ProjectTabs } from "../components/SolutionCatalogueDetail/ProjectTabs";
import { TechnologyBadge } from "../components/SolutionCatalogueDetail/TechnologyBadge";
import { TeamMember } from "../components/SolutionCatalogueDetail/TeamMember";
import { StatisticsCard } from "../components/SolutionCatalogueDetail/StatisticsCard";

const SolutionCatalogueDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState("description");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Add a project", href: "/add-project" },
  ];

  const projectTabs = [
    { id: "description", label: "Project Description" },
    { id: "technology", label: "Technology" },
    { id: "access", label: "Access" },
    { id: "progress", label: "Progress" },
    { id: "opportunity", label: "Opportunity" },
  ];

  const statistics = [
    { change: "+219", label: "subscribers", value: "14,855" },
    { change: "+219", label: "subscribers", value: "14,855" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <Stack spacing={2}>
            <Typography sx={{ color: "rgba(74,74,74,1)", fontWeight: 400, lineHeight: "25px" }}>
              Generative AI based solution which provides code generation, insights, code
              translation, debugging, along with advanced metrics analysis as well.
            </Typography>
          </Stack>
        );
      case "technology":
        return (
          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography fontWeight={600} color="#1F2633" fontSize="1rem">
                Frontend Technology -
              </Typography>
              <TechnologyBadge label="Streamlit" />
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
              <Typography fontWeight={600} color="#1F2633" fontSize="1rem">
                Backend Technology -
              </Typography>
              <Stack direction="row" spacing={1}>
                <TechnologyBadge label="Python" />
                <TechnologyBadge label="GenAI" />
                <TechnologyBadge label="LLMs" />
                <TechnologyBadge label="NLP" />
              </Stack>
            </Stack>
          </Stack>
        );
      case "access":
        return (
          <Stack spacing={2}>
            <Typography>Access details for the solution will be listed here.</Typography>
          </Stack>
        );
      case "progress":
        return (
          <Stack spacing={2}>
            <Typography>Progress indicators and milestones go here.</Typography>
          </Stack>
        );
      case "opportunity":
        return (
          <Stack spacing={2}>
            <Typography>Opportunity and business impact overview goes here.</Typography>
          </Stack>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center",
        px: 2,
        py: 0,
        borderRadius: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", py: 2 }}>
        <Breadcrumb items={breadcrumbItems} />

        {/* Top section: Header */}
        <ProjectHeader title="Databricks GenAI partner recognition" />

        {/* Main content */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 4,
            mt: 3,
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left section (gallery + tabs) */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <ProjectGallery
              mainImage="https://cdn.builder.io/api/v1/image/assets/b22a1f591db946d8a5b6fadc33b7c231/55d9b3fa6c3c0c94d9289dd5227f13c95d90481a?placeholderIfAbsent=true"
              thumbnails={["", "", "", ""]}
            />

            <Box mt={3}>
              <ProjectTabs
                tabs={projectTabs}
                activeTab={activeTab}
                onTabChange={(id) => setActiveTab(id)}
              >
                {renderTabContent()}
              </ProjectTabs>
            </Box>
          </Box>

          {/* Right section (stats + timeline + team) */}
          <Box
            sx={{
              flexBasis: "28%",
              maxWidth: "340px",
              flexShrink: 0,
              backgroundColor: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 2,
              pt: 2,
              pb: 3,
              px: 2,
            }}
          >
            <StatisticsCard title="Statistics" timeframe="last 48h" statistics={statistics} />
            <TimelineChart
              year="2021"
              chartImageUrl="https://cdn.builder.io/api/v1/image/assets/b22a1f591db946d8a5b6fadc33b7c231/d74362cacbb6c015baa799f6f21b399a9cfdc3e2?placeholderIfAbsent=true"
            />

            <Box mt={3}>
              <Typography
                fontWeight={600}
                fontSize="1rem"
                color="rgba(21,23,24,1)"
                sx={{ py: 1, borderBottom: "1px solid rgba(0,0,0,0.2)" }}
              >
                Team Created
              </Typography>

              <Box mt={2}>
                <TeamMember
                  name="Anil Bajapi"
                  role="Manager"
                  avatar="https://cdn.builder.io/api/v1/image/assets/b22a1f591db946d8a5b6fadc33b7c231/7a0ec5134981029f5d86b6de73075fbac641aa94?placeholderIfAbsent=true"
                  badge={{ label: "Team lead", variant: "orange" }}
                  isActive={true}
                />
              </Box>

              <Box mt={2}>
                <TeamMember
                  name="JaiDeep"
                  role="Manager"
                  avatar="https://cdn.builder.io/api/v1/image/assets/b22a1f591db946d8a5b6fadc33b7c231/7a0ec5134981029f5d86b6de73075fbac641aa94?placeholderIfAbsent=true"
                  badge={{ label: "Python Developer", variant: "yellow" }}
                  isActive={false}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SolutionCatalogueDetail;
