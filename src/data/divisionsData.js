import {
  phoneIcon,
  envelopeIcon,
  pinIcon,
  notebookIcon,
  biometricsIcon,
} from "../assets/svg";

export const metrics = [
  { label: "Ongoing metric", value: 31454, info: "This is for ongoing only" },
  { label: "Past metric", value: 2344, info: "This is for past only" },
  { label: "Missed metric", value: 14224, info: "This is for missed only" },
  { label: "Failed metric", value: 635, info: "This is for failed only" },
  { label: "Pending metric", value: 11334, info: "This is for pending only" },
];

export const summaryDetails = [
  { icon: phoneIcon, text: "0801 234 5678" },
  { icon: envelopeIcon, text: "asbfefr@gmail.com" },
  { icon: pinIcon, text: "Mojidi, Lagos" },
  { icon: notebookIcon, to: "#", text: "2 Journal entries" },
  { icon: biometricsIcon, text: "24 fingerprints enrolled" },
];

export const historyDetails = [
  {
    text: "Searched “Journal Entries” on Division module",
    date: new Date(),
    channel: "Web",
  },
  {
    text: "Searched “Fingerprint record” on Division module",
    date: new Date(),
    channel: "Web",
  },
  {
    text: "Searched “Journal Entries” on Division module",
    date: new Date(),
    channel: "Web",
  },
];

export const tableHeaders = [
  "",
  "NAME",
  "LOCATION",
  "STATUS",
  "ENTRIES",
  "RISK PROFILE",
  "",
];

export const tableData = [
  {
    name: "Courtney Henry",
    state: "Lagos state",
    address: "775 Rolling Green Rd.",
    issues: 0,
    entries: 19,
    entry_type: "Homogenous",
    risk: "low",
  },
  {
    name: "Darrell Steward",
    state: "Lagos state",
    address: "7529 E. Pecan St.",
    issues: 2,
    entries: 10,
    entry_type: "Homogenous",
    risk: "mid",
  },
  {
    name: "Cody Fisher",
    state: "Lagos state",
    address: "3605 Parker Rd.",
    issues: 0,
    entries: 8,
    entry_type: "Homogenous",
    risk: "mid",
  },
  {
    name: "Bessie Cooper",
    state: "Lagos state",
    address: "775 Rolling Green Rd.",
    issues: 1,
    entries: 12,
    entry_type: "Homogenous",
    risk: "high",
  },
  {
    name: "Annette Black",
    state: "Lagos state",
    address: "8080 Railroad St.",
    issues: 0,
    entries: 13,
    entry_type: "Homogenous",
    risk: "low",
  },
  {
    name: "Jenny Wilson",
    state: "Lagos state",
    address: "8080 Railroad St.",
    issues: 5,
    entries: 18,
    entry_type: "Homogenous",
    risk: "high",
  },
  {
    name: "Darlene Robertson",
    state: "Lagos state",
    address: "3890 Poplar Dr.",
    issues: 2,
    entries: 6,
    entry_type: "Homogenous",
    risk: "mid",
  },
  {
    name: "Ralph Edwards",
    state: "Lagos state",
    address: "8558 Green Rd.",
    issues: 0,
    entries: 14,
    entry_type: "Homogenous",
    risk: "low",
  },
  {
    name: "Courtney Henry",
    state: "Lagos state",
    address: "775 Rolling Green Rd.",
    issues: 0,
    entries: 19,
    entry_type: "Homogenous",
    risk: "low",
  },
  {
    name: "Darrell Steward",
    state: "Lagos state",
    address: "7529 E. Pecan St.",
    issues: 2,
    entries: 10,
    entry_type: "Homogenous",
    risk: "mid",
  },
];
