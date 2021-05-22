var storedBass = []

/* window.addEventListener('storage', () => {
    contenuPanier = [0,0,0,0,0,0];
    console.log("YOLO")
    document.queryselector('main').reset()
    contentPanier(contenuPanier)
    loadArticle(storedBass, contenuPanier)
}); */

storeBass()

function storeBass(){
    for(let i in localStorage){
        if(localStorage.hasOwnProperty(i)){
            storedBass.push(JSON.parse(localStorage.getItem(i))) 
        }   
    }
}

loadArticle(storedBass)

const poubelle = document.getElementsByClassName('poubelle')

for (let i = 0; i < poubelle.length; i++){
    poubelle[i].addEventListener('click', () => {
        localStorage.clear()
        window.location.reload()
    });
}


/* request.onload = function (){
    var data = request.response; 
    contentPanier(contenuPanier);
    loadArticle(data, contenuPanier);
    
    const poubelle = document.getElementsByClassName('poubelle')
    console.log(poubelle)
    for (let i = 0; i < poubelle.length; i++){
        poubelle[i].addEventListener('click', () => {
            localStorage.clear()
        });
    }
} */

function loadArticle(storedBass){
    const main = document.querySelector('main');
    if(localStorage.length===0){
        var p = document.createElement('p')
        p.innerHTML = 'Panier Vide'
        main.appendChild(p)
    }else{
        for(let i in storedBass){
            if (storedBass[i] != 0){
                var myArticle = document.createElement('article');
                myArticle.classList = storedBass[i]["reference"]

                var img = document.createElement('img');
                img.setAttribute('src', storedBass[i].image);

                var h2 = document.createElement('h2')
                h2.innerHTML = storedBass[i].nom

                var ref = document.createElement('span')
                ref.innerHTML = storedBass[i].reference

                var qte = document.createElement('span')
                qte.innerHTML = 'qté'

                var prix = document.createElement('span')
                prix.innerHTML = 'Prix'

                var moins = document.createElement('span')
                moins.classList = "moins"
                moins.innerHTML = '-'
                
                var quantite = document.createElement('span')
                quantite.innerHTML = storedBass[i].qte

                var plus = document.createElement('span')
                plus.classList = "plus"
                plus.innerHTML = '+'

                var prixArticle = document.createElement('span')
                prixArticle.innerHTML = storedBass[i].prix * storedBass[i].qte

                var poubelle = document.createElement('img')
                poubelle.classList = "poubelle"
            
                poubelle.setAttribute('src', "./pics/trash.svg");

                var div1 = document.createElement('div')
                var div2 = document.createElement('div')
                var div3 = document.createElement('div')
                var div4 = document.createElement('div')
                var div5 = document.createElement('div')
                var div6 = document.createElement('div')
                var div7 = document.createElement('div')

                div1.appendChild(img)

                div2.appendChild(h2)
                div2.appendChild(ref)

                div3.appendChild(qte)
                div3.appendChild(prix)

                div4.appendChild(moins)
                div4.appendChild(quantite)
                div4.appendChild(plus)
                div4.appendChild(prixArticle)
                div4.appendChild(poubelle)

                div5.appendChild(div3)
                div5.appendChild(div4)

                div6.appendChild(div2)
                div6.appendChild(div5)

                myArticle.appendChild(div1)
                myArticle.appendChild(div6)

                main.appendChild(myArticle);  
            }
        }
    }
}

