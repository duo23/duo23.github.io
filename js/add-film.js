addFilm('.add-film', '.film-list');

function addFilm(btnClass, filmWrap) {
  let btn = document.querySelector(btnClass);

  btn.onclick = function () {
    let film = document.querySelector(filmWrap)
      .firstElementChild.cloneNode(true);
    let bodyHeight;

    film.children[0].children[0].children[1].innerHTML = document
      .getElementById('title').value;
    document.getElementById('title').value = 'TITLE';

    film.children[0].children[0].children[3].children[0].children[1]
      .children[1].innerHTML = document.getElementById('year').value;
    document.getElementById('year').value = 'YEAR';

    film.children[0].children[0].children[3].children[0].children[0]
      .children[1].innerHTML = document.getElementById('country').value;
    document.getElementById('country').value = 'COUNTRY';

    film.children[0].children[0].children[3].children[0].children[2]
      .children[1].innerHTML = document.getElementById('genre').value;
    document.getElementById('genre').value = 'GENRE';

    film.children[0].children[0].children[2].innerHTML = document
      .getElementById('description').value;
    document.getElementById('description').value = 'DESCRIPTION';

    film.children[0].children[0].children[0].src = document
      .getElementById('poster').value;
    film.style.backgroundImage = `url('${document.getElementById('poster').value}')`;
    film.children[0].children[0].children[0].onerror = function () {
      film.children[0].children[0].children[0].src = 'img/Poster.jpg';
      film.style.backgroundImage = 'url(img/Poster.jpg)';
    };
    document.getElementById('poster').value = 'POSTER(LINK)';

    film.style.display = 'block';
    document.querySelector(filmWrap).appendChild(film);
    
    if(document.body.scrollHeight >= document.body.offsetHeight && 
      document.body.scrollHeight >= document.body.clientHeight) {
      bodyHeight = document.body.scrollHeight;
    } else if(document.body.offsetHeight >= document.body.scrollHeight &&
      document.body.offsetHeight >= document.body.clientHeight) {
      bodyHeight = document.body.offsetHeight;
    } else {
      bodyHeight = document.body.clientHeight;
    }
    window.scroll({
      top: bodyHeight, 
      left: 0, 
      behavior: 'smooth' 
    });

    openCloseForm();
    addComment('.add-comment', 'invalid-value');  
    deleteFilm('.delete');
    openCloseCommList('.comments-title', 'commants-wrap');
    editFilm('edit');
  };
}