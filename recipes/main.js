import recipes from "./recipes.mjs";

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

const container = document.getElementById("recipeContainer");

function generateStars(rating) {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i <= rating ? "⭐" : "☆";
    }
    return output;
}

function displayRecipes(recipesToDisplay) {
    let recipesHTML = "";
    recipesToDisplay.forEach(recipe => {
        recipesHTML += `
            <article class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">

                <div class="recipe-info">
                    <span class="recipe-tag">${recipe.tags[0]}</span>

                    <h2 class="recipe-title">${recipe.name}</h2>

                    <span class="rating">${generateStars(recipe.rating)}</span>

                    <p class="recipe-desc">${recipe.description}</p>
                </div>
            </article>`;
    });
    container.innerHTML = recipesHTML;
}

function searchRecipes(searchTerm) {
    const term = searchTerm.toLowerCase();
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(term) || 
        recipe.tags.some(tag => tag.toLowerCase().includes(term))
    );
    return filtered.length > 0 ? filtered : recipes;
}

const randomRecipe = getRandomListEntry(recipes);
displayRecipes([randomRecipe]);

const searchForm = document.querySelector(".search-form");
const searchInput = document.getElementById("search");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    const results = searchRecipes(searchTerm);
    displayRecipes(results);
});
