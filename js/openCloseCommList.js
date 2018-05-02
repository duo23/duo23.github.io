openCloseCommList('.comments-title', 'commants-wrap');

function openCloseCommList(btnClass, commentClass) {
  let btn = document.querySelectorAll(btnClass),
      comments = document.getElementsByClassName(commentClass);      

  for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      let parentEl = btn[i].parentElement.children;
      
      for(let j = 0; j < parentEl.length; j++) {
        if(parentEl[j].className == commentClass) {
          if(getComputedStyle(parentEl[j]).display == 'none') {
            btn[i].lastElementChild.innerHTML = 'v';
            btn[i].style.borderBottom = '2px solid #e4edf4';
            fadeIn(parentEl[j], 'block');
          } else {
            btn[i].style.borderBottom = '';
            btn[i].lastElementChild.innerHTML = '&#x0005E';
            fadeOut(parentEl[j]);
          }
        }
      }
    };    
  }
}