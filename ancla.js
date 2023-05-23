function arriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonarriba = document.getElementById('arriba');

        if(scroll > 442){
            botonarriba.style.right = 20 + "px";
        }
        else{
            botonarriba.style.right = -100 + "px";
        }
    }
    )
}

arriba();