window.addEventListener('DOMContentLoaded', () =>{
    const message1 = document.querySelector('#message1')
    const bar1 = document.querySelector('#bar1')

    message1.addEventListener('click', () => {
        if(!bar1.classList.contains('hidden')){
            bar1.classList.add('hidden')
        }
    })
})

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});