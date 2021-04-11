const state = {
  time: new Date(),
  lots: [
    {
      id: 1,
      name: "Apple",
      description: "Apple description",
      price: 16,
    },
    {
      id: 2,
      name: "Orange",
      description: "Orange description",
      price: 41,
    },
  ],
};

render(App({ state }), document.getElementById("root"));

function render(app, root) {
  root.appendChild(app);
}

function App({ state }) {
  const app = createElementDOM("div", "app");

  app.appendChild(Header(Logo(), Clock({ time: state.time })));
  app.appendChild(Lots({ lots: state.lots }));

  return app;
}

function Lots({ lots }) {
  node = createElementDOM("div", "lots");

  lots.forEach((lot) => {
    node.appendChild(Lot({ lot }));
  });

  return node;
}

function Lot({ lot }) {
  const node = createElementDOM("div", "lot");

  const data = createElementDOM("div", "data");

  const name = createElementDOM("h1", "name");
  const description = createElementDOM("p", "description");
  const price = createElementDOM("div", "price");

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
  node = createElementDOM("div", "time");

  const dayOrNight = createElementDOM("span", "day_or_night");
  dayOrNight.innerHTML = changedDay(time);

  const clock = createElementDOM("span", "clock");
  clock.innerText = formatTime(time);

  node.appendChild(dayOrNight);
  node.appendChild(clock);

  return node;
}

function Logo() {
  node = createElementDOM("div", "logo");

  return node;
}

function Header(logo, clock) {
  node = createElementDOM("header", "header");

  node.appendChild(logo);
  node.appendChild(clock);

  return node;
}

function createElementDOM(el, clN) {
  const node = document.createElement(el);
  node.classList.add(clN);

  return node;
}

setInterval(() => {
  const time = new Date();

  const clock = document.querySelector(".clock");
  clock.innerText = formatTime(time);

  const dayOrNight = document.querySelector(".day_or_night");
  dayOrNight.innerHTML = changedDay(time);
}, 1000);

function formatTime(time) {
  if (
    time.getHours() < 10 &&
    time.getMinutes() < 10 &&
    time.getSeconds() < 10
  ) {
    return `0${time.getHours()}:0${time.getMinutes()}:0${time.getSeconds()}`;
  } else if (time.getHours() < 10 && time.getMinutes() < 10) {
    return `0${time.getHours()}:0${time.getMinutes()}:${time.getSeconds()}`;
  } else if (time.getHours() < 10 && time.getSeconds() < 10) {
    return `0${time.getHours()}:${time.getMinutes()}:0${time.getSeconds()}`;
  } else if (time.getMinutes() < 10 && time.getSeconds() < 10) {
    return `${time.getHours()}:0${time.getMinutes()}:0${time.getSeconds()}`;
  } else if (time.getHours() < 10) {
    return `0${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  } else if (time.getMinutes() < 10) {
    return `${time.getHours()}:0${time.getMinutes()}:${time.getSeconds()}`;
  } else if (time.getSeconds() < 10) {
    return `${time.getHours()}:${time.getMinutes()}:0${time.getSeconds()}`;
  } else {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }
}

function changedDay(time) {
    if (time.getHours() > 3 && time.getHours < 22) {
        return '<i class="fas fa-sun"></i>';
    } else {
        return '<i class="fas fa-moon"></i>';
    }
}
