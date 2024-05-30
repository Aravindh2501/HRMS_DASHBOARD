import {
  RiSmartphoneLine,
  RiAdvertisementLine,
  RiCheckboxCircleLine,
  RiCodeSSlashLine,
  RiCustomerServiceLine,
  RiFileTextLine,
  RiServerLine,
  RiTeamLine,
  RiUserVoiceLine,
  RiBuildingLine,
} from "@remixicon/react";

export const projects = [
  {
    name: "Website Redesign",
    description:
      "Redesign the corporate website to improve user experience. Tasks include conducting user research, creating wireframes and prototypes, collaborating with UX/UI designers, implementing responsive design principles, optimizing loading speeds, and ensuring accessibility standards.",
    deadline: "2024-06-30",
    priority: "High",
    icon: (
      <RiSmartphoneLine
        className="project_icon_card"
        style={{ width: "30px", height: "30px" }}
      />
    ),
    progress: 75,
  },
  {
    name: "Marketing Campaign",
    description:
      "Launch a new marketing campaign for the summer season. Tasks involve defining target audience segments, creating compelling content for social media and email marketing, coordinating with influencers, monitoring campaign performance, and adjusting strategies based on analytics.",
    deadline: "2024-07-15",
    priority: "Medium",
    icon: <RiAdvertisementLine className="project_icon_card" width={34} />,
    progress: 50,
  },
  {
    name: "Product Launch",
    description:
      "Prepare for the new product launch event. Tasks include finalizing product features, coordinating with manufacturing and logistics teams, planning launch events and promotions, creating marketing collateral, and conducting market research.",
    deadline: "2024-08-01",
    priority: "High",
    icon: <RiCheckboxCircleLine className="project_icon_card" width={34} />,
    progress: 60,
  },
  {
    name: "Mobile App Update",
    description:
      "Update the mobile app with new features and bug fixes. Tasks involve reviewing user feedback, prioritizing feature enhancements, conducting QA testing, optimizing performance, and preparing release notes for stakeholders.",
    deadline: "2024-06-20",
    priority: "High",
    icon: <RiCodeSSlashLine className="project_icon_card" width={34} />,
    progress: 80,
  },
  {
    name: "Customer Survey",
    description:
      "Conduct a customer satisfaction survey and analyze results. Tasks include designing survey questions, distributing surveys via email and social media channels, collecting and analyzing responses, and preparing a report with actionable insights.",
    deadline: "2024-07-05",
    priority: "Medium",
    icon: <RiCustomerServiceLine className="project_icon_card" width={34} />,
    progress: 40,
  },
  {
    name: "Annual Report",
    description:
      "Compile and publish the annual financial report. Tasks involve gathering financial data from departments, collaborating with accountants and auditors, preparing visualizations and graphs, and ensuring compliance with regulatory requirements.",
    deadline: "2024-08-15",
    priority: "High",
    icon: <RiFileTextLine className="project_icon_card" width={34} />,
    progress: 30,
  },
  {
    name: "IT Infrastructure",
    description:
      "Upgrade the IT infrastructure for better performance. Tasks include evaluating current systems, planning upgrades for hardware and software, coordinating with IT vendors, implementing security measures, and conducting user training sessions.",
    deadline: "2024-09-01",
    priority: "Medium",
    icon: <RiServerLine className="project_icon_card" width={34} />,
    progress: 45,
  },
  {
    name: "Employee Training",
    description:
      "Organize training sessions for employees on new software. Tasks involve identifying training needs, creating training materials, scheduling sessions, evaluating training effectiveness, and providing ongoing support.",
    deadline: "2024-06-25",
    priority: "Medium",
    icon: <RiTeamLine className="project_icon_card" width={34} />,
    progress: 70,
  },
  {
    name: "Social Media Strategy",
    description:
      "Develop a new social media strategy for brand engagement. Tasks include auditing current social media channels, researching industry trends, defining brand voice and tone, creating content calendars, and measuring engagement metrics.",
    deadline: "2024-07-10",
    priority: "Low",
    icon: <RiUserVoiceLine className="project_icon_card" width={34} />,
    progress: 20,
  },
  {
    name: "Office Relocation",
    description:
      "Plan and execute the relocation of the office to a new space. Tasks involve selecting a new location, designing office layout, coordinating with movers and contractors, updating stakeholders, and ensuring minimal disruption to business operations.",
    deadline: "2024-09-30",
    priority: "High",
    icon: <RiBuildingLine className="project_icon_card" width={34} />,
    progress: 35,
  },
];
