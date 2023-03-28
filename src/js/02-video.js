import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
// console.log(iframe);

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, `${seconds}`);
}

// player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

let localStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(localStorageValue ? localStorageValue : 0);
