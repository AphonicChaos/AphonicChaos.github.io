const SKILLS = {
  "Advanced": [
    "Stuff"
  ],
  "Proficient": [
  ],
  "Intermediate": [
  ],
  "Beginner": [
  ]
};

const SUMMARY = [
  ""
];

const SUMMARY_SECTION = document.querySelector("#summary");
const SKILLS_SECTION = document.querySelector(".skills");

function populateSummary() {
  SUMMARY_SECTION.insertAdjacentHTML(
    "beforeend",
    SUMMARY.map(
      paragraph => `<p>${paragraph}</p>`
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
  populateSummary();
  populateSkills();
});
