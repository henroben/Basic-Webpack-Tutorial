import big from '../assets/big.jpeg'; // need to import so webpack knows about it
import small from '../assets/small.jpeg'; // need to import so webpack knows about it
import '../styles/image_viewer.css'; // need to import so webpack knows about it

const image = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
image.src = small;

document.getElementById('image').appendChild(image);

const bigImage = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
bigImage.src = big;

document.getElementById('image').appendChild(bigImage);