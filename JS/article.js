export function article(reference){
    let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
    let request = new XMLHttpRequest();
    request.open('GET',requestUrl);

    request.responseType = 'json';
    request.send();
    request.onload = function (){
        var data = request.response;
        var bassindex = data.findIndex(bass => bass.reference === reference)
        var bassArticle = data[bassindex];
        loadArticle(bassArticle);
        const bouton = document.getElementById('bouton_panier');
        bouton.addEventListener('click', () => {
            //TODO Systéme de clé incrementation
            let azs = localStorage.getItem(bassArticle.reference)
            if(azs){
                let obj = JSON.parse(azs);
                console.log(obj.qte)
                obj.qte++;
                localStorage.removeItem(bassArticle.reference);
                localStorage.setItem(bassArticle.reference, JSON.stringify(obj));
            }else{
                localStorage.setItem(bassArticle.reference, JSON.stringify(bassArticle));
            }
        });

    }
}


function loadArticle(jsonObj){
    document.getElementById('cheminMarque').innerHTML = jsonObj.marque + ' >';
    document.getElementById('cheminNom').innerHTML = jsonObj.nom;
    var image = document.getElementById('Bass')
    image.setAttribute('src', jsonObj.image);
    image.setAttribute('alt', jsonObj.nom);
    document.querySelector('h1').innerHTML = jsonObj.nom;
    document.getElementById('description').innerHTML = jsonObj.description;
    document.getElementById('prix').innerHTML = jsonObj.prix + "€";
    document.getElementById('prix_initial').innerHTML = 'au lieu de ' + jsonObj['prix initial'] + "€";
}
