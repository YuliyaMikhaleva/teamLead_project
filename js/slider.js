//реализация слайдера
var slideIndex = 1;//по умолчанию показывается слайд 1
showDivs(slideIndex);//показывается этот слайд

function plusDivs(n) {
    showDivs(slideIndex += n)//переключается слайд
}

function currentDiv(n) {
    showDivs(slideIndex = n);//показывается N-ный слайд
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");//Слайды, которые будут меняться
    var dots = document.getElementsByClassName("demo");//Пагинация снизу
    //если текущий номер слайда больше длины массива слайдов, то показывается 1ый слайд
    if (n > x.length) {
        slideIndex = 1
    }
    //если текущий номер слайда меньше длины массива слайдов, то показывается последний слайд
    if (n < 1) {
        slideIndex = x.length
    }
    //перебираем все слайды, и каждому слайду задаем display:none
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    //перебираем все Нижние кнопки пагинации
    for (i = 0; i < dots.length; i++) {
        //и каждой меняем класс w3-red на ""
        if(i == 1){
            dots[i].className = dots[i].className.replace(" active_block_blue", "");
        } else {
            dots[i].className = dots[i].className.replace(" active_block", "");
        }
    }

    x[slideIndex-1].style.display = "block";
    //кнопке пагинации присваиваем новый класс
    if (slideIndex == 2){
        dots[slideIndex-1].className += " active_block_blue";
    } else {
        dots[slideIndex-1].className += " active_block";
    }




}
