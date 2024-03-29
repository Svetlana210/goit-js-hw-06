const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('ul.gallery');

const createGallery = images.map(image =>
{
 return `<li><img src = '${image.url}' alt = '${image.alt}' width = '250' height = '180'></li>`
}).join('');

galleryEl.style.listStyle = 'none';
galleryEl.style.display = 'flex';
galleryEl.style.gap = '30px'
galleryEl.insertAdjacentHTML('beforeEnd', createGallery);
console.log(galleryEl)



