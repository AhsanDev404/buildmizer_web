import { cement, profile } from "./assets";

export const header = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Calculator",
    link: "/calculator",
  },
  {
    title: "Project",
    link: "/projects",
  },
  {
    title: "Stay in Touch",
    link: "/stay-in-touch",
  },
  {
    title: "About",
    link: "/about",
  },
];

export const studentData = [
  {
    imageUrl: profile,
    name: "John Doe",
    studentId: "123456",
    participation: "Active",
  },
  {
    imageUrl: profile,
    name: "John Doe",
    studentId: "123456",
    participation: "Active",
  },
  {
    imageUrl: profile,
    name: "John Doe",
    studentId: "123456",
    participation: "Active",
  },
];

export const products = [
  {
    productImage:cement, 
    title:'title', 
    price:2000 
  },
  {
    productImage:cement, 
    title:'title', 
    price:2000 
  },
  {
    productImage:cement, 
    title:'title', 
    price:2000 
  }
];

export const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'Description for Project One',
    type: 'Web Development',
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'Description for Project Two',
    type: 'Mobile App Development',
  },
  {
    id: 3,
    name: 'Project Three',
    description: 'Description for Project Three',
    type: 'Data Science',
  },
  // Add more project objects as needed
];
