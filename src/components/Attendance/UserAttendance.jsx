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
function createRecord(date, checkIn, breakTime, checkOut, hours, status) {
  return {
    date,
    checkIn,
    breakTime,
    checkOut,
    hours,
    status,
  };
}

// Initial data for records
const initialRecords = [
  createRecord(
    "2024-05-01",
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
    "8 hrs",
    "Present"
  ),
  createRecord(
    "2024-05-01",
    "10:00 AM",
    "02:00 PM",
    "07:00 PM",
    "7 hrs",
    "Absent"
  ),
  createRecord(
    "2024-05-01",
    "09:30 AM",
    "01:30 PM",
    "06:30 PM",
    "8 hrs",
    "Leave"
  ),
  createRecord(
    "2024-05-01",
    "08:00 AM",
    "12:00 PM",
    "05:00 PM",
    "8 hrs",
    "Half-day"
  ),
  createRecord(
    "2024-05-01",
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
    "8 hrs",
    "Present"
  ),
  createRecord(
    "2024-05-01",
    "08:30 AM",
    "12:30 PM",
    "05:30 PM",
    "7 hrs",
    "Absent"
  ),
  createRecord(
    "2024-05-01",
    "09:15 AM",
    "01:15 PM",
    "06:15 PM",
    "6 hrs",
    "Leave"
  ),
  createRecord(
    "2024-05-01",
    "10:30 AM",
    "02:30 PM",
    "07:30 PM",
    "8 hrs",
    "Half-day"
  ),
  createRecord(
    "2024-05-01",
    "09:00 AM",
    "01:00 PM",
    "06:00 PM",
    "8 hrs",
    "Present"
  ),
  createRecord(
    "2024-05-01",
    "09:45 AM",
    "01:45 PM",
    "06:45 PM",
    "7 hrs",
    "Absent"
  ),
];

const UserAttendance = () => {
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
    <div className="userattendance">
      <div className="card">
        <div className="userattendance_search">
          <div className="userattendance_head">
            <h2>Attendance Management</h2>
          </div>
          <div className="userattendance_filter-table">
            <div className="userattendance_filter">
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <div className="userattendance_filter-input">
                    <input
                      type="text"
                      className="userattendance_input"
                      placeholder="Search by any field"
                      value={search}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="userattendance_table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>S.no</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Check-In</TableCell>
                      <TableCell>Break</TableCell>
                      <TableCell>Check-Out</TableCell>
                      <TableCell>Hours</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRecords.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.checkIn}</TableCell>
                        <TableCell>{record.breakTime}</TableCell>
                        <TableCell>{record.checkOut}</TableCell>
                        <TableCell>{record.hours}</TableCell>
                        <TableCell>
                          <p
                            className={`status ${getStatusStyle(
                              record.status
                            )}`}
                          >
                            {record.status}
                          </p>
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

export default UserAttendance;
