import "@/css/main.css"

function ProjectCard({ name, description, githubLink }) {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  )
}

export default function MyProjects() {
  const projectsData = [
    {
      name: "My Bachelors Degree Complete Project ",
      description: "For finalizing my degree",
      githubLink: "https://github.com/username/project1",
    },
    {
      name: "Project 2",
      description: "Consectetur adipiscing elit.",
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Project 3",
      description: "Consectetur adipiscing elit.",
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Project 4",
      description: "Var 4.",
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Project 5",
      description: "Var 5.",
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Project 6",
      description: "Var 6.",
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Project 7",
      description: "Var 7.",
      githubLink: "https://github.com/username/project2",
    },

    // Add more projects as needed
  ]

  return (
    <div className="my-projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
