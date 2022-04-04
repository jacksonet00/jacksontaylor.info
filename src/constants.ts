import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Image,
  Link,
} from "@chakra-ui/react";
import { MyCodeBlock } from "./components/MyCodeBlock";

export const GITHUB_URL = "https://github.com/jacksonet00";
export const LINKEDIN_URL = "https://linkedin.com/in/jacksonet00";
export const SOURCE_CODE_URL =
  "https://github.com/jacksonet00/jacksontaylor.info";
export const HOME_PAGE_DATA = {
  greeting: {
    headline: "greetings",
    subText: `i'm jackson, a software developer.`,
  },
  aboutMe: {
    paragraphs: [
      `I’m a third year student at the University of Florida 🐊 studying Computer Science with a minor in Math. During my first two years at UF, I've had the opportunity to participate in hackathons, serve as a Teaching Assistant, and intern full time as a Software Engineer.`,
      `When I'm not coding or browsing Pinterest, I enjoy practicing yoga, running, and engaging with the community through volunteering and working at local coffee shops. I'm passionate about technology and excited by any opportunity to direct that passion towards making a positive impact in peoples' lives.`,
    ],
  },
  projects: [
    {
      title: "Sock",
      link: "https://thesockapp.com",
      description: "A cross-platform native mobile app for roommates to manage shared spaces. Sock (beta) has received over 50 downloads and has approximately 20 daily active users.",
      tags: ["Typescript", "React Native", "Google Cloud Platform"],
    },
  ],
  experiences: [
    {
      company: "Meta",
      role: "Software Engineer Intern",
      date: "May 2022 - August 2022",
      bullets: [
        "Excited to be joining Meta in Menlo Park, Ca!",
      ],
      tags: [],
    },
    {
      company: "JP Morgan Chase",
      role: "Software Engineer Intern",
      date: "June 2021 - August 2021",
      bullets: [
        `Developed an internal tool used daily by 450 customer support agents with a REST API accessed by 150 developers.`,
        `Upgraded merchant services terminal with automatic authentication and improved navigation which led to a 35% improvement in time to complete critical customer service tasks.`,
      ],
      tags: [ "Javascript",  "React", "Java",  "Spring Boot",],
    },
  ],
  skills: [
    {
      type: "Application Development",
      items: [
        "Typescript",
        "React-Native",
        "React",
        "Node",
        "Docker",
        "Cloud Services",
      ],
    },
    {
      type: "Backend Development",
      items: ["Java", "Python", "C++", "SQL", "REST", "GraphQL"],
    },
    {
      type: "Data Analysis",
      items: [
        "Python",
        "Numpy",
        "Matplotlib",
        "Pandas",
        "Machine Learning",
        "Google Sheets",
      ],
    },
  ],
};

export const CHAKRA_UI_MARKDOWN_OPTIONS = {
  wrapper: "article",
  overrides: {
    h1: {
      component: Heading,
      props: {
        fontSize: "4xl",
        marginBottom: 6,
      },
    },
    h2: {
      component: Heading,
      props: {
        fontSize: "3xl",
        marginBottom: 6,
      },
    },
    h3: {
      component: Heading,
      props: {
        fontSize: "2xl",
        marginBottom: 6,
      },
    },
    h4: {
      component: Heading,
      props: {
        fontSize: "xl",
        marginBottom: 6,
      },
    },
    h5: {
      component: Heading,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    h6: {
      component: Heading,
      props: {
        fontSize: "md",
        marginBottom: 6,
      },
    },
    p: {
      component: Text,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    ul: {
      component: UnorderedList,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    ol: {
      component: OrderedList,
      props: {
        fontSize: "lg",
        marginBottom: 6,
      },
    },
    li: {
      component: ListItem,
      props: {
        fontSize: "lg",
      },
    },
    code: {
      component: MyCodeBlock,
      props: {
        marginBottom: 6,
      },
    },
    img: {
      component: Image,
      props: {
        marginBottom: 6,
        marginTop: 6,
      },
    },
    a: {
      component: Link,
      props: {
        marginBottom: 6,
        textDecoration: "underline",
        isExternal: true,
      },
    },
  },
};
