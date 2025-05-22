const listDOM = document.querySelector('.list');

const data = [
    {
        imgSrc: '../img/boots16.png',
        imgAlt: 'Car 1',
        title: 'Car 1 title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt eligendi quo suscipit consequatur nesciunt.',
        link: '###',
    },
    {
        imgSrc: '../img/boots17.png',
        imgAlt: 'Car 2',
        title: 'Car 2 title',
        desc: 'Lorem ipsum dolor. Consequuntur deserunt eligendi quo suscipit consequatur nesciunt.',
        link: '#@#',
    },
      {
        imgSrc: '../img/boots18.png',
        imgAlt: 'Car 3',
        title: 'Car 3 title',
        desc: 'Lorem ipsum dolor. Consequuntur deserunt eligendi quo suscipit consequatur nesciunt.',
        link: '#@#',
    },
      {
        imgSrc: '../img/boots19.png',
        imgAlt: 'Car 4',
        title: 'Car 4 title',
        desc: 'Lorem ipsum dolor. Consequuntur deserunt eligendi quo suscipit consequatur nesciunt.',
        link: '#@#',
    },
]; 

let HTML = '';

for (const item of data) {
    HTML += `
        <div class="card">
            <img class="card-img" src="../img/${item.imgSrc}" alt="${item.imgAlt}">
            <h2 class="card-title">${item.title}</h2>
            <p class="card-desc">${item.desc}</p>
            <a class="card-link" href="${item.link}">Read more...</a>
        </div>`;
}

listDOM.innerHTML = HTML;
