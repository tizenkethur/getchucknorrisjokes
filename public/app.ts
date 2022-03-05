import { Joke } from '../types';

('use strict');

const base_url = 'http://api.icndb.com/jokes/random';
const div = document.querySelector('#joke-container');
const btn = document.querySelector('button');

function getJokes(): Promise<Joke> {
  return fetch(`${base_url}`)
    .then((res) => res.json())
    .then((joke) => {
      return joke;
    })
    .catch((err) => console.error('Err', err));
}

function createPElement(value: string): HTMLParagraphElement {
  const p = document.createElement('p');
  p.innerText = value;
  return p;
}

function renderJokes(): void {
  getJokes().then((joke) => {
    const myJoke = Object.values(Object.values(joke.value));
    const resultJoke = myJoke[1];

    div?.appendChild(createPElement(`${resultJoke}`));
  });
}

btn?.addEventListener('click', () => {
  renderJokes();
});

