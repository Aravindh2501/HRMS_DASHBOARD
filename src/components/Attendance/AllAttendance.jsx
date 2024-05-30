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

// Function to create record objects
function createRecord(
  image,
  name,
  firstIn,
  breakTime,
  lastOut,
  total,
  status,
  shift
) {
  return {
    image,
    name,
    firstIn,
    breakTime,
    lastOut,
    total,
    status,
    shift,
  };
}

// Initial data for records
const initialRecords = [
  createRecord(
    "https://via.placeholder.com/50",
    "John Doe",
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
    "8 hrs",
    "Present",
    "Morning"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Jane Smith",
    "10:00 AM",
    "02:00 PM",
    "07:00 PM",
    "7 hrs",
    "Absent",
    "Evening"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Michael Johnson",
    "09:30 AM",
    "01:30 PM",
    "06:30 PM",
    "8 hrs",
    "Leave",
    "Morning"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Emily Brown",
    "08:00 AM",
    "12:00 PM",
    "05:00 PM",
    "8 hrs",
    "Half-day",
    "Morning"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Robert Davis",
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
    "8 hrs",
    "Present",
    "Morning"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Alice Johnson",
    "08:30 AM",
    "12:30 PM",
    "05:30 PM",
    "7 hrs",
    "Absent",
    "Evening"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "David Lee",
    "09:15 AM",
    "01:15 PM",
    "06:15 PM",
    "6 hrs",
    "Leave",
    "Morning"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Sarah Taylor",
    "10:30 AM",
    "02:30 PM",
    "07:30 PM",
    "8 hrs",
    "Half-day",
    "Evening"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Michael Brown",
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
    "8 hrs",
    "Present",
    "Morning"
  ),
  createRecord(
    "https://via.placeholder.com/50",
    "Emma Wilson",
    "09:45 AM",
    "01:45 PM",
    "06:45 PM",
    "7 hrs",
    "Absent",
    "Evening"
  ),
];

const AllAttendance = () => {
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(initialRecords);

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    filterData(val);
  };

  const filterData = (searchText) => {
    const filteredData = initialRecords.filter((record) => {
      return Object.values(record).some(
        (field) =>
          typeof field === "string" && field.toLowerCase().includes(searchText)
      );
    });

    setFilteredRecords(filteredData);
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "present":
        return "status-present";
      case "absent":
        return "status-absent";
      case "half-day":
        return "status-half-day";
      case "leave":
        return "status-leave";
      default:
        return "";
    }
  };

  return (
    <div className="allattendance">
      <div className="card">
        <div className="allattendance_search">
          <div className="allattendance_head">
            <h2>Attendance Management</h2>
          </div>
          <div className="allattendance_filter-table">
            <div className="allattendance_filter">
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <div className="allattendance_filter-input">
                    <input
                      type="text"
                      className="allattendance_input"
                      placeholder="Search by any field"
                      value={search}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="allattendance_table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>S.no</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>First In</TableCell>
                      <TableCell>Break</TableCell>
                      <TableCell>Last Out</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Shift</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRecords.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.firstIn}</TableCell>
                        <TableCell>{record.breakTime}</TableCell>
                        <TableCell>{record.lastOut}</TableCell>
                        <TableCell>{record.total}</TableCell>
                        <TableCell>
                          <p
                            className={`status ${getStatusStyle(
                              record.status
                            )}`}
                          >
                            {record.status}
                          </p>
                        </TableCell>
                        <TableCell>{record.shift}</TableCell>
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

export default AllAttendance;
