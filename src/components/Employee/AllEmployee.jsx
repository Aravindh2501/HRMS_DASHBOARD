import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  RiAddLine,
  RiCheckLine,
  RiCloseLine,
  RiDeleteBin5Line,
  RiEditLine,
} from "@remixicon/react";

const createData = (image, name, department, role, degree, mobile, email, joiningDate) => ({
  image,
  name,
  department,
  role,
  degree,
  mobile,
  email,
  joiningDate,
});

const initialRows = [
  createData(
    "img1.jpg",
    "John Doe",
    "allemployee",
    "Manager",
    "MBA",
    "123-456-7890",
    "john.doe@example.com",
    "2020-01-15"
  ),
  createData(
    "img2.jpg",
    "Jane Smith",
    "Marketing",
    "Senior Analyst",
    "BBA",
    "987-654-3210",
    "jane.smith@example.com",
    "2019-05-20"
  ),
  // Add more data rows as needed
];

const AllEmployee = () => {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    filterData(val, selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterData(search, date);
  };

  const filterData = (searchText, date) => {
    const filteredData = initialRows.filter((row) => {
      const matchesSearch = Object.values(row).some(
        (field) =>
          typeof field === "string" && field.toLowerCase().includes(searchText)
      );

      const matchesDate =
        !date || row.joiningDate === date.format("YYYY-MM-DD"); // Assuming joiningDate is in a compatible format

      return matchesSearch && matchesDate;
    });

    setFilteredRows(filteredData);
  };

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "100vw" : "40vw",
    bgcolor: "background.paper",
    borderRadius: "14px",
    boxShadow: 24,
    padding: "20px",
    height: isMobile ? "30rem" : "auto",
    overflowY: isMobile ? "scroll" : "",
  };

  return (
    <div className="allemployee">
      <div className="card">
        <div className="allemployee_search">
          <div className="allemployee_head">
            <h2>Employee Directory</h2>
          </div>
          <div className="allemployee_filter_table">
            <div className="allemployee_filter">
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <div className="allemployee_filter_input">
                    <input
                      type="text"
                      className="allemployee_input"
                      placeholder="Search by any field"
                      value={search}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
                <Grid item sm={2}></Grid>
                <Grid item sm={2}></Grid>
                <Grid item sm={2}>
                  <div className="allemployee-addproduct">
                    <button
                      className="allemployee_addbtn"
                      onClick={handleOpen}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <RiAddLine className="icon" />
                      Add Employee
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={modalStyle}>
                        <h2 style={{ marginBottom: "10px" }}>Add Employee</h2>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="image">Image</label>
                            <input type="file" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="name">Name</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="department">Department</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="role">Role</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="degree">Degree</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="email">Email</label>
                            <input type="email" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <label htmlFor="joiningDate">Joining Date</label>
                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              style={{ marginTop: "10px" }}
                            >
                              <DatePicker
                                className="allemployee_datepicker"
                                value={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                renderInput={(params) => <input {...params} />}
                              />
                            </LocalizationProvider>
                          </Grid>
                          <Grid item sm={12}>
                            <div
                              className="add-pro-butns"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                onClick={handleClose}
                                className="add"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  background: "red",
                                  padding: "7px 15px",
                                  color: "#fff",
                                  borderRadius: "8px",
                                  margin: "0px 10px",
                                }}
                              >
                                <RiCloseLine
                                  color="#fff"
                                  style={{ marginRight: "8px" }}
                                />{" "}
                                Cancel
                              </button>
                              <button
                                onClick={handleClose}
                                className="add"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  background: "#45d945",
                                  padding: "7px 15px",
                                  color: "#fff",
                                  borderRadius: "8px",
                                  margin: "0px 10px",
                                }}
                              >
                                <RiCheckLine
                                  color="#fff"
                                  style={{ marginRight: "8px" }}
                                />
                                Add Employee
                              </button>
                            </div>
                          </Grid>
                        </Grid>
                      </Box>
                    </Modal>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="allemployee_table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Degree</TableCell>
                      <TableCell>Mobile</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Joining Date</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>
                          <img
                            src={row.image}
                            alt="Employee"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.department}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>{row.degree}</TableCell>
                        <TableCell>{row.mobile}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.joiningDate}</TableCell>
                        <TableCell>
                          <div className="allemployee_action_buttons">
                            <button>
                              <RiEditLine className="icon allemployee_icon_edit" />
                            </button>
                            <button>
                              <RiDeleteBin5Line className="icon allemployee_icon_delete" />
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

export default AllEmployee;
