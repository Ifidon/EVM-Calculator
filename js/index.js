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
var pv =  parseInt(document.getElementById("pv").value);
var ac =  parseInt(document.getElementById("ac").value);
var ev =  parseInt(document.getElementById("ev").value);
var bac = parseInt(document.getElementById("bac").value);
var etc = parseInt(document.getElementById("etc").value);
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
  console.log(bac)
  // calculation of estimates
 if ((bac == 0)||(bac==null) ||(isNaN(bac))) {
   var eac1 = 0;
   var eac2 ="No BAC data input";
   var eac3 ="No BAC data input";
   // var eac4 ="No BAC data input";
   var vac = "No BAC data input";
   var tcpi ="No BAC data input";
 }
  else {
        eac1 = bac/cpi; //at cuttent spend rate
        eac2 = ac + (bac-ev); //at original forcasted ammount
        eac3 = ac + ((bac-ev)/(spi*cpi)); //if current cost & schedule performance will impact future cost performance
        // eac4 = ac + etc;
        vac = bac-eac1;
        tcpi = (bac-ev)/(bac-ac);
        } 
  
  if ((etc == 0)||(etc == null)||(isNaN(etc))){
    var eac4 = "No ETC data input"
  }
  else {
    eac4 = ac + etc;
  }
  document.getElementById("eac1").innerHTML = eac1;
  document.getElementById("eac2").innerHTML = eac2;
  document.getElementById("eac3").innerHTML = eac3;
  document.getElementById("eac4").innerHTML = eac4;  
  document.getElementById("vac").innerHTML = vac;  
  document.getElementById("tcpi").innerHTML = tcpi;
  
  
  if (sv >= 0) {
    document.getElementById("svstat").style.color = "green";
    document.getElementById("svstat").className = "stat";
    document.getElementById("svstat").innerHTML = "&#9745";    
  }
  else {
    document.getElementById("svstat").style.color = "red";
    document.getElementById("svstat").className = "stat";
    document.getElementById("svstat").innerHTML = "&#10060";
  }
  
  if (cv >= 0) {
    document.getElementById("cvstat").style.color = "green";
    document.getElementById("cvstat").className = "stat";
    document.getElementById("cvstat").innerHTML = "&#9745";    
  }
  else {
    document.getElementById("cvstat").style.color = "red";
    document.getElementById("cvstat").className = "stat";
    document.getElementById("cvstat").innerHTML = "&#10060";
  }
  
  if (spi >= 1) {
    document.getElementById("spistat").style.color = "green";
    document.getElementById("spistat").className = "stat";
    document.getElementById("spistat").innerHTML = "&#9745";    
  }
  else {
    document.getElementById("spistat").style.color = "red";
    document.getElementById("spistat").className = "stat";
    document.getElementById("spistat").innerHTML = "&#10060";
  }
  
  if (cpi >= 1) {
    document.getElementById("cpistat").style.color = "green";
    document.getElementById("cpistat").className = "stat";
    document.getElementById("cpistat").innerHTML = "&#9745";    
  }
  else {
    document.getElementById("cpistat").style.color = "red";
    document.getElementById("cpistat").className = "stat";
    document.getElementById("cpistat").innerHTML = "&#10060";
  }
}
// end eac calculations