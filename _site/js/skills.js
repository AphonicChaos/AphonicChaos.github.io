const SKILLS_SECTION = document.querySelector(".skills");
const SKILLS = {
  "Advanced": [
    "This is",
    "An example",
    "of some stuff"
  ],
  "Proficient": [
    "Bootstrap",
    "Flexbox",
    "Material Design",
  ],
  "Intermediate": [
    "Polyfills",
    "Semantic HTML",
    "Tailwind",
    "Polyfills",
    "Semantic HTML",
    "Tailwind"
  ],
  "Beginner": [
    "Polyfills",
    "Semantic HTML",
    "Tailwind"
  ]
};

const populateSkills = () => {
  for (let category in SKILLS) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("skill");
    const skillItems = SKILLS[category].map(
      skill => `<li>${skill}</li>`
    ).join("\n");
    categoryDiv.innerHTML = `
      <h4>${category}</h4>
      <ul>
        ${skillItems}
      </ul>
    `;

    SKILLS_SECTION.appendChild(categoryDiv);
  }
}

window.addEventListener("load", () => {
  populateSkills();
});
