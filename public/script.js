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

const app = createElementDOM('div', 'app'),
header = createElementDOM('header', 'header'),
logo = createElementDOM('div', 'logo'),
clock = createElementDOM('div', 'clock'),
lots = createElementDOM('div', 'lots');

state.lots.forEach(lot => {

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

    lots.appendChild(node);
});

header.appendChild(logo);
header.appendChild(clock);

app.appendChild(header);
app.appendChild(lots);

const root = document.getElementById('root');
root.appendChild(app);

function createElementDOM(el, clN) {

    const node = document.createElement(el);
    node.classList.add(clN);

    return node;
}