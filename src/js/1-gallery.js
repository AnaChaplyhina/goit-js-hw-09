// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Використовуємо атрибут alt для підписів
  captionDelay: 250,   // Затримка в 250 мс для появи підписів
});

console.log(SimpleLightbox);

const images = [
  {
    href: 'images/image1.jpg',
    src: 'images/thumbs/thumb1.jpg',
    alt: 'Image 1 description',
  },
  {
    href: 'images/image2.jpg',
    src: 'images/thumbs/thumb2.jpg',
    alt: 'Beautiful Image',
  },
];

// Функція для створення розмітки галереї
function createGalleryItems(images) {
  return images
    .map(
      ({ href, src, alt }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${href}">
          <img class="gallery-image" src="${src}" alt="${alt}" />
        </a>
      </li>`
    )
    .join('');
}

// Додаємо елементи галереї в DOM
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItems(images);

// Ініціалізація SimpleLightbox після додавання елементів галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});