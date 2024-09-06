const works = fetch(worksApi);
async function getWorks() {
    const url = '';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getWork

document.getElementById("loginItem").addEventListener("click", function() {
    // Redirige vers une autre page (par exemple "page2.html")
    window.location.href = "Projet2/openclassroom/Projet%202/FrontEnd/login.html";
});

