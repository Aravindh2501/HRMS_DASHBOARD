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
import {
  RiEditLine,
  RiDeleteBin5Line,
  RiCloseLine,
  RiCheckLine,
} from "@remixicon/react";

// Function to create leave record objects
function createLeaveRecord(
  name,
  leaveType,
  leaveFrom,
  leaveTo,
  numOfDays,
  status,
  reason
) {
  return {
    name,
    leaveType,
    leaveFrom,
    leaveTo,
    numOfDays,
    status,
    reason,
  };
}

// Initial data for leave records
const initialLeaveRecords = [
  createLeaveRecord(
    "John Doe",
    "Annual Leave",
    "2024-05-20",
    "2024-05-25",
    6,
    "Pending",
    "Taking a long-awaited family vacation to reconnect and unwind."
  ),
  createLeaveRecord(
    "Jane Smith",
    "Sick Leave",
    "2024-06-10",
    "2024-06-12",
    3,
    "Pending",
    "Recovering from a severe flu that requires rest and medical attention."
  ),
  createLeaveRecord(
    "Michael Johnson",
    "Parental Leave",
    "2024-07-01",
    "2024-07-15",
    15,
    "Pending",
    "Caring for newborn twins and supporting spouse during postpartum recovery."
  ),
  createLeaveRecord(
    "Emily Brown",
    "Study Leave",
    "2024-08-05",
    "2024-08-25",
    21,
    "Pending",
    "Pursuing advanced studies to enhance skills and knowledge in current role."
  ),
  createLeaveRecord(
    "Robert Davis",
    "Personal Leave",
    "2024-09-10",
    "2024-09-12",
    3,
    "Pending",
    "Attending to urgent family matters that require immediate attention."
  ),
  createLeaveRecord(
    "Sophia Clark",
    "Maternity Leave",
    "2025-01-05",
    "2025-04-05",
    90,
    "Pending",
    "Preparing for and recovering from childbirth, ensuring a healthy start for newborn."
  ),
  createLeaveRecord(
    "David Lee",
    "Paternity Leave",
    "2024-11-15",
    "2024-11-20",
    6,
    "Pending",
    "Bonding with newborn and supporting partner during the early stages of parenthood."
  ),
  createLeaveRecord(
    "Olivia Wilson",
    "Emergency Leave",
    "2024-10-02",
    "2024-10-05",
    4,
    "Pending",
    "Dealing with a sudden family crisis requiring immediate attention and support."
  ),
];

const AllLeaveRequest = () => {
  const [search, setSearch] = useState("");
  const [filteredLeaves, setFilteredLeaves] = useState(initialLeaveRecords);
  const [statuses, setStatuses] = useState(
    initialLeaveRecords.map(() => "Pending")
  );

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    filterData(val);
  };

  const filterData = (searchText) => {
    const filteredData = initialLeaveRecords.filter((record) => {
      return Object.values(record).some(
        (field) =>
          typeof field === "string" && field.toLowerCase().includes(searchText)
      );
    });

    setFilteredLeaves(filteredData);
  };

  const handleReject = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = "Rejected";
    setStatuses(newStatuses);
  };

  const handleApprove = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = "Approved";
    setStatuses(newStatuses);
  };

  return (
    <div className="allleaverequest">
      <div className="card">
        <div className="allleaverequest_search">
          <div className="allleaverequest_head">
            <h2>Leave Management</h2>
          </div>
          <div className="allleaverequest_filter-table">
            <div className="allleaverequest_filter">
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <div className="allleaverequest_filter-input">
                    <input
                      type="text"
                      className="allleaverequest_input"
                      placeholder="Search by any field"
                      value={search}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="allleaverequest_table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell style={{ minWidth: "120px" }}>
                        Leave Type
                      </TableCell>
                      <TableCell style={{ minWidth: "120px" }}>
                        Leave From
                      </TableCell>
                      <TableCell style={{ minWidth: "120px" }}>
                        Leave To
                      </TableCell>
                      <TableCell style={{ minWidth: "120px" }}>
                        No Of Days
                      </TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell style={{ minWidth: "120px" }}>
                        Reason
                      </TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredLeaves.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.leaveType}</TableCell>
                        <TableCell>{record.leaveFrom}</TableCell>
                        <TableCell>{record.leaveTo}</TableCell>
                        <TableCell>{record.numOfDays}</TableCell>
                        <TableCell>
                          <p
                            className={`status status-${statuses[
                              index
                            ].toLowerCase()}`}
                          >
                            {statuses[index]}
                          </p>
                        </TableCell>
                        <TableCell>{record.reason}</TableCell>
                        <TableCell>
                          <div className="allleaverequest_action-buttons">
                            <button onClick={() => handleReject(index)}>
                              <RiCloseLine className="icon allleaverequest_icon_close" />
                            </button>
                            <button onClick={() => handleApprove(index)}>
                              <RiCheckLine className="icon allleaverequest_icon_check" />
                            </button>
                          </div>
                        </TableCell>
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

export default AllLeaveRequest;
