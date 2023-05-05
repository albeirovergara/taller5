function consumirAPI() {
    console.log("Iniciando busqueda");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    console.log(url);

    var datos = document.getElementById("datos")
    
    fetch(url)
    .then(response => response.json())
    .then(json => {


        for (item of json.data.results){


            var fila = datos.insertRow();
            
            var serie = fila.insertCell(0);
            serie.innerHTML = item.events.name;

            var url = fila.insertCell(1);
            url.innerHTML = item.urls;


            

        }

    })
}