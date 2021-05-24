var bestseller = document.querySelector('.produit');

let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
let request = new XMLHttpRequest();
request.open('GET',requestUrl);

request.responseType = 'json';
request.send();

request.onload = function (){
    var data = request.response;
    Article(data)
}

function getMaxTableau(tableauNumérique) {
    return Math.max.apply(null, tableauNumérique);
}

function Article(jsonObj){
    var listeNbVente = []
    for(let i=0; i <= 5; i++){
        listeNbVente.push(jsonObj[i]['nbVente'])
    }

    var max1 = 0
    var max2 = 0
    var max3 = 0
    max1 = getMaxTableau(listeNbVente)      
    listeNbVente = listeNbVente.filter(item => item !== max1)

    max2 = getMaxTableau(listeNbVente)      
    listeNbVente = listeNbVente.filter(item => item !== max2)

    max3 = getMaxTableau(listeNbVente)      
    listeNbVente = listeNbVente.filter(item => item !== max3)

    listeNbVente = []
    for(let i=0; i <= 5; i++){
        listeNbVente.push(jsonObj[i]['nbVente'])
    }

    listeMax = [max1,max2,max3]
    for(var i =0; i < jsonObj.length; i++){
        var myArticle = document.createElement('article');
        var myLink = document.createElement('a');
        var myImage = document.createElement('div');
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

        index = listeNbVente.indexOf(listeMax[i])
        // contenu des balises
        myLink.setAttribute('href', jsonObj[index].marque+i+".html");
        console.log(myLink);
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

        myLink.appendChild(myImage)
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

