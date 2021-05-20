var presentation = document.querySelector('.presentation');
var section = document.querySelector(".produit");
/*-- Appel du fichier JSON --*/
let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
let request = new XMLHttpRequest();
request.open('GET',requestUrl);

request.responseType = 'json';
request.send();

/*-- --*/
request.onload = function (){
    var data = request.response;
    brandFilter(data);
}

function brandFilter(jsonObj){
    var data = jsonObj;
    let url = window.location.href;
    console.log(url);
    if(url ==="http://localhost:63342/Bassbrands/Fender.html"){
        var result = data.filter(bass => bass.marque ==='Fender');
        presentation.classList.add('fender');
        section.classList.add('fender');
        showBass(result)
    }
    else if(url === 'http://localhost:63342/Bassbrands/Cort.html'){
        let result = data.filter(bass => bass.marque ==='Cort');
        presentation.classList.add('cort');
        section.classList.add('cort');
        showBass(result);
    }
}
/* Fonction qui gere tout ce qui est affichage */
function showBass(bass){
    for(var i =0; i <= bass.length; i++){
        // Création des balises html
        var bassImage = document.createElement('img');
        var myArticle = document.createElement('article');
        var libelle = document.createElement('h2');
        var infos = document.createElement('div');
        var infoPrix = document.createElement('div');
        var prix = document.createElement('p');
        var prixInitial = document.createElement('p');
        var infoDispo = document.createElement('div');
        var stock = document.createElement('p');
        var ref = document.createElement('p');

        //Attribution de class
        libelle.classList.add('nom');
        infos.classList.add('infos');
        infoPrix.classList.add('infoPrix')
        prix.classList.add('prix');
        prixInitial.classList.add('prixInitial');
        infoDispo.classList.add('infoDispo');
        stock.classList.add('stock');
        ref.classList.add('reference');

        // contenu des balises
        bassImage.setAttribute('src', bass[i].image);
        libelle.textContent = bass[i].nom;
        prix.textContent = bass[i].prix + '€';
        prixInitial.textContent = 'au lieu de '+ bass[i]['prix initial'] + '€';
        if (bass[i].disponible){
            stock.textContent = 'En stock';
        }else{
            stock.textContent = "Rupture de stock";
        }
        ref.textContent = "Réf : " + bass[i].reference;

        // Attribution balise à Arcticle

        myArticle.appendChild(bassImage);
        myArticle.appendChild(libelle);
        infoPrix.appendChild(prix);
        infoPrix.appendChild(prixInitial);
        infoDispo.appendChild(stock);
        infoDispo.appendChild(ref);
        infos.appendChild(infoPrix);
        infos.appendChild(infoDispo);
        myArticle.appendChild(infos);
        section.appendChild(myArticle);
    }
}