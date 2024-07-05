import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import Main from "../layouts/Main";
import NoPageFound from "../components/NoPageFound";
import SalesReport from "../components/Employee/AllEmployee";
import Overview from "../components/Overview/Overview";
import Calendar from "../components/Calendar/Calendar";
import AllLeaveRequest from "../components/Leave/AllLeaveRequest";
import AllAttendance from "../components/Attendance/AllAttendance";
import Project from "../components/Project/Project";
import Login from "../auth/Login";
import UserOverview from "../components/Overview/UserOverview";
import UserAttendance from "../components/Attendance/UserAttendance";
import PrivateRoute from "./PrivateRoute";

const routeConfig = [
  { path: ROUTES.LOGIN, element: <Login /> },
  {
    path: ROUTES.HOME,
    element: <Main />,
    children: [
      { path: "", element: <Overview />, index: true },
      {
        path: ROUTES.ALL_EMPLOYEE,
        element: (
          <PrivateRoute role="admin">
            <SalesReport />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.CALENDAR,
        element: (
          <PrivateRoute role="admin">
            <Calendar />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.ALL_LEAVE_REQUEST,
        element: (
          <PrivateRoute role="admin">
            <AllLeaveRequest />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.ALL_ATTENDANCE,
        element: (
          <PrivateRoute role="admin">
            <AllAttendance />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.PROJECT,
        element: (
          <PrivateRoute role="admin">
            <Project />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.USER_OVERVIEW,
        element: (
          <PrivateRoute role="user">
            <UserOverview />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.USER_ATTENDANCE,
        element: (
          <PrivateRoute role="user">
            <UserAttendance />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NoPageFound /> },
];

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute) => (
                <Route
                  key={childRoute.path}
                  path={childRoute.path}
                  element={childRoute.element}
                  index={childRoute.index}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoute;
