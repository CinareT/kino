var input=document.querySelector(`input`);
var search=document.querySelector(`.search`)

search.onclick=function() {
    var div=document.createElement(`div`);
var h1=document.createElement(`h1`);
var h2=document.createElement(`h2`);
var h3=document.createElement(`h3`);
var image=document.createElement(`img`);

    var text=input.value
 $.ajax({
    method: "GET",
    url:  `http://www.omdbapi.com/?apikey=8b3fe2fb&t=${text}`,

}).then(function(response){
    console.log(response)
    $(h1).html(`Kinonun adi: `+response.Title);
    $(h2).html(`Kinonun ili: `+response.Year);
    $(h3).html(`Aktyorlar: `+response.Actors);
    $(image).attr(`src`,response.Poster);
    div.append(h1);
    div.append(h2);
    div.append(h3)
    div.append(image);
    $(`.box`).append(div)
    
}).catch(function(error){
    console.log(`XETA`, error)
})
   input.value=""
}
