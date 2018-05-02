function openCloseForm() {
  let btn = document.querySelector('.add-btn'),
      style = getComputedStyle(btn),
      headSpan = document.querySelector('.add-btn-wrap span'),
      form = document.querySelector('.add-form');

  if(style.transform == 'none' || style.transform != 
    'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)') {
    btn.style.animationName = 'rot';
    headSpan.style.color = '#a9e1ff';
    fadeIn(form, 'inline-block');
  } else {
    btn.style.animationName = 'back-rot';
    headSpan.style.color = '#ffffff';
    fadeOut(form);
  }
}