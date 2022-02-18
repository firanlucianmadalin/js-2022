let  animalele  =  [
    'urs' ,
    'corgi' ,
    "crab" ,
    'pește' ,
    'panda' ,
    'papagal' ,
    "porc" ,
    'iepure' ,
    'rinocer' ,
    'rechin' ,
    'melc',
    'broasca testoasa',
]
let  animalPairs  =  [ ... animale , ... animale ]
let  cards  =  amestecați ( animalPairs )
let  activeCard  =  null
let  waitingToHideCards  =  false

function  shuffle ( array )  {
      returnare . sortare ( ( )  => 0,5  -  Matematică  ( ) )
}

function  displayAllCards ( )  {
    carduri . pentru  ( displayCard )
}

function  displayCard ( card )  {
    let  div  =  document . createElement ( 'div' )
    div . classList . adauga ( 'carte' )
    let  img  =  document . createElement ( 'img' )
    img . src  =  `https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8- ${ card } .png`
    div . appendChild ( imagine )
    document . querySelector ( '#game' ) . appendChild ( div )
    div . addEventListener ( 'click' ,  showCard )
}

function  showCard ( eveniment )  {
    let  card  =  eveniment . ţintă

    // cazul in care nu este niciun card activ
    if ( ! activeCard ){ 
        activeCard  =  card
        card . querySelector ( 'img' ) . stil . vizibilitate  =  'vizibil'
    }  else  if  ( ! waitingToHideCards )  {
        card . querySelector ( 'img' ) . stil . vizibilitate  =  'vizibil'
        if ( cardsAreTheSame ( activeCard ,  card ) )  {
            // cardurile sunt aceleași, păstrați vizibilitatea și eliminați ascultătorii
            ActiveCard . removeEventListener ( 'click' ,  showCard )
            card . removeEventListener ( 'click' ,  showCard )
            activeCard  =  nul
        }  else  {
            // cărțile nu sunt la fel
            // ascunde cărțile după 2 secunde
            waitingToHideCards  =  adevărat
            setTimeout ( ( )  =>  hideCards ( [ activeCard ,  card ] ) ,  2000 )
        }
    }
}

   funcțiiAreTheSame ( card1 ,  card2 ) 
 
    return  card1 . querySelector ( 'img' ) . src  ==  card2 . querySelector ( 'img' ) . src
 

function  hideCards ( carduri )  {
    carduri . forEach ( card  =>  card . querySelector ( 'img' ) . style . visibility  =  'hidden' )
    activeCard  =  nul
    waitingToHideCards  =  fals
}

displayAllCards ( )