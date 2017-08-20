'use strict';

var PICS_COUNT = 25;
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var COMMENTS_ARR = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
// Получение индекса элемента из массива любой длины
var getElementIndex = function (length, ind) {
  return ind % length;
};
// Получение случайного числа от минимального до максимального (включая максимальное)
// +1 нужно для включения максимального числа
var getRandomNum = function (min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};
// Создание объекта описания фотографии
var createPicDescObject = function (index) {
  return {
    'url': 'photos/' + (getElementIndex(PICS_COUNT, index) + 1) + '.jpg', // +1 нужно, когда возврается 0, т.к имя картинки не может быть "00"
    'likes': getRandomNum(MIN_LIKES, MAX_LIKES),
    'comments': COMMENTS_ARR[getRandomNum(1, COMMENTS_ARR.length)]
  };
};
// Сборка массива из 25 объектов
var picDescArr = [];
var putObjectToArray = function () {
  for (var i = 0; i < PICS_COUNT; i++) {
    picDescArr.push(createPicDescObject(i));
  }
};
putObjectToArray();
// Находим шаблон и клонируем его данные
var pictureTemplate = document.querySelector('#picture-template');
var pictureTemplateContent = pictureTemplate.content ? pictureTemplate.content : pictureTemplate;
var createDomElement = function (el) {
  var picElement = pictureTemplateContent.cloneNode(true);
  picElement.querySelector('img').setAttribute('src', el.url);
  picElement.querySelector('span.picture-likes').textContent = el.likes;
  picElement.querySelector('span.picture-comments').textContent = el.comments;
  return picElement;
};
// Отрисовываем DOM-элементы в блок .pictures
var renderDomElements = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < picDescArr.length; j++) {
    fragment.appendChild(createDomElement(picDescArr[j]));
  }
  document.querySelector('.pictures').appendChild(fragment);
};
renderDomElements();
// Скрываем форму кадрирования изображения
document.querySelector('.upload-overlay').classList.add('hidden');
// Заполняем и показываем элемент .gallery-overlay
var fillAndShowGalleryOverlay = function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  galleryOverlay.querySelector('gallery-overlay-image').setAttribute('src', picDescArr[0].url);
  galleryOverlay.querySelector('likes-count').textContent = picDescArr[0].likes;
  galleryOverlay.querySelector('comments-count').textContent = picDescArr[0].comments;
  galleryOverlay.classList.remove('hidden');
};
fillAndShowGalleryOverlay();
