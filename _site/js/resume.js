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
    "ASP.NET",
    "Django",
    "Entity Framework",
    "Express",
    "FastAPI",
    "Firebase",
    "Flask",
    "Laravel",
    "MSSQL",
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
  `I excel at designing elegant, pragmatic solutions to deeply-rooted architectural 
   problems in order to help platforms and teams work more effectively.`
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
