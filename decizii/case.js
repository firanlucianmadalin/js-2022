
var date = Date.now()
var day0fWeek = date.day0fWeek

document.write='Astazi este joi'


switch (day0fWeek) {
    case 1:
        document.write('luni')
    break;

     case 2:
        document.write('marti')
default:
    break;
}

if(day0fWeek == 1){
    document.write('luni')
} else if (day0fWeek == 2){
    document.write('marti')
}
   