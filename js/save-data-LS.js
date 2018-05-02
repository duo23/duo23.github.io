saveDataLS();


function saveDataLS() {
  window.onbeforeunload = function () {
    let moviesStorage = [],
        movies = document.querySelector('.film-list'),
        comments;

    for(let i = 1; i < movies.children.length; i++) {
      moviesStorage.push({});
      moviesStorage[moviesStorage.length - 1].title = movies
        .children[i].children[0].children[0].children[1].textContent;
      moviesStorage[moviesStorage.length - 1].year = movies
        .children[i].children[0].children[0].children[3].children[0]
        .children[1].children[1].textContent;
      moviesStorage[moviesStorage.length - 1].country = movies
        .children[i].children[0].children[0].children[3].children[0]
        .children[0].children[1].textContent;
      moviesStorage[moviesStorage.length - 1].genre = movies
        .children[i].children[0].children[0].children[3].children[0]
        .children[2].children[1].textContent;
      moviesStorage[moviesStorage.length - 1].description = movies
        .children[i].children[0].children[0].children[2].textContent;  
      moviesStorage[moviesStorage.length - 1].poster = movies
        .children[i].children[0].children[0].children[0].src;
      moviesStorage[moviesStorage.length - 1].comments = [];  

      comments = movies.children[i].children[0].children[2].children[1];
      for(let j = 1; j < comments.children.length - 3; j++) {
        moviesStorage[moviesStorage.length - 1].comments.push(
          comments.children[j].textContent
        );
      }
    }

    localStorage.setItem('films', JSON.stringify(moviesStorage));
  };
}