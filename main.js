/*
    Name: Surakshya Pokharel
    File: main.js
    Date: 8/2/2024
    Description: Image gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['Images/pic1.jpg', 'Images/pic2.jpg', 'Images/pic3.jpg', 'Images/pic4.jpg', 'Images/pic5.jpg'];
const alts = {
  'Images/pic1.jpg' : 'Closeup of a human eye',
  'Images/pic2.jpg' : 'Rock that looks like a wave',
  'Images/pic3.jpg' : 'Purple and white pansies',
  'Images/pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'Images/pic5.jpg' : 'Large moth on a leaf'
}


for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image); 
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}



btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
