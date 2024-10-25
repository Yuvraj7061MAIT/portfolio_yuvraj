




export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Success is not the key to happiness; happiness is the key to success. If you love what you are doing, you will be successful. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning as much as I can",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blog Creator",
    des: "Engineered a Python web app to generate blog content using the LLaMA 2 model, scaling content production by 20-30%.Enabled selection of the content domain, enhancing the likelihood of generating relevant blogs by 30%",
    img:"/blog.png" ,
    iconLists: ["/python.svg", "/streamlit.svg"],
    github: "https://github.com/Yuvraj7061MAIT/Blog-Creator",
  },
  {
    id: 2,
    title: "FinanZ",
    des: "Established a finance tracker app for logging expenses and analyzing spending habits, leading to 60-70% savings.Fortified the app’s security and performance, increasing efficiency by 30%.",
    img: "/finanz.png",
    iconLists: ["/ts.svg","/es.svg" , "/mgdb.svg"],
    github: "https://github.com/Yuvraj7061MAIT/FinanZ",
  },
  {
    id: 3,
    title: "Indavo",
    des: "Executed a full-stack e-commerce website using the React and Spring Boot, integrating user login and cart management,increasing user attention by 10%.Launched Razorpay payment solutions, enabling instant payment processing for customers; achieved a 20% increase in completed transactions and improved customer satisfaction ratings based on post-purchase surveys.",
    img: "/Indavo.png",
    iconLists: ["/re.svg", "/mgdb.svg", "/node.svg", "es.svg"],
    github: "https://github.com/Yuvraj7061MAIT/Indavo-FullStack",
  },
  {
    id: 4,
    title: "Google Clone",
    des: "Created a Google-clone engine with routing and global state management to display search results based on user input has a delay of 5 seconds.",
    img: "/google.png",
    iconLists: ["/re.svg", "/mi.svg", "/js.svg"],
    github: "https://github.com/Yuvraj7061MAIT/Google-Clone-Inital-Version",
  },
];

export const testimonials = [
  {
    quote:
      "In my first year, I navigated the challenges of online classes during the COVID pandemic. Despite the difficulties, I found joy in learning and connecting with friends through virtual platforms.",
    name: "Year 1",
    title: "Adapting to Online Learning",
  },
  {
    quote:
      "My second year marked the start of my coding journey. Realizing that mechanical engineering wasn't my passion, I dove into learning DSA and front-end development, despite facing setbacks in three hackathons.",
    name: "Year 2",
    title: "Discovering My Passion",
  },
  {
    quote:
      "The third year was transformative as I delved into machine learning and deep learning. This was my best year, culminating in winning a national-level award for my project at the Smart India Hackathon.",
    name: "Year 3",
    title: "Achieving National Recognition",
  },
  {
    quote:
      "In my final year, I achieved success in a hackathon and participated in an entrepreneurship bootcamp, solidifying my skills and preparing for the future.",
    name: "Year 4",
    title: "Final Year Triumphs",
  },
];


// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Data Science Intern",
    desc: "Assisted in the Sales Prediction and visualization with proper insites using Azure , Machine Learning and Python.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Smart India Hackathon",
    desc: "Designed and developed both Machine Learning model and Front End page using deep learning for model and html/css and js for web.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "TechnoMatch Hackathon",
    desc: "Led the dev of a Essay Scoring  model as well as a Sentimental analysis model using python , flask and machine learning",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Developer",
    desc: "Developed and Student Management System user-facing features using java swing. The front-end designs, increased user engagement and satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Yuvraj7061MAIT", // Replace with your GitHub profile link
  },
  {
    id: 2,
    img: "/li.svg",
    link: "https://www.linkedin.com/in/yuvraj-singh-ml/", // Replace with your LinkedIn profile link
  },
  {
    id: 2,
    img: "/insta.svg", // Add your Instagram icon image path
    link: "https://instagram.com/singh__yuvraj99", // Your Instagram link
  },
];
