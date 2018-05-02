editFilm('edit');

function editFilm(btnClass) {
  let btn = document.getElementsByClassName(btnClass),
      editForm = document.querySelector('.wrap-edit-form');
  
  for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      let film = btn[i].parentElement;
     
      document.getElementById('title1').value = film.children[1].textContent;
      document.getElementById('year1').value = film.children[3].children[0]
        .children[1].children[1].textContent;
      document.getElementById('country1').value = film.children[3].children[0]
        .children[0].children[1].textContent;
      document.getElementById('genre1').value = film.children[3].children[0]
        .children[2].children[1].textContent;
      document.getElementById('poster1').value = film.children[0]
        .src.search(/img\/Poster\.jpg$/) != -1 ? 'POSTER(LINK)' : film.children[0].src;
      document.getElementById('description1').value = film.children[2]
        .textContent;
        
      document.querySelector('.edit-film').onclick = saveEdit(film, editForm);
      
      fadeIn(editForm, 'block');
    };
  }
}