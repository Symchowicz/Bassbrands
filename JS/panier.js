var storedBass = []

storeBass()
loadArticle(storedBass)
setButton(storedBass)

function storeBass(){
    for(let i in localStorage){
        if(localStorage.hasOwnProperty(i)){
            storedBass.push(JSON.parse(localStorage.getItem(i))) 
        }   
    }
}

function loadArticle(storedBass){
    const main = document.querySelector('main');
    if(localStorage.length===0){
        var p = document.createElement('p')
        p.innerHTML = 'Panier Vide'
        main.appendChild(p)
    }else{
        var nombreArticle = 0
        var prixCommande = 0
        for(let i in storedBass){
            if (storedBass[i] != 0){
                var myArticle = document.createElement('article');

                var img = document.createElement('img');
                img.setAttribute('src', storedBass[i].image);

                var h2 = document.createElement('h2')
                h2.innerHTML = storedBass[i].nom

                var ref = document.createElement('span')
                ref.innerHTML = storedBass[i].reference

                var qte = document.createElement('span')
                qte.innerHTML = 'qtÃ©'

                var prix = document.createElement('span')
                prix.innerHTML = 'Prix'

                var moins = document.createElement('span')
                moins.id = "moins" + i
                moins.innerHTML = '-'
                
                var quantite = document.createElement('span')
                quantite.innerHTML = storedBass[i].qte

                var plus = document.createElement('span')
                plus.id = "plus" + i
                plus.innerHTML = '+'

                var prixArticle = document.createElement('span')
                prixArticle.innerHTML = storedBass[i].prix * storedBass[i].qte + "€"

                const poubelle = document.createElement('img')
                poubelle.id = "poubelle" + i
            
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

                div7.appendChild(moins)
                div7.appendChild(quantite)
                div7.appendChild(plus)
                div7.appendChild(prixArticle)
                div4.appendChild(div7)
                div4.appendChild(poubelle)

                div5.appendChild(div3)
                div5.appendChild(div4)

                div6.appendChild(div2)
                div6.appendChild(div5)

                myArticle.appendChild(div1)
                myArticle.appendChild(div6)

                main.appendChild(myArticle);   
                nombreArticle = nombreArticle + storedBass[i].qte
                prixCommande = prixCommande + parseInt(storedBass[i].prix) * storedBass[i].qte
                console.log(prixCommande)

            }
        }
        var ligne = document.createElement('div')
        ligne.id = "ligne"
        var qteTotal = document.createElement('div')
        var prixTotal = document.createElement('div')
        prixTotal.innerHTML = "Prix Total : " + prixCommande + "€"
        var boutonCommande = document.createElement('div')
        boutonCommande.innerHTML = "Passer la commande"
        boutonCommande.id = 'boutonCommande'
        main.appendChild(ligne);
        main.appendChild(qteTotal);
        main.appendChild(prixTotal)
        main.appendChild(boutonCommande)

        /* Le formulaire : */
        var section = document.createElement('section')
        var form = document.createElement('form')
        form.setAttribute('methode', "POST");
        form.setAttribute('action', "don'tknow_j'improMDR.html");
        form.id = 'Formulaire'
        

        /* Section Nom */
        var divNom = document.createElement('div')
        var labelNom = document.createElement('label')
        labelNom.setAttribute('for', "nom");
        labelNom.innerHTML = 'Nom : '
        var InputLabelNom = document.createElement('input')
        InputLabelNom.setAttribute('type', "text");
        InputLabelNom.setAttribute('name', "nom");
        InputLabelNom.setAttribute('placeholder', "Votre nom");
        divNom.appendChild(labelNom)
        divNom.appendChild(InputLabelNom)
        form.appendChild(divNom)

        /* Section Prenom */
        var divPrenom = document.createElement('div')
        var labelPrenom = document.createElement('label')
        labelPrenom.setAttribute('for', "prenom");
        labelPrenom.innerHTML = 'Prénom : '
        var InputlabelPrenom = document.createElement('input')
        InputlabelPrenom.setAttribute('type', "text");
        InputlabelPrenom.setAttribute('name', "prenom");
        InputlabelPrenom.setAttribute('placeholder', "Votre Prénom");
        divPrenom.appendChild(labelPrenom)
        divPrenom.appendChild(InputlabelPrenom)
        form.appendChild(divPrenom)

        /* Section Adresse */
        var divAdresse = document.createElement('div')
        var labelAdresse = document.createElement('label')
        labelAdresse.setAttribute('for', "adresse");
        labelAdresse.innerHTML = 'Adresse : '
        var InputlabelAdresse = document.createElement('input')
        InputlabelAdresse.setAttribute('type', "text");
        InputlabelAdresse.setAttribute('name', "adresse");
        InputlabelAdresse.setAttribute('placeholder', "Votre Adresse");
        divAdresse.appendChild(labelAdresse)
        divAdresse.appendChild(InputlabelAdresse)
        form.appendChild(divAdresse)

        /* Section Code Postal */
        var divCodeP = document.createElement('div')
        var labelCodeP = document.createElement('label')
        labelCodeP.setAttribute('for', "codeP");
        labelCodeP.innerHTML = 'Code Postal : '
        var InputlabelCodeP = document.createElement('input')
        InputlabelCodeP.setAttribute('type', "text");
        InputlabelCodeP.setAttribute('name', "codeP");
        InputlabelCodeP.setAttribute('placeholder', "Code Postal");
        divCodeP.appendChild(labelCodeP)
        divCodeP.appendChild(InputlabelCodeP)
        form.appendChild(divCodeP)

        /* Section Ville */
        var divVille = document.createElement('div')
        var labelVille = document.createElement('label')
        labelVille.setAttribute('for', "ville");
        labelVille.innerHTML = 'Ville : '
        var InputlabelVille = document.createElement('input')
        InputlabelVille.setAttribute('type', "text");
        InputlabelVille.setAttribute('name', "ville");
        InputlabelVille.setAttribute('placeholder', "Code Postal");
        divVille.appendChild(labelVille)
        divVille.appendChild(InputlabelVille)
        form.appendChild(divVille)

        /* Section Telephone */
        var divTelephone = document.createElement('div')
        var labelTelephone = document.createElement('label')
        labelTelephone.setAttribute('for', "telephone");
        labelTelephone.innerHTML = 'Téléphone : '
        var InputlabelTelephone = document.createElement('input')
        InputlabelTelephone.setAttribute('type', "text");
        InputlabelTelephone.setAttribute('name', "telephone");
        InputlabelTelephone.setAttribute('placeholder', "Votre téléphone");
        divTelephone.appendChild(labelTelephone)
        divTelephone.appendChild(InputlabelTelephone)
        form.appendChild(divTelephone)

        section.appendChild(form)
        main.appendChild(section)
    }
}

