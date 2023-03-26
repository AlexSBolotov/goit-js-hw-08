import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
// console.log(galleryItems);

const makeGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
