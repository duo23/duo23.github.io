function saveEdit(editEl, wrapEl) {
  return function () {
    editEl.children[1].innerHTML = document.getElementById('title1').value;
    editEl.children[3].children[0].children[1].children[1].innerHTML = document
      .getElementById('year1').value;
    editEl.children[3].children[0].children[0].children[1].innerHTML = document
      .getElementById('country1').value;
    editEl.children[3].children[0].children[2].children[1].innerHTML = document
      .getElementById('genre1').value;
    editEl.children[2].innerHTML = document
      .getElementById('description1').value;
      
    editEl.children[0].src = document.getElementById('poster1').value;
    editEl.parentElement.parentElement.style.backgroundImage = `url('${document
      .getElementById('poster1').value}')`;
    editEl.children[0].onerror = function () {
      editEl.children[0].src = 'img/Poster.jpg';
      editEl.parentElement.parentElement.style.backgroundImage = 'url(img/Poster.jpg)';
    };

    fadeOut(wrapEl);
  }
}