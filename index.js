const body = document.querySelector('box');
function fixe(){
    if(
        document.documentElement.classList.contains('bloc')
    ){document.documentElement.classList.remove('bloc');
    }else{
        document.documentElement.classList.add('bloc');
    }
}
document.documentElement.classList.add('bloc')