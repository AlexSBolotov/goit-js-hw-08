import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(collectFormData, 500));

fillEmailOnRefresh(LOCALSTORAGE_KEY);
fillMessageOnRefresh(LOCALSTORAGE_KEY);

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  console.log(load(LOCALSTORAGE_KEY));

  remove(LOCALSTORAGE_KEY);
}

function collectFormData(e) {
  formData[e.target.name] = e.target.value;

  //   console.log(formData);
  save(LOCALSTORAGE_KEY, formData);
}

function fillEmailOnRefresh(key) {
  const dataToFill = load(key);
  //   form.email.value = dataToFill.email || '';
  if (dataToFill.email) {
    form.email.value = dataToFill.email;
  }
}
function fillMessageOnRefresh(key) {
  const dataToFill = load(key);
  //   form.message.value = dataToFill.message || '';
  if (dataToFill.message) {
    form.message.value = dataToFill.message;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error.message);
  }
}

function load(key) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData === null ? undefined : JSON.parse(savedData);
  } catch (error) {
    console.error(error.message);
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error.message);
  }
}
