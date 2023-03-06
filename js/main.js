const bottonePlay = document.querySelector('.btn');
const punteggio = document.querySelector('#score');
const messaggio = document.querySelector('#message');

let score = 0;
let square; 
let arrayBombe = [];
let arrayNumeri = [];
let arrayNumeriscelti = [];

bottonePlay.addEventListener('click', 
    function (){
            const difficoltaDom = document.getElementById('difficolta');
            const difficoltaValue = difficoltaDom.value;
            const gridDom = document.getElementById('grid');
            gridDom.innerHTML = '';
            messaggio.innerHTML = '';
            punteggio.classList.remove('d-none');
            punteggio.innerHTML = '';

            arrayBombe = creaListaBombe(difficoltaValue);

            for (let i = 1; i <= difficoltaValue; i++){            //ogni ciclo creo un quadratino da 1 a .. 
                square = newSquare();                              //con misure stabilite e classe active o explosive e numeretto
                arrayNumeri.push(square);
                                                                   //e lo inserisco nella griglia
                if(difficoltaValue == '100'){
                    square.classList.add('facile');
                } else if (difficoltaValue == '81'){
                    square.classList.add('medio');
                }else if (difficoltaValue == '49'){
                    square.classList.add('difficile');
                }               
                
                let gameOver = false;
                
                square.addEventListener('click',                //l'elemento gameOver di base è false e quando entra 
                    function(){                                 //nell'if può farlo ma se incontra una bomba diventa 
                                                                //true e allora nel tornare nell'if dovrebbe trovare bloccato ed uscire
                        if(gameOver == false){                  //ma in realtà non funziona
                            console.log('secondo' + gameOver);
                            this.innerHTML = i;  
                            if(arrayBombe.includes(i)){
                                this.classList.remove('active');
                                this.classList.add('explosive'); 
                                punteggio.classList.add('d-none');
                                messaggio.innerHTML = 'HAI PERSO!! Riprova.';
                                gameOver = true;
                                console.log('terzo' + gameOver);

                            } else {
                                this.classList.add('active');
                                arrayNumeriscelti.push(i);
                                score++;
                                gameOver = false;
                            }
                            if ((arrayNumeri.length - arrayBombe.length) == score){
                                messaggio.innerHTML = 'HAI VINTO';
                                punteggio.innerHTML = '';
                                score = 0;
                            }
                            punteggio.innerHTML = `Il tuo punteggio è ${score}`;
                        }
                    }
                        
                )

                

                gridDom.append(square);         
            }          
    }       
)


function newSquare() {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    return quadratino;
}

function creaListaBombe (max){
    let listaBombe = [];
    let bomba;
    for ( let i = 0; i < 16 ; i++){
        bomba = Math.floor(Math.random() * (max - 1)) + 1;

        if(listaBombe.includes(bomba)){
            i--
        }else{
            listaBombe.push(bomba);
        }
    } 
    console.log(listaBombe);
    return listaBombe
}
    

