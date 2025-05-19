const h1DOM = document.querySelector('h1');
const title = 'zuikio daržas';
h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fontSize = '2rem';

const liListDOM = document.querySelectorAll('li');
const vegetables = ['pomidoras', 'agurkas', 'svogūnas', 'bulvė', 'dobiliukai'];

let index = 0;

for (const liDOM of liListDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';
    if (vegetables[index]) {
        liDOM.classList.add('zuikio-darzove');
    }else {
        liDOM.classList.add('zuikio-darzo-error');
    }
    index++;
}










