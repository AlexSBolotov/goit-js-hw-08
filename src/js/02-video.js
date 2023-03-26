import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
// console.log(iframe);

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime({ seconds }) {
  //   console.log(seconds);
  localStorage.setItem('videoplayer-current-time', `${seconds}`);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
