const navbar = document.getElementById('navbar');
window.onscroll = ()=>{
    var scroll = document.body.scrollTop;
    console.log(scroll);
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navbar.classList.add('nav-effect')
    }else{
        navbar.classList.remove('nav-effect')
    }
}