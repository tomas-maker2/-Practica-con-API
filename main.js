function obtenerPersonaje (done) {
    const results = fetch("https://rickandmortyapi.com/api/character")

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
}

obtenerPersonaje(data => {
    
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(`
        <div class="card" style="width: 18rem;">
            <img src=${personaje.image} class="card-img-top" alt="personaje">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">${personaje.status}</p>
            </div>
        </div>
        
        ` )
        const main = document.querySelector("main")

        main.append(article)
    });

})