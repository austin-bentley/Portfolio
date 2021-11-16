import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const projects = () => [
  {
    name: "Cars Beta",
    link: "/cars-beta",
    image: (
      <StaticImage
        src="../assets/cars-beta.webp"
        layout="constrained"
        alt="Cars Beta Image"
      />
    ),
  },
  {
    name: "Cars Alpha",
    link: "/cars-alpha",
    image: (
      <StaticImage
        src="../assets/cars-alpha.webp"
        layout="constrained"
        alt="Cars Alpha Image"
      />
    ),
  },
  {
    name: "Research Trims",
    link: "https://www.cars.com/research/volvo-xc60-2020/trims/",
    image: (
      <StaticImage
        src="../assets/research-trims.webp"
        layout="constrained"
        alt="Research Trims Image"
      />
    ),
  },
  {
    name: "Discover",
    link: "https://discover.lanl.gov/",
    image: (
      <StaticImage
        src="../assets/discover.webp"
        layout="constrained"
        alt="Discover Image"
      />
    ),
  },
  {
    name: "Detonators",
    link: "https://detonators.lanl.gov/",
    image: (
      <StaticImage
        src="../assets/det.webp"
        layout="constrained"
        alt="Detonators Image"
      />
    ),
  },
  {
    name: "Classified Library",
    link: "https://classifiedlibrary.lanl.gov/",
    image: (
      <StaticImage
        src="../assets/research-library.webp"
        layout="constrained"
        alt="Classified Library Image"
      />
    ),
  },
  {
    name: "Lanl Style Guide",
    link: "https://styles.content.lanl.gov/",
    image: (
      <StaticImage
        src="../assets/lanl-style-guide.webp"
        layout="constrained"
        alt="Lanl Style Guide Image"
      />
    ),
  },
]
