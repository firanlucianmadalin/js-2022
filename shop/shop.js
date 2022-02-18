let  produsele  =  [
    {
        nume : 'Salata mediteraneana' ,
        pret : 17.5 ,
        imaginea : 'https://.unsplash.com/photo-1644704170910-a0cdf183649b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fGVufDB8fHx8fGVufDB8fHx8=autop40,&1=autop40',
        description : 'Salata cu seminte, mozzarella, broccoli' ,
    } ,
    {
        nume : 'Cocktail de capsuni' ,
        pret : 10.5 ,
        imagine :  'https://images.unsplash.com/photo-1508254627334-d4fa3a515b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fGVufDB8fHx8=autoformat&0,&fitting=autoformat&',
        description : 'Cocktail delicios de capsuni cu miere si lamaie' ,
    } , 
    {
        nume : 'Sandvis' ,
        pret : 20.7 ,
        imaginea : 'https://images.unsplash.com/photo-1643133277733-66a476f7f32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fGVufDB8fHx8fGVufDB8fHx8=&autop40,&1=autop8',
        description : 'Sandvis delicios cu mozzarella si sos barbeque' ,
    } , 
]

function  showProducts ( )
{
    clearProducts ( )

    let  minPrice  =  document . querySelector ( '#min' ) . valoare
    let  maxPrice  =  document . querySelector ( '#max' ) . valoare

    produse
        . filtru ( produs  =>  produs . preț  >=  minPreț  &&  produs . preț  <=  maxPrice )
        . pentruFiecare ( produs  =>  {
            let  div  =  document . createElement ( 'div' )
            div . classList . adauga ( 'produs' )
            div . innerHTML  =  `
                <h2 class="name"> ${ produs . nume } </h2>
                <p class="price">Pret: ${ produs . preț } </p>
                <p class="image"><img src=" ${ produs . imagine } "></p>
                <p class="description"> ${ produs . descriere } </p>
            `
            document . querySelector ( '#produse' ) . adaugă ( div )
    } ) ;
}

function  clearProducts ( )
{
    document . querySelector ( '#produse' ) 
}

function  updateMinPrice ( )  {
    let  minPrice  =  document . querySelector ( '#min' ) . valoare
    document . querySelector ( '#minValue' ) . innerText  =  minPrice
}

function updateMaxPrice ( )  {
    let  maxPrice  =  document . querySelector ( '#max' ) . valoare
    document . querySelector ( '#maxValue' ) . innerText  =  maxPrice
}

function  init ( )  {
    arataProduse ( )
    updateMinPrice ( )
    updateMaxPrice ( )
}

fereastra . addEventListener ( 'încărcare' ,  init )
document . querySelector ( '#filtru' ) . addEventListener ( 'click' ,  showProducts )
document . querySelector ( '#min' ) . addEventListener ( 'schimbare' ,  updateMinPrice )
document . querySelector ( '#max' ) . addEventListener ( 'schimbare',  updateMaxPrice )