function setButton(storedBass){
    for(let i = 0; i < 6; i++){
        switch(i){
            case 0:
                const poubelle0 = document.getElementById('poubelle' + i)
                const moins0 = document.getElementById('moins' + i)
                const plus0 = document.getElementById('plus' + i)
                const boutonCommande = document.getElementById('boutonCommande')
                if(poubelle0 != null){
                    moins0.addEventListener('click', () => { 
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        }
                        window.location.reload()
                    });
                    plus0.addEventListener('click', () => {  
                        storedBass[i].qte++
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    poubelle0.addEventListener('click', () => {  
                        localStorage.removeItem(storedBass[i].reference)
                        window.location.reload()
                    });
                    boutonCommande.addEventListener('click', () => {  
                        console.log('click')
                    });
                }
                break;
            case 1:
                const poubelle1 = document.getElementById('poubelle' + i)
                const moins1 = document.getElementById('moins' + i)
                const plus1 = document.getElementById('plus' + i)
                if(poubelle1 != null){
                    moins1.addEventListener('click', () => {
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        }
                        window.location.reload()
                    });
                    plus1.addEventListener('click', () => {
                        storedBass[i].qte++
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    poubelle1.addEventListener('click', () => {  
                        localStorage.removeItem(storedBass[i].reference)
                        window.location.reload()
                    });
                }
                break;
            case 2:   
                const poubelle2 = document.getElementById('poubelle' + i)
                const moins2 = document.getElementById('moins' + i)
                const plus2 = document.getElementById('plus' + i)
                if(poubelle2 != null){
                    moins2.addEventListener('click', () => {  
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        }
                        window.location.reload()
                    });
                    plus2.addEventListener('click', () => { 
                        storedBass[i].qte++ 
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    poubelle2.addEventListener('click', () => {   
                        localStorage.removeItem(storedBass[i].reference)
                        window.location.reload() 
                    });
                }
                break;
            case 3:
                const poubelle3 = document.getElementById('poubelle' + i)
                const moins3 = document.getElementById('moins' + i)
                const plus3 = document.getElementById('plus' + i)
                if(poubelle3 != null){
                    moins3.addEventListener('click', () => {  
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        }
                        window.location.reload()
                    });
                    plus3.addEventListener('click', () => {  
                        storedBass[i].qte++
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    if(poubelle3 != null){    
                        poubelle3.addEventListener('click', () => {
                            localStorage.removeItem(storedBass[i].reference)
                            window.location.reload()
                        });
                    }
                }
                break;
            case 4:
                const poubelle4 = document.getElementById('poubelle' + i)
                const moins4 = document.getElementById('moins' + i)
                const plus4 = document.getElementById('plus' + i)
                if(poubelle4 != null){
                    moins4.addEventListener('click', () => {
                        storedBass[i].qte--  
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        }
                        window.location.reload()
                    });
                    plus4.addEventListener('click', () => {  
                        storedBass[i].qte++
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    if(poubelle4 != null){
                        poubelle4.addEventListener('click', () => {  
                            localStorage.removeItem(storedBass[i].reference)
                            window.location.reload()
                        });
                    }
                }
                break; 
            case 5: 
                const poubelle5 = document.getElementById('poubelle' + i)
                const moins5 = document.getElementById('moins' + i)
                const plus5 = document.getElementById('plus' + i)
                if(poubelle5 != null){
                    moins5.addEventListener('click', () => {  
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        }
                        window.location.reload()
                    });
                    plus5.addEventListener('click', () => {  
                        storedBass[i].qte++
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    poubelle5.addEventListener('click', () => { 
                        localStorage.removeItem(storedBass[i].reference)
                        window.location.reload()
                    });
                }
                break;
            default:
                console.log("Réf indispo")           
        }          
    }
}