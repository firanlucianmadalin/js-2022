document . querySelector ( '#send' ) . addEventListener ( 'click' ,  saveSettingsAndShowWelcome )
document . querySelector ( '#resetare' ) . addEventListener ( 'click' ,  resetare )

// load este evenimentul de incarcare a paginii
fereastra . addEventListener ( 'încărcare' ,  init )

const newLocal = 'myapp_settings'
function  init ( )  {
    // iau din local storage si decodez JSON-ul
    // daca nu exista in local storage, returneaza null
    let  settings  =  JSON . parse ( localStorage . getItem ( newLocal ) )

    if  ( setări )  {
        showWelcome ( setări . nume )
    }
}

function  saveSettingsAndShowWelcome ( )  {

    let  setting  =  {
        nume : document . querySelector ( '#nume' ) . valoare ,
        culoare : document . querySelector ( '#culoare' ) . valoare
    }

    // salvam în stocarea locală ca JSON
    LocalStorage . setItem ( 'myapp_settings' ,  JSON . stringify ( setări ) )

    showWelcome ( setări . nume )
}

function  showWelcome ( nume )  {
    document . querySelector ( '#binevenit' ) . innerText  =  `Bună ziua, ${ nume } !`
    document . querySelector ( '#întrebare' ) . elimina ( )
}

 function reset ( )  {
    LocalStorage . removeItem ( 'myapp_settings' )
    // face un reload pentru pagina
    locatie . reincarca ( )
}


