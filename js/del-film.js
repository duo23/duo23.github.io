deleteFilm('.delete');

function deleteFilm(btnClass) {
  let btn = document.querySelectorAll(btnClass);

  for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      let film = btn[i].parentElement.parentElement.parentElement;
      
      fadeOut(film);
      setTimeout(
        function () {
          return film.remove();
        },
      300); 
    };
  }
}