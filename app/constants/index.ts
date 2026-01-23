import type { AxisModel } from "@syncfusion/ej2-react-charts";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: "/assets/icons/users.svg",
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 4,
    icon: "/assets/icons/itinerary.svg",
    label: "AI Trips",
    href: "/trips",
  },
];

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const useryAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const tripXAxis: AxisModel = {
  valueType: "Category",
  title: "Travel Styles",
  majorGridLines: { width: 0 },
};

export const tripyAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};

export const users = [
  {
    "id": "usr_001",
    "name": "Alice Thompson",
    "email": "alice.thompson@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=1",
    "dateJoined": "2024-02-14T10:22:31.000Z",
    "itineraryCreated": 3,
    "status": "admin"
  },
  {
    "id": "usr_002",
    "name": "Marcus Lee",
    "email": "marcus.lee@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=2",
    "dateJoined": "2024-03-01T16:05:12.000Z",
    "itineraryCreated": 7,
    "status": "user"
  },
  {
    "id": "usr_003",
    "name": "Sofia Alvarez",
    "email": "sofia.alvarez@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=3",
    "dateJoined": "2024-01-22T08:41:55.000Z",
    "itineraryCreated": 1,
    "status": "inactive"
  },
  {
    "id": "usr_004",
    "name": "Daniel Cooper",
    "email": "daniel.cooper@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=4",
    "dateJoined": "2023-12-09T19:14:03.000Z",
    "itineraryCreated": 12,
    "status": "active"
  },
  {
    "id": "usr_005",
    "name": "Priya Patel",
    "email": "priya.patel@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=5",
    "dateJoined": "2024-04-05T11:30:47.000Z",
    "itineraryCreated": 0,
    "status": "pending"
  },
  {
    "id": "usr_006",
    "name": "Noah Williams",
    "email": "noah.williams@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=6",
    "dateJoined": "2023-11-18T14:02:20.000Z",
    "itineraryCreated": 9,
    "status": "active"
  },
  {
    "id": "usr_007",
    "name": "Emily Chen",
    "email": "emily.chen@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=7",
    "dateJoined": "2024-02-28T09:55:10.000Z",
    "itineraryCreated": 4,
    "status": "active"
  },
  {
    "id": "usr_008",
    "name": "Liam O'Connor",
    "email": "liam.oconnor@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=8",
    "dateJoined": "2023-10-03T17:48:36.000Z",
    "itineraryCreated": 15,
    "status": "suspended"
  },
  {
    "id": "usr_009",
    "name": "Hannah Müller",
    "email": "hannah.mueller@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=9",
    "dateJoined": "2024-01-10T13:21:44.000Z",
    "itineraryCreated": 2,
    "status": "active"
  },
  {
    "id": "usr_010",
    "name": "Jordan Smith",
    "email": "jordan.smith@example.com",
    "imageUrl": "https://i.pravatar.cc/150?img=10",
    "dateJoined": "2024-04-18T07:09:58.000Z",
    "itineraryCreated": 6,
    "status": "active"
  }
]


export const user = { name: "Adrian" };
export const dashboardStats = {
  totalUsers: 12450,
  usersJoined: { currentMonth: 218, lastMonth: 176 },
  totalTrips: 3210,
  tripsCreated: { currentMonth: 150, lastMonth: 250 },
  userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
};
export const allTrips = [
  {
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: 2,
    name: "French Reverie",
    imageUrls: ["/assets/images/sample2.jpg"],
    itinerary: [{ location: "Paris" }],
    tags: ["Relaxation", "Culinary"],
    travelStyle: "Family",
    estimatedPrice: "$2,000",
  },
  {
    id: 3,
    name: "Zen Break",
    imageUrls: ["/assets/images/sample3.jpg"],
    itinerary: [{ location: "Japan" }],
    tags: ["Shopping", "Luxury"],
    travelStyle: "Couple",
    estimatedPrice: "$3,000",
  },
  {
    id: 4,
    name: "Adventure in Westeros",
    imageUrls: ["/assets/images/sample4.jpg"],
    itinerary: [{ location: "Croatia" }],
    tags: ["Historical", "Culture"],
    travelStyle: "Friends",
    estimatedPrice: "$4,000",
  },
];