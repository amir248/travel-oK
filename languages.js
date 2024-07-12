function changeLanguage(){
    let countBox=document.querySelectorAll('#eng').length;
    if(document.querySelector('#check').checked==true){
        console.log('checked');
        for(let oK=0;oK<=countBox;oK++){
    console.log(document.querySelectorAll('#rus')[oK]);
    console.log(document.querySelectorAll('#eng')[oK]);

            document.querySelectorAll('#rus')[oK].style.display="none";
            document.querySelectorAll('#eng')[oK].style.display="block";
        }
    }else{
        console.log('not checked');
        for(let oK=0;oK<=countBox;oK++){
            document.querySelectorAll('#rus')[oK].style.display="block";
            document.querySelectorAll('#eng')[oK].style.display="none";
        }
    }
    
}
window.addEventListener('DOMContentLoaded',changeLanguage);
document.querySelector('#check').addEventListener('click',()=>{
    changeLanguage();    
})