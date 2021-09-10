//METODO LOAD
window.addEventListener('load',()=>{
    $('#loading').delay(400).fadeOut('slow', ()=>{console.log('ELIMINAR SPINNER')});
    //FADE IN PARA MOSTRAR EL CUERPO DE LA PAGINA
    $('#cuerpo').delay(1000).fadeIn("slow",()=>{ console.log('BODY CARGADO')});
})