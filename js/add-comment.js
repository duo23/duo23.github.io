addComment('.add-comment', 'invalid-value');

function addComment(btnClass, txtColorClass) {
  let btn = document.querySelectorAll(btnClass);
  
  for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      let text = btn[i].previousElementSibling.previousElementSibling;
      
      if(text.value == 0) {
        text.className = txtColorClass;
        setTimeout(function () { return text.className = ''}, 1500);
      } else {
        createComment(text);
        text.value = '';
        commentCounter(text);
      }
    };
  }
}

function createComment(txtEl) {
  let newComment = txtEl.previousElementSibling.cloneNode(false);

  txtEl.parentElement.insertBefore(newComment, txtEl);
  txtEl.previousElementSibling.innerHTML = txtEl.value;
}

function commentCounter(txtEl) {
  let numComments = txtEl.parentElement.children.length - 4,
      countEl = txtEl.parentElement.previousElementSibling.children[1];

  countEl.innerHTML = numComments;      
}