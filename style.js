let valide =document.querySelector('.img')
valide.addEventListener('click',changer)
    type=true;
    function changer(){
    if(type){
            document.querySelector('.pwd').setAttribute('type','text ')
            document.querySelector('.img').src ="img/valide.png"
            type=false
          
    }
    else{
            document.querySelector('.pwd').setAttribute('type','password')
            document.querySelector('.img').src ="img/non-valide.png"
            type=true
           
        }
       
}