var bestseller = document.querySelector('.bestseller');

let requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';
let request = new XMLHttpRequest();
request.open('GET',requestUrl);

request.responseType = 'json';
request.send();

request.onload = function (){
    var data = request.response;
    Article(data)
    const article1 = document.querySelector('.article1')
    console.log(article1)
    article1.addEventListener('click', () => {
        /* window.location.replace('index.html') ; */
        console.log('click')
    });

    const article2 = document.querySelector('.article2')
    article2.addEventListener('click', () => {
        /* window.location.replace('index.html'); */
    });

    const article3 = document.querySelector('.article3')
    article3.addEventListener('click', () => {
        /* window.location.replace('index.html'); */
    });
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
    for(var i =0; i < 3; i++){
        var myArticle = document.createElement('article');
        myArticle.classList.add('article'+(i+1)) ;
        var img = document.createElement('img');
        index = listeNbVente.indexOf(listeMax[i])
        img.setAttribute('src', jsonObj[index].image);
        myArticle.appendChild(img);
        bestseller.appendChild(myArticle);     
    }
}

