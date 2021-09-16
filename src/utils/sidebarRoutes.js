export  const sidebarItems = [
  {
    id: 1,
    text: "React",
    isDropdown: true,
    children: [
      {
        id: 1,
        text: "Counter",
        path: "/counter",
      },
      {
        id: 2,
        text: "Form",
        path: "/form",
      },
      {
        id: 3,
        text: "Table",
        path: "/table",
      },
    ],
  },
  {
    id: 2,
    text: "Vue",
  },
  {
    id: 3,
    text: "Next",
  },
  {
    id: 4,
    text: "Blitz",
    isDropdown: false,
  },
];
