


$(document).ready(function () {
    $("#buy").click(function () {
        if (colvo.value == 1)
        notie.alert({ type: 'success', text: "В корзину добавили " + colvo.value + " товар!", time: 2 });
        if (colvo.value >1 && colvo.value <5 )
        notie.alert({ type: 'success', text: "В корзину добавили " + colvo.value + " товара!", time: 2 });
        else 
        notie.alert({ type: 'success', text: "В корзину добавили " + colvo.value + " товаров!", time: 2 });
        });
    


    


    $("#favorite").click(function () {
        notie.alert({ type:4, text:"Вы добавили товар в избранное."});
         });


    $("#plus").click(function() {
        colvo.value++;});

     $("#minus").click(function() {
        if (colvo.value > 1){
        colvo.value--;}});
    
    
    
    var previews = document.querySelectorAll('.product__images__all img');
    var mainPhoto  = document.querySelector('.product__images_big img');

    for(let i = 0; i < previews.length; i++) {
    previews[i].addEventListener('mouseover', function () {
     const src = this.getAttribute('data-full-img');
     mainPhoto.setAttribute('src', src);
    })
    }


});
