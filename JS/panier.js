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
                quantite.id = "quantite" + i
                quantite.innerHTML = storedBass[i].qte

                var plus = document.createElement('span')
                plus.id = "plus" + i
                plus.innerHTML = '+'

                var prixArticle = document.createElement('span')
                prixArticle.id = "prixArticle" + i
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

            }
        }
        var ligne = document.createElement('div')
        ligne.id = "ligne"
        var qteTotal = document.createElement('div')
        var prixTotal = document.createElement('div')
        prixTotal.innerHTML = "Prix Total : " + prixCommande + "€"
        var sectionBoutonPanier = document.createElement('section')
        var boutonreinitialiser = document.createElement('div')
        boutonreinitialiser.innerHTML = "Reinitialiser le panier"
        boutonreinitialiser.id = 'reinitialiser'
        var boutonCommande = document.createElement('div')
        boutonCommande.innerHTML = "Passer la commande"
        boutonCommande.id = 'boutonCommande'
        sectionBoutonPanier.appendChild(boutonreinitialiser)
        sectionBoutonPanier.appendChild(boutonCommande)
        main.appendChild(ligne);
        main.appendChild(qteTotal);
        main.appendChild(prixTotal)
        main.appendChild(sectionBoutonPanier)

    /* Le formulaire : */
        var section = document.createElement('section')
        section.id = 'formulaireOff'
        var SectionNomPrenom = document.createElement('section')
        SectionNomPrenom.id = 'SectionNomPrenom'
        var SectionAdresseCp = document.createElement('section')
        SectionAdresseCp.id = 'AdresseCp'
        var SectionVilleTel = document.createElement('section')
        SectionVilleTel.id = 'VilleTel'
        var form = document.createElement('form')
        form.setAttribute('methode', "POST");
        form.setAttribute('action', "don'tknow_j'improMDR.html");

        /* Coordonnée */
        var coordonnée = document.createElement('div')
        coordonnée.innerHTML = 'Livraison :'
        form.appendChild(coordonnée)

        /* Section Nom */
        var divNom = document.createElement('div')
        var labelNom = document.createElement('label')
        labelNom.setAttribute('for', "nom");
        labelNom.innerHTML = 'Nom : '
        var InputLabelNom = document.createElement('input')
        InputLabelNom.setAttribute('type', "text");
        InputLabelNom.setAttribute('name', "nom");
        InputLabelNom.setAttribute('placeholder', "Votre nom");
        InputLabelNom.setAttribute('id', "nom")
        divNom.appendChild(labelNom)
        divNom.appendChild(InputLabelNom)
        SectionNomPrenom.appendChild(divNom)

        /* Section Prenom */
        var divPrenom = document.createElement('div')
        var labelPrenom = document.createElement('label')
        labelPrenom.setAttribute('for', "prenom");
        labelPrenom.innerHTML = 'Prénom : '
        var InputlabelPrenom = document.createElement('input')
        InputlabelPrenom.setAttribute('type', "text");
        InputlabelPrenom.setAttribute('name', "prenom");
        InputlabelPrenom.setAttribute('placeholder', "Votre Prénom");
        InputlabelPrenom.setAttribute('id', "prenom")
        divPrenom.appendChild(labelPrenom)
        divPrenom.appendChild(InputlabelPrenom)
        SectionNomPrenom.appendChild(divPrenom)
        form.appendChild(SectionNomPrenom)

        /* Section Adresse */
        var divAdresse = document.createElement('div')
        var labelAdresse = document.createElement('label')
        labelAdresse.setAttribute('for', "adresse");
        labelAdresse.innerHTML = 'Adresse : '
        var InputlabelAdresse = document.createElement('input')
        InputlabelAdresse.setAttribute('type', "text");
        InputlabelAdresse.setAttribute('name', "adresse");
        InputlabelAdresse.setAttribute('placeholder', "Votre Adresse");
        InputlabelAdresse.setAttribute('id', "adresse");
        divAdresse.appendChild(labelAdresse)
        divAdresse.appendChild(InputlabelAdresse)
        SectionAdresseCp.appendChild(divAdresse)

        /* Section Code Postal */
        var divCodeP = document.createElement('div')
        var labelCodeP = document.createElement('label')
        labelCodeP.setAttribute('for', "codeP");
        labelCodeP.innerHTML = 'Code Postal : '
        var InputlabelCodeP = document.createElement('input')
        InputlabelCodeP.setAttribute('type', "text");
        InputlabelCodeP.setAttribute('name', "codeP");
        InputlabelCodeP.setAttribute('placeholder', "Code Postal");
        InputlabelCodeP.setAttribute('id', "codeP");
        divCodeP.appendChild(labelCodeP)
        divCodeP.appendChild(InputlabelCodeP)
        SectionAdresseCp.appendChild(divCodeP)
        form.appendChild(SectionAdresseCp)

        /* Section Ville */
        var divVille = document.createElement('div')
        var labelVille = document.createElement('label')
        labelVille.setAttribute('for', "ville");
        labelVille.innerHTML = 'Ville : '
        var InputlabelVille = document.createElement('input')
        InputlabelVille.setAttribute('type', "text");
        InputlabelVille.setAttribute('name', "ville");
        InputlabelVille.setAttribute('placeholder', "Paris,Lyon...");
        InputlabelVille.setAttribute('id', "ville");
        divVille.appendChild(labelVille)
        divVille.appendChild(InputlabelVille)
        SectionVilleTel.appendChild(divVille)

        /* Section Telephone */
        var divTelephone = document.createElement('div')
        var labelTelephone = document.createElement('label')
        labelTelephone.setAttribute('for', "telephone");
        labelTelephone.innerHTML = 'Téléphone : '
        var InputlabelTelephone = document.createElement('input')
        InputlabelTelephone.setAttribute('type', "text");
        InputlabelTelephone.setAttribute('name', "telephone");
        InputlabelTelephone.setAttribute('placeholder', "Votre téléphone");
        InputlabelTelephone.setAttribute('id', "telephone");
        divTelephone.appendChild(labelTelephone)
        divTelephone.appendChild(InputlabelTelephone)
        SectionVilleTel.appendChild(divTelephone)
        form.appendChild(SectionVilleTel)

        /* Section Choix Livraison */
        var selectLivraison = document.createElement('select')
        selectLivraison.setAttribute('id', 'select')
        var option1 = document.createElement('option')
        option1.setAttribute('value', 5);
        option1.innerHTML = 'Livraison Standard : 5€'
        var option2 = document.createElement('option')
        option2.setAttribute('value', 15);
        option2.innerHTML = 'Livraison Express : 15€'
        selectLivraison.appendChild(option1)
        selectLivraison.appendChild(option2)
        form.appendChild(selectLivraison)

        /* Section Recapitulatif */
        var sectionRecapitulatif = document.createElement('section')
        var recapitulatif = document.createElement('div')
        recapitulatif.innerHTML = 'Récapitulatif :'

        var prixAvantLivraison = document.createElement('div')
        prixAvantLivraison.setAttribute('data-value', prixCommande)
        prixAvantLivraison.setAttribute('id', 'prixAvantLivraison')
        prixAvantLivraison.innerHTML = 'Commande : ' + prixCommande + '€'

        var prixLivraison = document.createElement('div')
        prixLivraison.setAttribute('id', 'prixLivraison')
        prixLivraison.innerHTML = 'Livraison : ' + selectLivraison.options[selectLivraison.selectedIndex].value + '€'

        var PrixAvecLivraison = document.createElement('div')
        PrixAvecLivraison.setAttribute('id', 'prixAvecLivraison')
        console.log(prixCommande)
        console.log(parseInt(selectLivraison.options[selectLivraison.selectedIndex].value))
        PrixAvecLivraison.innerHTML = 'Prix Total : ' + (parseInt(prixCommande) + parseInt(selectLivraison.options[selectLivraison.selectedIndex].value)) + '€'

        sectionRecapitulatif.appendChild(recapitulatif)
        sectionRecapitulatif.appendChild(prixAvantLivraison)
        sectionRecapitulatif.appendChild(prixLivraison)
        sectionRecapitulatif.appendChild(PrixAvecLivraison)
        form.appendChild(sectionRecapitulatif)
        
        /* Section Bouton */
        var sectionBouton = document.createElement('section')
        sectionBouton.setAttribute('id', "SectionBouton");
        var boutonRetour = document.createElement('div')
        boutonRetour.innerHTML = 'retour'
        boutonRetour.setAttribute('id', "retour");
        var boutonPaiement = document.createElement('div')
        boutonPaiement.innerHTML = 'Paiement'
        boutonPaiement.setAttribute('id', "paiement");
        sectionBouton.appendChild(boutonRetour)
        sectionBouton.appendChild(boutonPaiement)
        form.appendChild(sectionBouton)

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
                const quantite0 = document.getElementById('quantite0')
                const prixArticle0 = document.getElementById("prixArticle0")
                if(poubelle0 != null){
                    const boutonCommande = document.getElementById('boutonCommande')
                    const formulaire = document.getElementById('formulaireOff')
                    const retour = document.getElementById('retour')
                    const paiement = document.getElementById('paiement')
                    const selectLivraison = document.querySelector('select')
                    const prixLivraison = document.getElementById('prixLivraison')
                    let prixAvantLivraison = document.getElementById('prixAvantLivraison').getAttribute('data-value')
                    const prixAvecLivraison = document.getElementById('prixAvecLivraison')
                    const nom = document.getElementById('nom')
                    const prenom = document.getElementById('prenom')
                    const adresse = document.getElementById('adresse')
                    const codeP = document.getElementById('codeP')
                    const ville = document.getElementById('ville')
                    const telephone = document.getElementById('telephone')
                    const reinitialiser = document.getElementById('reinitialiser')
                    moins0.addEventListener('click', () => { 
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                            window.location.reload()
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                            window.location.reload()
                        }
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
                    reinitialiser.addEventListener('click', () => {
                        localStorage.clear()
                        window.location.reload()
                    });
                    boutonCommande.addEventListener('click', () => {  
                        formulaire.id = 'formulaireOn'   
                        formulaire.style.display = 'block'     
                    });
                    retour.addEventListener('click', () => {  
                        formulaire.id = 'formulaireoff'
                        formulaire.style.display = 'none'
                    });
                    paiement.addEventListener('click', () => {  
                        console.log('click')
                        var form = [{
                            'nom': nom.value, 
                            'prenom': prenom.value,
                            'adresse': adresse.value, 
                            'codeP': codeP.value, 
                            'ville': ville.value, 
                            'telephone': telephone.value, 
                            'livraison': parseInt(selectLivraison.options[selectLivraison.selectedIndex].value)
                        }]

                        localStorage.setItem('Commande', JSON.stringify(form))
                        var resultat = JSON.stringify(localStorage)
                        resultat = JSON.parse(resultat)
                        /* on a converti le localstorage en JSON , on retrouve donc dans le localstorage les infos de livraison et le contenu du panier */
                        document.location.href='erreur_404.html'
                    });
                    selectLivraison.addEventListener('click', () => {
                        prixAvecLivraison.innerHTML = 'Prix Total : ' + (parseInt(prixAvantLivraison) + parseInt(selectLivraison.options[selectLivraison.selectedIndex].value)) + '€'
                        prixLivraison.innerHTML = 'Livraison : ' + selectLivraison.options[selectLivraison.selectedIndex].value + '€'
                    })
                }
                break;
            default:
                var poubelle = document.getElementById('poubelle' + i)
                var moins = document.getElementById('moins' + i)
                var plus = document.getElementById('plus' + i)
                var quantite = [document.getElementById('quantite1'),document.getElementById('quantite2'),document.getElementById('quantite3'),document.getElementById('quantite4'),document.getElementById('quantite5')]
                if(poubelle != null){
                    console.log(quantite)
                    moins.addEventListener('click', () => {
                        storedBass[i].qte--
                        if(storedBass[i].qte == 0){
                            localStorage.removeItem(storedBass[i].reference)
                            window.location.reload()
                        }else{
                            localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                            window.location.reload()
                        }
                    });
                    plus.addEventListener('click', () => {
                        storedBass[i].qte++
                        localStorage.setItem(storedBass[i].reference, JSON.stringify(storedBass[i]))
                        window.location.reload()
                    });
                    poubelle.addEventListener('click', () => {  
                        localStorage.removeItem(storedBass[i].reference)
                        window.location.reload()
                    });
                }
                break;      
        }  
    }
}