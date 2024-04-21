import { Item } from "../components/Item";
import Page from "./Page";

const semestersData = [
  {
    semester: "Spring 2022",
    courses: ["6.858: Computer Systems Security", "6.THM: M.Eng. Thesis"],
  },
  {
    semester: "Fall 2021",
    courses: [
      "6.865: Advanced Computational Photography",
      "6.887: Machine Learning for Systems",
      "6.THM: M.Eng. Thesis",
    ],
  },
  {
    semester: "Spring 2021",
    courses: [
      "6.857: Network and Computer Security",
      "6.833: Data-Driven Decision Making and Society",
      "18.600: Probability & Random Variables",
      "18.06: Linear Algebra",
      "6.UAR: Seminar in Undergrad Research",
    ],
  },
  {
    semester: "Fall 2020",
    courses: [
      "6.046: Design and Analysis Algorithms",
      "18.404: Theory of Computation",
      "6.809: Interactive Music Systems",
      "6.UAR: Seminar in Undergrad Research",
      "3.091: Intro to Solid-State Chemistry",
      "24.917: ConLangs - Construct a Language",
      "21M.401: MIT Concert Choir",
    ],
  },
  {
    semester: "Spring 2020",
    courses: [
      "6.031: Elements of Software Construction",
      "6.033: Computer Systems Engineering",
      "21H.055: Media in Weimar & Nazi Germany",
      "21M.299: Music of Brazil",
      "21M.401: MIT Concert Choir",
    ],
  },
  {
    semester: "Fall 2019",
    courses: [
      "6.004: Computation Structures",
      "6.006: Introduction to Algorithms",
      "6.036: Introduction to Machine Learning",
      "21M.361: Electronic Music Composition I",
    ],
  },
  {
    semester: "Spring 2019",
    courses: [
      "6.009: Fundamentals of Programming",
      "6.08: Embedded Systems",
      "6.042: Math For Computer Science",
      "7.013: Introductory Biology",
      "21M.301: Harmony and Counterpoint I",
    ],
  },
  {
    semester: "IAP 2019",
    courses: [
      "6.148: Web Lab - Prog & Competition",
      "6.S191: Introduction to Deep Learning",
      "6.S185: Bluetooth and System-on-Chip basics",
    ],
  },
  {
    semester: "Fall 2018",
    courses: [
      "6.034: Artificial Intelligence",
      "8.02: Physics II",
      "18.02: Calculus II",
      "21M.011: Introduction to Western Music",
      "6.AO1: Mens et Manus - The Joy of MIT",
    ],
  },
];

export const ClassesPage = () => {
  return (
    <Page>
      <div className="w-full flex flex-col sm:items-start items-center">
        <h1 className="text-2xl">Classes</h1>
      </div>
      {semestersData.map(({ semester, courses }) => (
        <Item
          title={semester}
          description={
            <ul className="list-disc">
              {courses.map((x) => (
                <li key={x} className="ml-6">
                  {x}
                </li>
              ))}
            </ul>
          }
        ></Item>
      ))}
    </Page>
  );
};
