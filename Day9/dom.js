
function log (msg) { console.log(msg) };

const h1 = document.getElementById('heading');
log(h1);
h1.innerHTML = 'Welcome Benjamin The Greate';
h1.setAttribute('class', 'highlight');

const headings = document.getElementsByClassName('headings');
log(headings);

const h2 = document.getElementsByTagName('h2');
log(h2);
h2[0].textContent = 'List of Items:';

const list = document.querySelectorAll('ul#list>li');
log(list);

const btn = document.getElementById('btn');
btn.classList.add('btn-active');
btn.style.backgroundColor = 'Red';

const container = document.getElementsByClassName('container');
const p = document.createElement('p');
p.innerHTML = 'New Content';

container[0].appendChild(p);

btn.addEventListener('click', function () {
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = 'Item 4';
    ul.appendChild(li);

    log('test');
    log(container);
});