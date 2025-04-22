const SKILLS = {
  "Languages": [
    "Bash",
    "C",
    "C#",
    "CSS",
    "Elixir",
    "HTML",
    "Haskell",
    "Java",
    "JavaScript",
    "Kotlin",
    "PHP",
    "Python",
    "Ruby",
    "Rust",
    "SQL",
    "TypeScript",
  ],
  "Frontend": [
    "Bootstrap",
    "Ember",
    "React",
    "Redux",
    "SASS",
    "Tailwind",
    "Vite",
    "Vue",
    "Webpack",
  ],
  "Backend": [
    "Django",
    "Express",
    "FastAPI",
    "Firebase",
    "Flask",
    "Laravel",
    "MongoDB",
    "MySQL",
    "NGINX",
    "NextJS",
    "NoSQL",
    "Node",
    "PostgreSQL",
    "Rails",
  ],
  "Devops": [
    "AWS",
    "Azure",
    "CI/CD",
    "CircleCI",
    "CloudFront",
    "Docker",
    "EC2",
    "ECS",
    "Heroku",
    "Jenkins",
    "Kubernetes",
    "Lambda",
    "Oracle Cloud",
    "Pulumi",
    "RDS",
    "Route 53",
    "SNS",
    "SQS",
    "Terraform",
  ],
  "Other": [
    "AI",
    "Agile",
    "DBT",
    "DBT",
    "Git",
    "Zapier",
  ]
};

const SUMMARY = [
  `Staff Full Stack Engineer with over a decade of industry experince on top of 
  another decade of open source contributions.`,
  `High-impact individual contributor who is able to work autonomously, but also
  an effective leader who believes that effective products are built by effective 
  teams.`,
];

const SUMMARY_SECTION = document.querySelector("#summary");
const SKILLS_SECTION = document.querySelector(".skills");

function populateSummary() {
  SUMMARY_SECTION.insertAdjacentHTML(
    "beforeend",
    SUMMARY.map(
      paragraph => `<p>${paragraph}</p> `
    ).join('\n')
  );
};

function populateSkills() {
  for (let category in SKILLS) {
    if (!SKILLS[category].length) {
      return;
    }

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("skill");
    const skillItems = SKILLS[category].map(
      skill => `<li> ${skill}</li> `
    ).join("\n");
    categoryDiv.innerHTML = `
  <h4> ${category}</h4>
  <ul>
    ${skillItems}
  </ul>
    `;

    SKILLS_SECTION.appendChild(categoryDiv);
  }
}

window.addEventListener("load", () => {
  populateSummary();
  populateSkills();
});
