import React from "react";
import {
  RiSpeedUpLine,
  RiCalendarLine,
  RiUser2Line,
  RiSurveyLine,
  RiListCheck3,
  RiProjector2Line,
} from "@remixicon/react";
import { ROUTES } from "./routeConstants";

export const routes = [
  {
    path: ROUTES.HOME,
    label: "Overview",
    icon: <RiSpeedUpLine className="icon side-icon" />,
    key: "1",
    role: "admin",
  },
  {
    path: ROUTES.ALL_EMPLOYEE,
    label: "All Employees",
    icon: <RiUser2Line className="icon side-icon" />,
    key: "2",
    role: "admin",
  },
  {
    path: ROUTES.CALENDAR,
    label: "Calendar",
    icon: <RiCalendarLine className="icon side-icon" />,
    key: "3",
    role: "admin",
  },
  {
    path: ROUTES.ALL_LEAVE_REQUEST,
    label: "All Leave Request",
    icon: <RiSurveyLine className="icon side-icon" />,
    key: "4",
    role: "admin",
  },
  {
    path: ROUTES.ALL_ATTENDANCE,
    label: "All Attendance",
    icon: <RiListCheck3 className="icon side-icon" />,
    key: "5",
    role: "admin",
  },
  {
    path: ROUTES.PROJECT,
    label: "Project",
    icon: <RiProjector2Line className="icon side-icon" />,
    key: "6",
    role: "admin",
  },
  {
    path: ROUTES.USER_OVERVIEW,
    label: "UserOverview",
    icon: <RiSpeedUpLine className="icon side-icon" />,
    key: "7",
    role: "user",
  },
  {
    path: ROUTES.USER_ATTENDANCE,
    label: "UserAttendance",
    icon: <RiListCheck3 className="icon side-icon" />,
    key: "8",
    role: "user",
  },
  {
    path: ROUTES.USER_PROJECT,
    label: "My Project",
    icon: <RiProjector2Line className="icon side-icon" />,
    key: "9",
    role: "user",
  },
];
