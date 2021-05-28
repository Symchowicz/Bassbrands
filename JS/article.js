const sectionChemin = document.querySelector(".chemin");
const sectionDesc = document.querySelector(".descArticle");
const sectionDetails = document.querySelector(".details");


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
        loadCaracteristique(bassArticle)
        const bouton = document.querySelector('.btnPanier');
        bouton.addEventListener('click', () => {
            //TODO Systéme de clé incrementation
            let azs = localStorage.getItem(bassArticle.reference)
            if(azs){
                let obj = JSON.parse(azs);
                obj.qte++;
                localStorage.removeItem(bassArticle.reference);
                localStorage.setItem(bassArticle.reference, JSON.stringify(obj));
            }else{
                localStorage.setItem(bassArticle.reference, JSON.stringify(bassArticle));
            }
        });
        const voirPlus = document.querySelector('.voirPlus');
        voirPlus.addEventListener('click', ()=>{
            if (sectionDetails.style.display === "none") {
                voirPlus.textContent = "Voir moins";
                sectionDetails.style.display = "block";
            } else {
                voirPlus.textContent = "Voir les caractéristiques";
                sectionDetails.style.display = "none";
            }
        });

    }
}


function loadArticle(jsonObj){
    let cheminBass = document.createElement('a');
    let imgBass = document.createElement('img');
    let articleBass = document.createElement('article');
    let divDesc = document.createElement('div');
    let nomBass = document.createElement('h1');
    let titre = document.createElement('h2');
    let description = document.createElement('p');
    let divPrixBtn = document.createElement('div');
    let prix = document.createElement('span');
    let button = document.createElement('button');
    let iconPanier = document.createElement('img');
    let textBtn = document.createElement('span');

    imgBass.classList.add('imgBass');
    divDesc.classList.add('divDesc');
    nomBass.classList.add('titre');
    titre.classList.add('titre');
    divPrixBtn.classList.add('divPrixBtn');
    button.classList.add('btnPanier');


    cheminBass.setAttribute('href', window.location );
    imgBass.setAttribute('src', jsonObj.image);
    iconPanier.setAttribute('src', './pics/panier_noir.svg');
    cheminBass.textContent = jsonObj.nom;
    nomBass.textContent = jsonObj.nom;
    titre.textContent = "Description";
    description.textContent = jsonObj.description;
    prix.textContent = jsonObj.prix+ "au lieu de "+ jsonObj['prix initial']+"€";
    textBtn.textContent = "Ajouter";


    sectionChemin.appendChild(cheminBass);
    sectionDesc.appendChild(imgBass);
    sectionDesc.appendChild(articleBass);
    divDesc.appendChild(nomBass);
    divDesc.appendChild(titre);
    divDesc.appendChild(description);
    articleBass.appendChild(divDesc);
    divPrixBtn.appendChild(prix);
    button.appendChild(textBtn);
    button.appendChild(iconPanier);
    divPrixBtn.appendChild(button);
    articleBass.appendChild(divPrixBtn);

}

function loadCaracteristique(jsonObj){
    let titreCarac = document.createElement('h1');
    let divArticleCarac = document.createElement('div');
    let article1 = document.createElement('article');
    let article2 = document.createElement('article');
    let corps = document.createElement('span');
    let manche = document.createElement('span');
    let touche = document.createElement('span');
    let nbFrettes = document.createElement('span');
    let chevalet = document.createElement('span');
    let mecanique = document.createElement('span');
    let micro = document.createElement('span');

    divArticleCarac.classList.add('divArticleCarac');
    article1.classList.add('article1');
    article2.classList.add('article2');
    titreCarac.textContent = "Caractéristiques :";
    corps.textContent ="Corps :"+ jsonObj.corps;
    manche.textContent ="Manche :"+ jsonObj.manche;
    touche.textContent ="Touche :"+ jsonObj.touche;
    nbFrettes.textContent ="Nombre de frettes :"+ jsonObj['nombre de frettes'];
    chevalet.textContent ="Chevalet :"+ jsonObj.chevalet;
    mecanique.textContent ="Mécanique :"+ jsonObj.mecanique;
    micro.textContent ="Micro :"+ jsonObj.micro;

    sectionDetails.appendChild(titreCarac);

    if(jsonObj.marque ==="Fender"){
        let btnCommande = document.createElement('span');
        let controle = document.createElement('span');
        let orientation = document.createElement('span');

        btnCommande.textContent ="Bouton de commande :"+ jsonObj["bouton de commande"];
        controle.textContent ="Controle :"+ jsonObj.controle;
        orientation.textContent ="Orientation :"+ jsonObj.orientation;

        article1.appendChild(corps);
        article1.appendChild(manche);
        article1.appendChild(touche);
        article1.appendChild(nbFrettes);
        article1.appendChild(chevalet);
        article2.appendChild(mecanique);
        article2.appendChild(micro);
        article2.appendChild(btnCommande);
        article2.appendChild(controle);
        article2.appendChild(orientation);
        divArticleCarac.appendChild(article1);
        divArticleCarac.appendChild(article2);
        sectionDetails.appendChild(divArticleCarac);
    }
}