
var date = new Date()
var hour = date.getHours()

hour < 12 ? document.write('A.M.') : document.write('P.M.')

var time0fDay = hour < 12 ? ('A.M.') : ('P.M.')
document.write(time0fDay)

//if(hour < 12){
  //  document.write('A.M')
//}else{
//    document.write('P.M')
//}
