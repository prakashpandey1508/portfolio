import { IProject } from "./types"
import soon from "@/Images/ProjectImages/soon.webp"
import TurfNoww from "@/Images/ProjectImages/Turfnoww.gif"
import Ecommerce from "@/Images/ProjectImages/Ecommerce.png"

const projects: Array<IProject> = [
  {
    title: "Distributed E-Commerce Platform",
    description: "A comprehensive, enterprise-grade e-commerce system architected using Java Spring Boot microservices. The platform features three core services - Product, Order, and Inventory - designed for horizontal scalability and high availability.",
    thumbnail: Ecommerce,
    githubLink: "https://github.com/prakashpandey1508/",
    demoLink: "https://github.com/prakashpandey1508/"
  },
  {
    title: "TurfNoww - Book Your Sports Ground Easily",
    description: "A modern, feature-rich blogging platform designed for writers, readers, and communities to connect, create, and engage. Built with a robust tech stack, this application provides seamless user experience and functionality for blog creation, collaboration, and interaction.",
    thumbnail: TurfNoww,
    githubLink: "https://github.com/prakashpandey1508/TurfNoww",
    demoLink: ""
  },
  {
    title: "Exciting Upcoming Projects",
    description: "Explore my diverse collection of projects that will be added soon! Stay tuned for a variety of solutions, ranging from full-stack applications to advanced tech stacks, each designed to showcase my skills and creativity. Check back soon for more!",
    thumbnail: soon,
    githubLink: "https://github.com/prakashpandey1508/",
  },
  
]

export default projects