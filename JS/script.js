window.addEventListener("scroll",function(){
    let header = document.querySelector("header");

    if(this.window.scrollY > 50){// se o usuario rolar mais de 50px
        header.classList.add("header-scrolled");
    }else{
        header.classList.remove("header-scrolled");
    }
})

document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    // funcao para abrir e fechar o menu
    menuToggle.addEventListener('click', function(event){
        event.stopPropagation(); //impede que o clique no botão hamburguer feche o menu
        menu.classList.toggle('active');
    });

    //fecha o menu se clicar fora dele 
    document.addEventListener('click', function(event){
        //verifica se o clique foi fora do menu ou do botão hamburguer
        if(!menu.contains(event.target) && !menuToggle.contains(event.target)){
            menu.classList.remove('active');
        }
    });
})