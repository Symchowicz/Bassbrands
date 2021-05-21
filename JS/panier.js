var i = 0
var contenuPanier = [0,0,0,0,0,0];
while(localStorage.getItem(i) != null){
    switch(i >= 0){
        case (localStorage.getItem(i) == "019-9012-781"):
            contenuPanier[0]++ 
            break;
        case (localStorage.getItem(i) == "019-9012-773"):
            contenuPanier[1]++ 
            break;
        case(localStorage.getItem(i) == "014-9612-354"):
            contenuPanier[2]++ 
            break;
        case(localStorage.getItem(i) == "GB34JJBK"):
            contenuPanier[3]++ 
            break;
        case(localStorage.getItem(i) == "GB64JJNAT"):
            contenuPanier[4]++
            break; 
        case(localStorage.getItem(i) == "GB74GIGLPB"):
            contenuPanier[5]++
            break;
        default:
            console.log("Réf indispo")           
    }
    i++
}

let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
let request = new XMLHttpRequest();
request.open('GET',requestUrl);

request.responseType = 'json';
request.send();
request.onload = function (){
    var data = request.response;
    loadArticle(data, contenuPanier);
}

function loadArticle(jsonObj, contenuPanier){
    const main = document.querySelector('main');
    console.log(main)
    
    for(let i = 0; i < 6; i++){
        
        if (contenuPanier[i] != 0){

            var myArticle = document.createElement('article');

            var img = document.createElement('img');
            img.setAttribute('src', jsonObj[i].image);

            var h2 = document.createElement('h2')
            h2.innerHTML = jsonObj[i].nom

            var ref = document.createElement('span')
            ref.innerHTML = jsonObj[i].reference

            var qte = document.createElement('span')
            qte.innerHTML = 'qté'

            var prix = document.createElement('span')
            prix.innerHTML = 'Prix'

            var moins = document.createElement('span')
            moins.innerHTML = '-'

            var quantite = document.createElement('span')
            quantite.innerHTML = contenuPanier[i]

            var plus = document.createElement('span')
            plus.innerHTML = '+'

            var prixArticle = document.createElement('span')
            prixArticle.innerHTML = jsonObj[i].prix * contenuPanier[i]

            var poubelle = document.createElement('img')
            poubelle.setAttribute('src', "./pics/trash.svg");

            myArticle.appendChild(img);
            myArticle.appendChild(h2);
            myArticle.appendChild(ref);
            myArticle.appendChild(qte);
            myArticle.appendChild(prix);
            myArticle.appendChild(moins);
            myArticle.appendChild(quantite);
            myArticle.appendChild(plus);
            myArticle.appendChild(prixArticle);
            myArticle.appendChild(poubelle);
            main.appendChild(myArticle);  
        }
    }
    
}

