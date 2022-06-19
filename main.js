//plusbtn
var totalprice= document.getElementById("totalp");
var sum = 0;
function plusclick(id){

    var quantity=document.getElementById("q"+id[1]);
    quantity.innerHTML= parseInt(quantity.innerHTML)+1;

    var total=document.getElementById("t"+id[1]);
    total.innerHTML=parseInt(total.innerHTML)+parseInt(document.getElementById("s"+id[1]).innerHTML);  
        
    sum=parseInt(document.getElementById("s"+id[1]).innerHTML)+sum;
    totalprice.innerHTML=sum;
}


function minusclick(id){
    var quantity=document.getElementById("q"+id[1]);

    if(parseInt(quantity.innerHTML)>0)
    {
        console.log('aa')
        quantity.innerHTML= parseInt(quantity.innerHTML)-1;
        var total=document.getElementById("t"+id[1]);

        total.innerHTML=parseInt(total.innerHTML)-parseInt(document.getElementById("s"+id[1]).innerHTML);      
        
        sum=sum-parseInt(document.getElementById("s"+id[1]).innerHTML);
        totalprice.innerHTML=sum;
    
    }
}


var heartBtn = document.getElementsByClassName("fas fa-heart");
for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", function (event) {
    var togglebtn = event.target;
      togglebtn.classList.toggle("red")
      console.log("aa")
  });
}

var deleteBtn = document.getElementsByClassName("delete-btn")
for( let i=0; i< deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click",function() {
         deleteBtn[i].parentElement.remove ()

         
    } )
}