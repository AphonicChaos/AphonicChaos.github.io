const SKILLS = {
  "Expert": [
    "Agile",
    "Bootstrap",
    "CI/CD",
    "CSS",
    "CircleCI",
    "CloudFront",
    "Django",
    "Docker",
    "EC2",
    "ECS",
    "Express",
    "FastAPI",
    "Flask",
    "Git",
    "HTML",
    "Haskell",
    "Heroku",
    "JavaScript",
    "Jenkins",
    "MongoDB",
    "MySQL",
    "NoSQL",
    "Node",
    "PostgreSQL",
    "Python",
    "RDS",
    "React",
    "Redux",
    "SASS",
    "SNS",
    "SQL",
    "SQS",
    "Tailwind",
    "TypeScript",
    "Vite",
  ],
  "Advanced": [
    "AWS",
    "Airflow",
    "Bash",
    "DataDog",
    "Jira",
    "Kubernetes",
    "Lambda",
    "Laravel",
    "MSSQL",
    "Oracle Cloud",
    "PHP",
    "Pulumi",
    "Rails",
    "Route 53",
    "Ruby",
    "Terraform",
    "Webpack",
    "GitHub Actions",
    "Copilot",
    "CloudFormation",
  ],
  "Intermediate": [
    "AI",
    "ASP.NET",
    "Azure",
    "C",
    "C#",
    "DBT",
    "Ember",
    "Entity Framework",
    "Figma",
    "Firebase",
    "Go",
    "GPC",
    "Kafka",
    "Java",
    "Lua",
    "NGINX",
    "NextJS",
    "Prompt Engineering",
    "PureScript",
    "Rust",
    "Zapier",
  ],
  "Beginner": [
    "Deep Learning",
    "Elixir",
    "Kotlin",
    "Vue",
  ],
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
      (skill, index) => {
        const punctuation = index === SKILLS[category].length - 1 ? "." : ",";
        return `<span> ${skill}${punctuation} </span> `;
      }
    ).join("\n");
    categoryDiv.innerHTML = `
  <h4> ${category}</h4>
  <p>
    ${skillItems}
  </p>
    `;

    SKILLS_SECTION.appendChild(categoryDiv);
  }
}

window.addEventListener("load", () => {
  populateSummary();
  populateSkills();
});
