import { Grid } from "@mui/material";
import {
  RiArrowDownLine,
  RiArrowUpLine,
  RiCheckLine,
  RiCoupon2Line,
  RiProjector2Line,
  RiTreeLine,
} from "@remixicon/react";
import React from "react";
// import { VectorMap } from "@south-paw/react-vector-maps";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { BarChart, Bar, CartesianGrid, Legend } from "recharts";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Calendar from "../Calendar/Calendar";

// Define colors for the chart
const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

// Mock data for attendance status
const attendanceData = [
  { name: "Present", value: 120 }, // Example: total present days
  { name: "Absent", value: 40 }, // Example: total absent days
  { name: "Leave", value: 20 }, // Example: total leave days
  { name: "Half-Day", value: 15 }, // Example: total half-day days
];

const UseruserOverview = () => {
  const monthlySalaryData = [
    {
      month: "Jan",
      salary: 5000,
    },
    {
      month: "Feb",
      salary: 4800,
    },
    {
      month: "Mar",
      salary: 5100,
    },
    {
      month: "Apr",
      salary: 5200,
    },
    {
      month: "May",
      salary: 5300,
    },
    {
      month: "Jun",
      salary: 5400,
    },
    {
      month: "Jul",
      salary: 5500,
    },
    {
      month: "Aug",
      salary: 5600,
    },
    {
      month: "Sep",
      salary: 5700,
    },
    {
      month: "Oct",
      salary: 5800,
    },
    {
      month: "Nov",
      salary: 5900,
    },
    {
      month: "Dec",
      salary: 6000,
    },
  ];

  const onPieEnter = (_, index) => {
    console.log(`Mouse entered slice: ${index}`);
  };

  const data = [
    { day: "Sun", hours: 50 },
    { day: "Mon", hours: 60 },
    { day: "Tue", hours: 65 },
    { day: "Wed", hours: 70 },
    { day: "Thu", hours: 75 },
    { day: "Fri", hours: 80 },
    { day: "Sat", hours: 85 },
  ];

  return (
    <div className="useroverview">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="over_profile">
            <img
              src="https://w0.peakpx.com/wallpaper/592/1017/HD-wallpaper-memoji-emoji-album-artwork-cover-art-emoji-stickers-iphone-boy-emoji.jpg"
              alt=""
              className="over_profile_img"
            />
            <div className="useroverview_text">
              <h3>Welcome Back, Shanrin 👋 </h3>
              <p>Have a Great Day and Keep Smiling! 😊</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="useroverview_birthday">
            <div className="card">
              <div className="useroverview_birth_text">
                <img
                  src="https://i.pinimg.com/564x/30/30/e0/3030e0d67f90f7691bcc6b0f093d0e1a.jpg"
                  alt="Profile"
                />
                <div className="useroverview_birth_head">
                  <h4>Today, Misha</h4>
                  <p>Happy Birthday</p>
                </div>
              </div>
              <div className="useroverview_cake">
                <img
                  src="https://png.pngtree.com/png-vector/20230418/ourmid/pngtree-birthday-cake-candles-celebration-transparent-png-image_6708793.png"
                  alt="Birthday Cake"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="useroverview_card_text">
            <div className="card">
              <div className="useroverview_text_value">
                <div>
                  <h3>
                    <span>12</span>
                  </h3>
                  <p>New Ticket</p>
                </div>
                <div className="useroverview_icon over_icon2">
                  <RiCoupon2Line className="useroverview_icon_img icon2" />
                </div>
              </div>
              <div className="useroverview_text_arrow">
                <div className="useroverview_value_arrow">
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
          <div className="useroverview_card_text">
            <div className="card">
              <div className="useroverview_text_value">
                <div>
                  <h3>
                    <span>13</span>
                  </h3>
                  <p>Ticket Resolved</p>
                </div>
                <div className="useroverview_icon over_icon3">
                  <RiCheckLine className="useroverview_icon_img icon3" />
                </div>
              </div>
              <div className="useroverview_text_arrow">
                <div className="useroverview_value_arrow">
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
          <div className="useroverview_card_text">
            <div className="card">
              <div className="useroverview_text_value">
                <div>
                  <h3>
                    <span>12</span>
                  </h3>
                  <p>Project Assigned</p>
                </div>
                <div className="useroverview_icon over_icon4">
                  <RiProjector2Line className="useroverview_icon_img icon4" />
                </div>
              </div>
              <div className="useroverview_text_arrow">
                <div className="useroverview_value_arrow">
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
          <div className="useroverview_card_text">
            <div className="card">
              <div className="useroverview_text_value">
                <div>
                  <h3>
                    <span>18</span>
                  </h3>
                  <p>Available Leaves</p>
                </div>
                <div className="useroverview_icon over_icon5">
                  <RiTreeLine className="useroverview_icon_img icon5" />
                </div>
              </div>
              <div className="useroverview_text_arrow">
                <div className="useroverview_value_arrow">
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
        <Grid item xs={12} md={6}>
          <div className="card">
            <h3 style={{ marginBottom: "8px" }}>Income Analysis</h3>
            <div className="customer_chart1">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[10, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hours" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="useroverview_attendance">
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
              <div className="customer_chart2" style={{ height: "321px" }}>
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
        {/* <Grid item xs={12} sm={6} md={3}>
          <div className="card">
          <h3>Map</h3>
            <div
              className="customer_chart3"
              style={{ width: "15rem", height: "300px" }}
            >
              <VectorMap
                {...world}
                layerProps={{
                  onClick: ({ target }) =>
                    window.alert(`Country: ${target.attributes.name.value}`),
                }}
              />
            </div>
          </div>
        </Grid> */}
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
        {/* <Grid item xs={12} sm={12}>
          <Profile />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default UseruserOverview;
