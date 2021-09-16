export const leftNavItems = [
  {
    to: "#",
    component: "a",
    children: <b>Tareq Monwer</b>,
    hrefTarget: "",
  },
  {
    component: "span",
    children: <i>Banasree, Dhaka - 1219</i>,
  },
  {
    component: "span",
    children: (
      <div className="flex flex-col justify-center">
        <small>+880 1742571124</small>
        <small>tareqmonwer137@gmail.com</small>
      </div>
    ),
  },
];

export const rightNavItems = [
  {
    to: "https://www.github.com/tareqmonwer/",
    component: "a",
    children: "GitHub",
    hrefTarget: "_blank",
  },
  {
    to: "https://www.linkedin.com/in/tareqmonwer/",
    component: "a",
    children: "LinkedIn",
    hrefTarget: "_blank",
  },
  {
    to: "https://tareqmonwer.com/blog",
    component: "a",
    children: "Blog",
    hrefTarget: "_blank",
  },
];
