const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

const AlertaDatos1 = document.getElementById('card-alert1');

AlertaDatos1.addEventListener('click', function(){
    Swal.fire({
        title: '¡Ven y conoceme!',
        text: 'pasa por la sección de contacto y te entregaremos los mejores datos para el viaje',
        imageUrl: 'assets/img/card1.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'card1',
        confirmButtonColor: '#17a3b8',
      })   
    
})

const AlertaDatos2 = document.getElementById('card-alert2');

AlertaDatos2.addEventListener('click', function(){
    Swal.fire({
        title: '¡Ven y conoceme!',
        text: 'pasa por la sección de contacto y te entregaremos los mejores datos para el viaje',
        imageUrl: 'assets/img/card2.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'card3',
        confirmButtonColor: '#17a3b8',
      })   
    
})

const AlertaDatos3 = document.getElementById('card-alert3');

AlertaDatos3.addEventListener('click', function(){
    Swal.fire({
        title: '¡Ven y conoceme!',
        text: 'pasa por la sección de contacto y te entregaremos los mejores datos para el viaje',
        imageUrl: 'assets/img/card3.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'card3',
        confirmButtonColor: '#17a3b8',
      })   
    
})


const AlertaDatos4 = document.getElementById('card-alert4');

AlertaDatos4.addEventListener('click', function(){
    Swal.fire({
        title: '¡Ven y conoceme!',
        text: 'pasa por la sección de contacto y te entregaremos los mejores datos para el viaje',
        imageUrl: 'assets/img/card4.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'card4',
        confirmButtonColor: '#17a3b8',
      })   
    
})
