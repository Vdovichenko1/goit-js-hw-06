// + Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// + Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// + Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', OnFormSubmit);

function OnFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  if (mail.length === 0 || password.length === 0) {
    alert('Не заповнено поле');
    return;
  }
  form.reset();

  console.log(formData);
}
