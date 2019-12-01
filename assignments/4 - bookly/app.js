(function(){
  const ul = document.querySelector('.ul');
  const addBook = document.querySelector('#adds');
  const form = document.getElementById('add-book');
  const bttn = document.querySelector('.btn');
  const hideCheck = document.getElementById('hide');
  const searchBooks = document.querySelector('.search');

  let state = JSON.parse(localStorage.getItem('newBook')) || [];

  let id = function () { return 'querty'
  .split('')
  .sort(() => Math.random () -0.5)
  .join('') +('_') + Math.floor(Math.random()*100)};

  function createUI(books) {
    ul.innerHTML = "";
    books.forEach(newBook => {
    var li = document.createElement('li');
    li.classList.add('newli')
    var newp = document.createElement('p');
    newp.classList.add('para');
    newp.textContent = newBook.text;
    var span = document.createElement('button');
    span.setAttribute('data-id',newBook.id);
    span.classList.add('del')
    span.textContent = 'X';
    li.append(newp,span);
    ul.append(li);
    span.addEventListener('click',deleteBook);
    var inputBox = document.createElement('input');
    newp.addEventListener('dblclick',editIt)

    function editIt(event){
        li.replaceChild(inputBox,newp);
        inputBox.value = newBook.text;
        inputBox.focus();
        inputBox.addEventListener('keyup',(event)=>{
            if(event.keyCode==13){
            newBook.text = inputBox.value;
            createUI(state);
            localStorage.setItem('newBook',JSON.stringify(state));
            }
        })
        inputBox.addEventListener('blur',(event)=>{
            newBook.text = inputBox.value;
            createUI(state);
            localStorage.setItem('newBook',JSON.stringify(state));
        })
       }
      });

  hideCheck.addEventListener('click',hideBook);
  searchBooks.addEventListener('keyup',search);
}

// addBook
  function addbtn(event){
    event.preventDefault();
    if(addBook.value){
      state.push({
        text : addBook.value,
        id: id()
      }) 
      createUI(state);
      addBook.value ="";
    }
    localStorage.setItem('newBook',JSON.stringify(state));
  }
  bttn.addEventListener('click',addbtn)

// hideBook
  function hideBook(event){
    if(event.target.checked){
      createUI([]);
      }
      else createUI(state);
  }    

  // deleteBook
  function deleteBook(event){
    state = state.filter(del => del.id != event.target.dataset.id)
    createUI(state);
    localStorage.setItem('newBook',JSON.stringify(state));
  }

// searchBook
  function search(event){
    searchIt = state.filter(search => search.text.toLowerCase().includes(event.target.value.toLowerCase()))
    createUI(searchIt);
    localStorage.setItem('newBook',JSON.stringify(state));
  }

  createUI(state);
  })();