//const { photo, MattedPhoto, FramedPhoto } = require("./photo");

import {photo,MattedPhoto,FramedPhoto} from `./photo`;

const photo_one = new photo();
const photo_two = new photo(4,6);
console.log('============ Printing of photo objects =========')
console.log(photo_one.toString());
console.log(photo_two.toString());
console.log('================================================')
const photo_three = new MattedPhoto(10,15,'black');
const photo_four = new MattedPhoto(12,18,'Gray');
console.log('======= Printing of Matted photo objects ======')
console.log(photo_three.toString());
console.log(photo_four.toString());
console.log('================================================')

const photo_five = new FramedPhoto(8 , 22 , 'Silver' , 'modern');
const photo_six = new FramedPhoto(10 , 25 , 'Gold' , 'Classic');
console.log('======= Printing of Framed photo objects ======')
console.log(photo_five.toString());
console.log(photo_six.toString());
console.log('================================================')