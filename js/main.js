const bottonePlay = document.querySelector('.btn');
const punteggio = document.querySelector('#score');
const messaggioPerso = document.querySelector('#you-lose');



let square; 
let arrayBombe = [];
let arrayNumeri = [];
let arrayNumeriNoBombe = [];

bottonePlay.addEventListener('click', 
    function (){
            const difficoltaDom = document.getElementById('difficolta');
            const difficoltaValue = difficoltaDom.value;
            const gridDom = document.getElementById('grid');
            gridDom.innerHTML = '';
            messaggioPerso.innerHTML = '';
            punteggio.classList.remove('d-none');
            punteggio.innerHTML = '';
            let score = 0;

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

                
                
                square.addEventListener('click', 
                    function(){
                        this.innerHTML = i;
                        console.log(i);

                        
                        if(arrayBombe.includes(i)){
                            this.classList.remove('active');
                            this.classList.add('explosive'); 
                            punteggio.classList.add('d-none');
                            messaggioPerso.innerHTML = 'HAI PERSO!! Riprova.';
                            //this.removeEventListener();
                        } else {
                            this.classList.add('active');
                            score++;
                        }

                        console.log(arrayNumeriNoBombe);
                        punteggio.innerHTML = `Il tuo punteggio è ${score}`;
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
    let element = true;
    for ( let i = 0; i < 16 ; i++){
        bomba = Math.floor(Math.random() * (max - 1)) + 1;

        if(listaBombe.includes(bomba)){
            element = false;
        }

        if(element = true){
            listaBombe.push(bomba);
        }
    } 
    console.log(listaBombe);
    return listaBombe
}
    

