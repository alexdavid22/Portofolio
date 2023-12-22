"use client"

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import "@/css/main.css"

const images = [
  {
    name: "My Bachelors Degree Complete Project",
    description: "Completing the final requirements for my degree",
    githubLink:
      "https://github.com/alexdavid22/My-Bachelors-Degree-Complete-Project",
    thumbnail: "bachelors.jpg",
  },
  {
    name: "REACT.JS E-Commerce Advanced Project",
    description: "Mock E-commerce shoe website similar to a professional one",
    githubLink:
      "https://github.com/alexdavid22/REACT.JS-E-Commerce-Advance-Filtering-Project",
    thumbnail: "e-commerce.jpg",
  },
  {
    name: "Work presentation website",
    description: "A presentation website project for my uncle's business.",
    githubLink: "https://github.com/alexdavid22/website-marius",
    thumbnail: "website.jpg",
  },
  {
    name: "AlSa-Robotics",
    description: "A personal web app integrating AI technologies.",
    githubLink: "https://github.com/alexdavid22/AlSa-Robotics",
    thumbnail: "robotics.jpg",
  },
]

export default function CarouselTest() {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      renderItem={item => (
        <div className="project-card2">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}
    />
  )
}
