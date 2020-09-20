
let sobremi = document.getElementById('sobremi');
let servicios = document.getElementById('servicios')
let trabajos = document.getElementById('trabajos')
let contact = document.getElementById('contact')
window.addEventListener('scroll', function(){
    let tamaniopantalla = window.innerHeight;
    if(sobremi.getBoundingClientRect().top < tamaniopantalla){
        sobremi.classList.add('opacidad')
    }
    if(servicios.getBoundingClientRect().top < tamaniopantalla){
        servicios.classList.add('opacidad')
    }
    if(trabajos.getBoundingClientRect().top < tamaniopantalla){
        trabajos.classList.add('opacidad')
    }
    if(contact.getBoundingClientRect().top < tamaniopantalla){
        contact.classList.add('opacidad')
    }
})





// window.addEventListener('scroll', function(){
//     let sobremi = document.getElementById('sobremi');
//     let posicionsobremi = sobremi.getBoundingClientRect().top;

//     let servicios = document.getElementById('servicios');
//     let posicionservicios = servicios.getBoundingClientRect().top; 

//     let trabajos = document.getElementById('trabajos');
//     let posiciontrabajos = trabajos.getBoundingClientRect().top;

//     let contact = document.getElementById('contact');
//     let posicioncontact = trabajos.getBoundingClientRect().top;

   
//     let tamaniopantalla = window.innerHeight;
//     if(posicionsobremi < tamaniopantalla){
//         sobremi.classList.add('opacidad')
//         sobremi.classList.remove('no-opacidad')
//      servicios.classList.remove('opacidad')
//     }
//     if(posicionservicios < tamaniopantalla){
//         servicios.classList.add('opacidad');
//         sobremi.classList.add('no-opacidad')
//         sobremi.classList.remove('opacidad');
//     }
//     if(posiciontrabajos < tamaniopantalla){
//         servicios.classList.add('no-opacidad');
//         servicios.classList.remove('opacidad')
//         trabajos.classList.add('opacidad')
//     }
    // if(posicioncontact < tamaniopantalla){
    //     trabajos.classList.add('no-opacidad');
    //     trabajos.classList.remove('opacidad')
    //     contact.classList.add('opacidad')
    // }




