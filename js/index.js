function checkforbac() {
  var chbac = document.getElementById("chbac")
  if(chbac.checked){
  document.getElementById("bac").hidden = false;
  }
  if(!chbac.checked) {
    document.getElementById("bac").hidden = true;
  }
}

function checkforetc() {  
  var chetc = document.getElementById("chetc")
  if(chetc.checked){
  document.getElementById("etc").hidden = false;
  }
  if(!chetc.checked) {
    document.getElementById("etc").hidden = true;
  }
}

function doEva() {  
var pv =  document.getElementById("pv").value;
var ac =  document.getElementById("ac").value;
var ev =  document.getElementById("ev").value;
var bac=  document.getElementById("bac").value;
var etc =   document.getElementById("etc").value;
 // variance analysis 
 var sv = ev - pv;
 var cv = ev - ac;
  document.getElementById("sv").innerHTML = sv;
  document.getElementById("cv").innerHTML = cv;
  // end of variance analysis
  
 // calculate perfomance indexes 
  var spi = ev/pv;
  var cpi = ev/ac;
  document.getElementById("spi").innerHTML = spi;
  document.getElementById("cpi").innerHTML = cpi;
  // end of performance analysis
  
  // calculation of estimates
 if ((bac == null)||(bac == 0)) {
   var eac1 ="No BAC data input";
   var eac2 ="No BAC data input";
   var eac3 ="No BAC data input";
   var eac4 ="No BAC data input";
   var vac = "No BAC data input";
   var tcpi ="No BAC data input";
 }
  else {
        eac1 = bac/cpi; //at cuttent spend rate
        eac2 = (ac + (bac - ev)); //at original forcasted ammount
        eac3 = ac + ((bac-ev)/(spi*cpi)); //if current cost & schedule performance will impact future cost performance
        eac4 = ac + etc;
        vac = bac-eac1;
        tcpi = ((bac-ev)/(bac-ac));
      };  
  document.getElementById("eac1").innerHTML = eac1;
  document.getElementById("eac2").innerHTML = eac2;
  document.getElementById("eac3").innerHTML = eac3;
  document.getElementById("eac4").innerHTML = eac4;  
  document.getElementById("vac").innerHTML = vac;  
  document.getElementById("tcpi").innerHTML = tcpi;
}
// end eac calculations