/*Sources :
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*
* */

let bestseller = document.querySelector('.produit');

let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
let request = new XMLHttpRequest();
request.open('GET',requestUrl);

request.responseType = 'json';
request.send();

request.onload = function (){
    console.log('load');
    let data = request.response;
    Article(data);
}

function getMaxTableau(tableauNumerique) {
    return Math.max.apply(null, tableauNumerique);
}

function Article(jsonObj){
    let listeNbVente = [];
    for(let i=0; i <= 5; i++){
        listeNbVente.push(jsonObj[i]['nbVente']);
    }

    let max1 = 0;
    let max2 = 0;
    let max3 = 0;
    max1 = getMaxTableau(listeNbVente);
    listeNbVente = listeNbVente.filter(item => item !== max1);

    max2 = getMaxTableau(listeNbVente);
    listeNbVente = listeNbVente.filter(item => item !== max2);

    max3 = getMaxTableau(listeNbVente);
    listeNbVente = listeNbVente.filter(item => item !== max3);

    listeNbVente = [];
    for(let i=0; i <= 5; i++){
        listeNbVente.push(jsonObj[i]['nbVente']);
    }

    listeMax = [max1,max2,max3];
    console.log(listeMax);
    for(let i =0; i < jsonObj.length; i++){
        let myArticle = document.createElement('article');
        let myLink = document.createElement('a');
        let myImage = document.createElement('div');
        let libelle = document.createElement('h2');
        let infos = document.createElement('div');
        let infoPrix = document.createElement('div');
        let prix = document.createElement('p');
        let prixInitial = document.createElement('p');
        let infoDispo = document.createElement('div');
        let stock = document.createElement('p');
        let ref = document.createElement('p');

        //Attribution de class
        myImage.classList.add('myImage');
        libelle.classList.add('nom');
        infos.classList.add('infos');
        infoPrix.classList.add('infoPrix');
        prix.classList.add('prix');
        prixInitial.classList.add('prixInitial');
        infoDispo.classList.add('infoDispo');
        stock.classList.add('stock');
        ref.classList.add('reference');

        index = listeNbVente.indexOf(listeMax[i]);
        console.log(jsonObj.length);
        // contenu des balises
        if(index !== -1){
            myLink.setAttribute('href', jsonObj[index].marque +i+".html");
            myImage.style.backgroundImage = "url('"+ jsonObj[index].image + "')";
            libelle.textContent = jsonObj[index].nom;
            prix.textContent = jsonObj[index].prix + '€';
            prixInitial.textContent = 'au lieu de '+ jsonObj[index]['prix initial'] + '€';
            if (jsonObj[index].disponible){
                stock.textContent = 'En stock';
            }else{
                stock.textContent = "Rupture de stock";
            }
            ref.textContent = "Réf : " + jsonObj[index].reference;

            myLink.appendChild(myImage);
            myLink.appendChild(myImage);
            myLink.appendChild(libelle);
            infoPrix.appendChild(prix);
            infoPrix.appendChild(prixInitial);
            infoDispo.appendChild(stock);
            infoDispo.appendChild(ref);
            infos.appendChild(infoPrix);
            infos.appendChild(infoDispo);
            myLink.appendChild(infos);
            myArticle.appendChild(myLink);
            bestseller.appendChild(myArticle);
        }

    }
}

