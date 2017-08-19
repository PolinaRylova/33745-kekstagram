'use strict';

// Создание массива объектов с описанием фотографий
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
var getElementIndex = function (length, ind) {
  return ind % length;
};
var getRandomNum = function (min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min; // +1 нужно для включения максимального числа
};
var createPicDescObject = function (index) {
  return {
    'url': 'photos/' + (getElementIndex(PICS_COUNT, index) + 1) + '.jpg', // +1 нужно, когда возврается 0, т.к имя картинки не может быть "00"
    'likes': getRandomNum(MIN_LIKES, MAX_LIKES),
    'comments': COMMENTS_ARR[getRandomNum(1, COMMENTS_ARR.length)]
  };
};
var picDescArr = [];
var putObjectToArray = function () {
  for (var i = 0; i < PICS_COUNT; i++) {
    picDescArr.push(createPicDescObject(i));
  }
};
putObjectToArray();// Сборка массива из 25 объектов
