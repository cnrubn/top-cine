let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=85aaca70a36d11ff3618ad70b7761f94&language=es';
let urlPoster = 'https://image.tmdb.org/t/p/w500';
let urlPeli = 'https://www.themoviedb.org/movie/';

fetch(url) 
    .then(response => response.json())
    .then(data=> mostrarDatos(data))
    .catch(error => console.log(error));

const mostrarDatos = (data) => {
    // console.log(data["results"][0]);
    // console.log(data["results"][0].title);
    // console.log(data["results"][0].overview);
    // console.log(data["results"][0].vote_average);
    // console.log(urlPoster+data["results"][0].poster_path);

    let imprimir = '';
    
    for (var i=0; i<12; i++) {
        // console.log(mostrarDatos(data));
        // console.log(i);
        // console.log(data["results"][i].title);
        // console.log(data["results"][i].overview);
        // console.log(data["results"][i].vote_average);
        // console.log(urlPoster+data["results"][i].poster_path);

        imprimir += `<div >
                        <a target="_blank" class="tarjeta" href="${urlPeli}+${data["results"][i].id}">
                            <div class="contenedor-img">
                                <img src="${urlPoster+data["results"][i].poster_path}"></img>
                            </div>
                            <div class="info">
                                <div class="puntuacion">
                                    <p class="nota">${data["results"][i].vote_average}</p>
                                </div>
                                <h3 class="titulo">${data["results"][i].title}</h3>
                                <p class="descripcion">${data["results"][i].overview}</p>
                            </div>
                        </a>
                     </div>`;
    }

    document.getElementById('tarjetas').innerHTML = imprimir;
}

