async function getWorks() {
    const url = "http://localhost:5678/api/works";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        // Boucle sur les éléments du tableau JSON
        for (let i = 0; i < json.length; i++) {
            setFigure(json[i]); // Appel de la fonction setFigure pour chaque élément
        }
    } catch (error) {
        console.error(error.message);
    }
}

getWorks();

// Fonction pour créer une balise figure et l'ajouter au DOM
function setFigure(data) {
    const figure = document.createElement("figure");
    // Ajoute l'image et le titre dynamiquement en fonction des données reçues
    figure.innerHTML = `
        <img src="${data.imageUrl}" alt="${data.title}">
        <figcaption>${data.title}</figcaption>
    `;

    // Ajoute la figure créée dans le body du document
    document.querySelector(".gallery").append(figure);
}
