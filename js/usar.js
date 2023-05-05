function consumirAPI() {
    console.log("Iniciando busqueda");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    console.log(url);

    var grid = document.getElementById("PJMarvel")
    
    fetch(url)
    .then(response => response.json())
    .then(json => {


        for (item of json.data.results){


            var div = document.createElement("div");
            


            var label = document.createElement("label");
            label.innerText = item.name;
            

            var imagen = document.createElement("img");
            imagen.src = item.thumbnail.path + "." + item.thumbnail.extension;

            var description = document.createElement('p'); 
            description.innerHTML = item.description;




            var linkVerSeries = document.createElement("a");
            linkVerSeries.innerText = "Ver Serie";
            linkVerSeries.href="#"
            

            var linkVerComic = document.createElement("a");
            linkVerComic.innerText = "Ver Comic";
            linkVerComic.href="../html/index2.html"
            

            var linkVerEvento = document.createElement("a");
            linkVerEvento.innerText = "Ver Evento";
            linkVerEvento.href="#"
            

            var linkVerStories = document.createElement("a");
            linkVerStories.innerText = "Ver Stories";
            linkVerStories.href="#"
            

            

        
             
            

            
            
           
            grid.appendChild(div);

            div.appendChild(label);
            div.appendChild(imagen);
            div.appendChild(description);
           
            div.appendChild(linkVerSeries);
            div.appendChild(linkVerComic);
            div.appendChild(linkVerEvento);
            div.appendChild(linkVerStories);
            
            
            

        }

    })
}