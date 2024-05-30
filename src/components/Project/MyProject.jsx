import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

// Function to create project objects
function createProject(
  id,
  projectTitle,
  clientName,
  startDate,
  endDate,
  deadline,
  members,
  priority,
  progress,
  status
) {
  return {
    id,
    projectTitle,
    clientName,
    startDate,
    endDate,
    deadline,
    members,
    priority,
    progress,
    status,
  };
}

// Initial data for projects
const initialProjects = [
  createProject(
    1,
    "Marketing Campaign",
    "Acme Corporation",
    "2024-05-20",
    "2024-06-25",
    "2024-07-15",
    ["John Smith", "Mary Johnson", "David Brown"],
    "High",
    80,
    "Active"
  ),
  createProject(
    2,
    "Website Redesign",
    "Tech Innovations Ltd.",
    "2024-06-10",
    "2024-08-12",
    "2024-09-10",
    ["Emily Davis", "James Wilson"],
    "Medium",
    50,
    "Active"
  ),
  createProject(
    3,
    "Product Launch",
    "Global Enterprises",
    "2024-08-05",
    "2024-09-25",
    "2024-10-20",
    ["Jennifer White", "Michael Clark", "Sarah Lee"],
    "Low",
    30,
    "Inactive"
  ),
  createProject(
    4,
    "Mobile App Development",
    "Innovate Tech Solutions",
    "2024-07-01",
    "2024-09-15",
    "2024-10-10",
    ["Thomas Anderson", "Emma Taylor", "Kevin Moore"],
    "High",
    70,
    "Active"
  ),
  createProject(
    5,
    "E-commerce Platform Upgrade",
    "Global Retail Group",
    "2024-08-20",
    "2024-10-30",
    "2024-11-30",
    ["Sophia Garcia", "Daniel Harris"],
    "Medium",
    60,
    "Active"
  ),
  createProject(
    6,
    "Data Analytics Dashboard",
    "Insight Analytics",
    "2024-09-15",
    "2024-11-10",
    "2024-12-05",
    ["Olivia Martinez", "Liam Jackson"],
    "High",
    85,
    "Active"
  ),
  createProject(
    7,
    "Cloud Migration Project",
    "FutureTech Solutions",
    "2024-10-01",
    "2024-12-15",
    "2025-01-15",
    ["Isabella Moore", "Noah Thompson", "Ella Davis"],
    "Medium",
    45,
    "Pending"
  ),
];

const MyProject = () => {
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    filterData(val);
  };

  const filterData = (searchText) => {
    const filteredData = initialProjects.filter((project) => {
      return Object.values(project).some(
        (field) =>
          typeof field === "string" && field.toLowerCase().includes(searchText)
      );
    });

    setFilteredProjects(filteredData);
  };

  const getStatusStyle = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "status-high";
      case "medium":
        return "status-medium";
      case "low":
        return "status-low";
      default:
        return "";
    }
  };

  return (
    <div className="myproject">
      <div className="card">
        <div className="myproject_search">
          <div className="myproject_head">
            <h2>Project Management</h2>
          </div>
          <div className="myproject_filter-table">
            <div className="myproject_filter">
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <div className="myproject_filter-input">
                    <input
                      type="text"
                      className="myproject_input"
                      placeholder="Search by any field"
                      value={search}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="myproject_table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Project Title</TableCell>
                      <TableCell>Client Name</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Deadline</TableCell>
                      <TableCell>Members</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell>Progress</TableCell>
                      <TableCell>Status</TableCell>
                      {/* <TableCell>Actions</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredProjects.map((project, index) => (
                      <TableRow key={index}>
                        <TableCell>{project.id}</TableCell>
                        <TableCell>{project.projectTitle}</TableCell>
                        <TableCell>{project.clientName}</TableCell>
                        <TableCell>{project.startDate}</TableCell>
                        <TableCell>{project.endDate}</TableCell>
                        <TableCell>{project.deadline}</TableCell>
                        <TableCell>
                          <AvatarGroup max={4}>
                            <Avatar
                              alt="Remy Sharp"
                              src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                            />
                            <Avatar
                              alt="Travis Howard"
                              src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                            />
                            <Avatar
                              alt="Cindy Baker"
                              src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                            />
                            <Avatar
                              alt="Agnes Walker"
                              src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                            />
                            <Avatar
                              alt="Trevor Henderson"
                              src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                            />
                          </AvatarGroup>
                        </TableCell>
                        <TableCell>
                          <p
                            className={`status ${getStatusStyle(
                              project.priority
                            )}`}
                          >
                            {project.priority}
                          </p>
                        </TableCell>
                        <TableCell>
                          <progress value={project.progress} max="100">
                            {project.progress}%
                          </progress>
                        </TableCell>
                        <TableCell>{project.status}</TableCell>
                        {/* <TableCell>
                          <div className="myproject_action-buttons">
                            <button>
                              <RiEditLine className="icon myproject_icon_edit" />
                            </button>
                            <button>
                              <RiDeleteBin5Line className="icon myproject_icon_delete" />
                            </button>
                          </div>
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
