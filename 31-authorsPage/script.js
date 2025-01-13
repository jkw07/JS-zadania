const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
const offset = 8;
let authorDataArr = [];

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, offset));
  })
  .catch((err) => {
    authorContainer.innerHTML =
      '<p class="error-msg">There was an error loading the authors</p>';
  });

const fetchMoreAuthors = (startingIndex, offset) => {
  const endingIndex = startingIndex + offset;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = "not-allowed";
    loadMoreBtn.textContent = "No more data to load";
  }
};

const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
  });
};

loadMoreBtn.addEventListener("click", () => {
  startingIndex += offset;
  fetchMoreAuthors(startingIndex, offset);
  console.log("starting indedx", startingIndex);
});
