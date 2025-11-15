import recipes from "./recipes.mjs";

const container = document.getElementById("recipeContainer");

function generateStars(rating) {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i <= rating ? "⭐" : "☆";
    }
    return output;
}

let recipesHTML = "";
recipes.forEach(recipe => {
    recipesHTML += `
        <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">

            <div class="recipe-info">
                <span class="recipe-tag">${recipe.tags[0]}</span>

                <h2 class="recipe-title">${recipe.name}</h2>

                <span class="rating">${generateStars(recipe.rating)}</span>

                <p class="recipe-desc">${recipe.description}</p>
            </div>
        </article>
    `;
});

container.innerHTML = recipesHTML;
