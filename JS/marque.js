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
    const data = jsonObj;
    let url = window.location.href;
    console.log(url);
    if(url.includes('Fender.html')){
        const result = data.filter(bass => bass.marque ==='Fender');
        presentation.classList.add('fender');
        section.classList.add('fender');
        showBass(result)
    }
    else if(url.includes('Cort.html')){
        const  result = data.filter(bass => bass.marque ==='Cort');
        presentation.classList.add('cort');
        section.classList.add('cort');
        showBass(result);
    }
}

/* Fonction qui gere tout ce qui est affichage */
function showBass(bass){
    for(var i =0; i < bass.length; i++){
        // Création des balises html
        var myImage = document.createElement('div');
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
        myImage.classList.add('myImage');
        libelle.classList.add('nom');
        infos.classList.add('infos');
        infoPrix.classList.add('infoPrix')
        prix.classList.add('prix');
        prixInitial.classList.add('prixInitial');
        infoDispo.classList.add('infoDispo');
        stock.classList.add('stock');
        ref.classList.add('reference');

        // contenu des balises
        myImage.style.backgroundImage = "url('"+ bass[i].image + "')";
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
        myArticle.appendChild(myImage);
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