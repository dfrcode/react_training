const state = {
    time: new Date().toLocaleTimeString(),
    lots: [
        {
            id: 1,
            name: 'Apple',
            description: 'Apple description',
            price: 16
        },
        {
            id: 2,
            name: 'Orange',
            description: 'Orange description',
            price: 41
        }
    ]
}

render(App({ state }), document.getElementById('root'));

function render(app, root) {
    
    root.appendChild(app);
}

function App({ state }) {
    const app = createElementDOM('div', 'app');

    app.appendChild(Header(Logo(), Clock({ time: state.time })));
    app.appendChild(Lots({ lots: state.lots }));

    return app;
}

function Lots({ lots }) {
    node = createElementDOM('div', 'lots');

    lots.forEach(lot => {
        node.appendChild(Lot({ lot }));
    })

    return node;
}

function Lot({ lot }) {
    
    const node = createElementDOM('div', 'lot');
    
    const data = createElementDOM('div', 'data');
    
    const name = createElementDOM('h1', 'name');
    const description = createElementDOM('p', 'description');
    const price = createElementDOM('div', 'price');
    
    name.innerText = lot.name;
    description.innerText = lot.description;
    price.innerText = lot.price;
    
    data.appendChild(name);
    data.appendChild(description);
    
    node.appendChild(data);
    node.appendChild(price);

    return node;
}

function Clock({ time }) {

    node = createElementDOM('div', 'clock');
    node.innerText = time;

    return node;
}

function Logo() {

    node = createElementDOM('div', 'logo');

    return node;
}

function Header(logo, clock) {

    node = createElementDOM('header', 'header');

    node.appendChild(logo);
    node.appendChild(clock);

    return node;
}

function createElementDOM(el, clN) {

    const node = document.createElement(el);
    node.classList.add(clN);

    return node;
}