const init = () => {
    const inputForm = document.querySelector('form');
    const inputBox = document.querySelector('input#searchByID');
    inputForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:3000/movies/${inputBox.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
        });

    })
  
}

document.addEventListener('DOMContentLoaded', init);