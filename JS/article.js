export function loadata(ref){
    let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
    let request = new XMLHttpRequest();
    request.open('GET',requestUrl);
    request.responseType = 'json';
    request.send();
    request.onload = function (){
        var data = request.response;
        loadArticle(data[0]);
        var i = 0
        const bouton = document.getElementById('bouton_panier');
        bouton.addEventListener('click', () => {
            localStorage.setItem(localStorage.length++, JSON.stringify(data[i]));
            console.log(localStorage)
        });
    }
}
function loadArticle(jsonObj){
    document.getElementById('cheminMarque').innerHTML = jsonObj.marque + ' >';
    document.getElementById('cheminNom').innerHTML = jsonObj.nom;
    image = document.getElementById('Bass')
    image.setAttribute('src', jsonObj.image);
    image.setAttribute('alt', jsonObj.nom);
    document.querySelector('h1').innerHTML = jsonObj.nom;
    document.getElementById('description').innerHTML = jsonObj.description;
    document.getElementById('prix').innerHTML = jsonObj.prix + "€";
    document.getElementById('prix_initial').innerHTML = 'au lieu de ' + jsonObj['prix initial'] + "€";
}