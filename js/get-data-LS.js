getDataLS();

function getDataLS() {
  let films = JSON.parse(localStorage.getItem('films'));

  if(films != null && films.length != 0) {
    films.forEach(
      function (item) {
        displayData(item);
      }
    );
  }
}

function displayData(item) {
  let newFilm = document.querySelector('.film-list').firstElementChild
    .cloneNode(true);

  newFilm.children[0].children[0].children[1].innerHTML = item.title;
  newFilm.children[0].children[0].children[3].children[0].children[1]
    .children[1].innerHTML = item.year;
  newFilm.children[0].children[0].children[3].children[0].children[0]
    .children[1].innerHTML = item.country;
  newFilm.children[0].children[0].children[3].children[0].children[2]
    .children[1].innerHTML = item.genre;
  newFilm.children[0].children[0].children[2].innerHTML = item.description;
  newFilm.children[0].children[0].children[0].src = item.poster;
  newFilm.style.backgroundImage = `url(${item.poster})`;
  
  item.comments.forEach(
    function (el) {
      let commantsWrap = newFilm.children[0].children[2].children[1],
          comment = commantsWrap.children[0].cloneNode(false);

      comment.innerHTML = el;
      commantsWrap.insertBefore(
        comment, commantsWrap.children[commantsWrap.children.length - 3]
      );
      commentCounter(commantsWrap.children[commantsWrap.children.length - 3]);
    }
  );
  
  document.querySelector('.film-list').appendChild(newFilm);
  newFilm.style.display = 'block';

  addComment('.add-comment', 'invalid-value');  
  deleteFilm('.delete');
  openCloseCommList('.comments-title', 'commants-wrap');
  editFilm('edit');
}

