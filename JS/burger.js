let StoredBass = []
let contenu = 0
const panier = document.getElementsByClassName('panier')
storeBass()

const burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
});

function storeBass(){
    for(let i in localStorage){
        if(localStorage.hasOwnProperty(i)){
            StoredBass.push(JSON.parse(localStorage.getItem(i))) 
        }   
    }
    contenu = contenuPanier(StoredBass, contenu)
}

function contenuPanier(StoredBass, contenu){
    for(let i in StoredBass){
        contenu = contenu + StoredBass[i].qte
    }
    if (contenu != 0){
        panier[0].innerHTML = "Panier " + '<img class="iconPanier" src="./pics/panier.svg" alt="panier"> ' + contenu
        panier[1].innerHTML = "Panier " + '<img class="iconPanier" src="./pics/panier.svg" alt="panier"> ' + contenu
    }
    return contenu
}

const bouton = document.getElementById('bouton_panier');
if (bouton != null){
    bouton.addEventListener('click', () => {
        console.log(contenu)
        contenu ++
        panier[0].innerHTML = "Panier " + '<img class="iconPanier" src="./pics/panier.svg" alt="panier"> ' + contenu
        panier[1].innerHTML = "Panier " + '<img class="iconPanier" src="./pics/panier.svg" alt="panier"> ' + contenu
    });
}
