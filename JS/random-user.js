const image = document.getElementById('image');
const title = document.getElementById('title');
const details = document.getElementById('details');
const user = document.getElementById('user');
const email = document.getElementById('email');
const birthDay = document.getElementById('birthday');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const password = document.getElementById('password');

const store = [];
// console.log(image, title, details, user, email, birthDay, address, phone);

const loadApi = () => {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      store.push(data);
      console.log(store);
      display(data.results[0]);
    });
};

loadApi();

const display = (a) => {
  console.log(a);
  title.innerText = 'Hi, My Name is';
  image.setAttribute('src', a.picture.large);
  details.innerText = ` ${a.name.title} ${a.name.first} ${a.name.last}`;
};

user.addEventListener('mouseover', () => {
  display(store[0].results[0]);
});
email.addEventListener('mouseover', () => {
  title.innerText = 'My email address is';
  details.innerText = ` ${store[0].results[0].email}`;
});
birthday.addEventListener('mouseover', () => {
  title.innerText = 'My birthday is';
  details.innerText = ` ${store[0].results[0].dob.date.slice(0, 10)}`;
});

address.addEventListener('mouseover', () => {
  title.innerText = 'My address is';
  details.innerText = ` ${store[0].results[0].location.street.number} ${store[0].results[0].location.street.name}`;
});

phone.addEventListener('mouseover', () => {
  title.innerText = 'My phone number is';
  details.innerText = ` ${store[0].results[0].phone} `;
});

password.addEventListener('mouseover', () => {
  title.innerText = 'My password is';
  details.innerText = ` ${store[0].results[0].login.password} `;
});
