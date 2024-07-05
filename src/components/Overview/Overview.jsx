import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  RiArrowDownLine,
  RiArrowUpLine,
  RiCashLine,
  RiProjector2Line,
  RiUser2Line,
  RiUserLine,
} from "@remixicon/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Calendar from "../Calendar/Calendar";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants/routeConstants";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: "14px",
};

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];
const attendanceData = [
  { name: "Present", value: 120 },
  { name: "Absent", value: 40 },
  { name: "Leave", value: 20 },
  { name: "Half-Day", value: 15 },
];

const Overview = () => {
  const monthlySalaryData = [
    { month: "Jan", salary: 5000 },
    { month: "Feb", salary: 4800 },
    { month: "Mar", salary: 5100 },
    { month: "Apr", salary: 5200 },
    { month: "May", salary: 5300 },
    { month: "Jun", salary: 5400 },
    { month: "Jul", salary: 5500 },
    { month: "Aug", salary: 5600 },
    { month: "Sep", salary: 5700 },
    { month: "Oct", salary: 5800 },
    { month: "Nov", salary: 5900 },
    { month: "Dec", salary: 6000 },
  ];

  const onPieEnter = (_, index) => {
    console.log(`Mouse entered slice: ${index}`);
  };

  const [open, setOpen] = useState(false);  // Start with modal closed
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      setOpen(true);  // Open the modal if not logged in
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("isLoggedIn", "true");  // Set logged in status
  };

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
    handleClose();
  };

  return (
    <div className="overview">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>
            Please log in to access the data. Without logging in, you cannot access any data.
          </p>
          <div style={{ textAlign: "center" }}>
            <button onClick={handleLogin} style={{ background: "#007aff", padding: "8px 35px", color: "#ffffff", borderRadius: "8px", border: "none", marginTop: "2rem" }}>
              Login
            </button>
          </div>
        </Box>
      </Modal>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="over_profile">
            <img
              src="https://w0.peakpx.com/wallpaper/592/1017/HD-wallpaper-memoji-emoji-album-artwork-cover-art-emoji-stickers-iphone-boy-emoji.jpg"
              alt=""
              className="over_profile_img"
            />
            <div className="overview_text">
              <h3>Welcome Back, Shanrin 👋</h3>
              <p>Have a Great Day and Keep Smiling! 😊</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="overview_birthday">
            <div className="card">
              <div className="overview_birth_text">
                <img
                  src="https://i.pinimg.com/564x/30/30/e0/3030e0d67f90f7691bcc6b0f093d0e1a.jpg"
                  alt="Profile"
                />
                <div className="overview_birth_head">
                  <h4>Today, Misha</h4>
                  <p>Happy Birthday</p>
                </div>
              </div>
              <div className="overview_cake">
                <img
                  src="https://png.pngtree.com/png-vector/20230418/ourmid/pngtree-birthday-cake-candles-celebration-transparent-png-image_6708793.png"
                  alt="Birthday Cake"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    <span>10</span>
                  </h3>
                  <p>New Employee</p>
                </div>
                <div className="overview_icon over_icon2">
                  <RiUserLine className="overview_icon_img icon2" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    $ <span>1.3M</span>
                  </h3>
                  <p>Total Revenue</p>
                </div>
                <div className="overview_icon over_icon3">
                  <RiCashLine className="overview_icon_img icon3" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    <span>12</span>
                  </h3>
                  <p>Project</p>
                </div>
                <div className="overview_icon over_icon4">
                  <RiProjector2Line className="overview_icon_img icon4" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    <span>1.4k</span>
                  </h3>
                  <p>Total Employee</p>
                </div>
                <div className="overview_icon over_icon5">
                  <RiUser2Line className="overview_icon_img icon5" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div className="card">
            <h3 style={{ marginBottom: "8px" }}>Income Analysis</h3>
            <div className="customer_chart1" style={{ height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlySalaryData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="colorSalary"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="salary"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorSalary)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="overview_attendance">
            <div className="card">
              <h3 style={{ marginBottom: "8px" }}>Attendance</h3>
              <div
                className="chart-labels"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {attendanceData.map((entry, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      width: "50%",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        backgroundColor: COLORS[index % COLORS.length],
                        marginRight: "8px",
                      }}
                    />
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
              <div className="customer_chart2" style={{ height: "243px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={attendanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                    >
                      {attendanceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="calender-event">
            <div className="card">
              <h3>Calendar</h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Calendar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
