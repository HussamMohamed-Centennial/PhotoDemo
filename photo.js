// console.log(`test`);
class photo {
    constructor(width = 8 , height = 10) {
        this.width = width;
        this.height = height;
    }

    price() {
        let finalPrice;
        if((this.width ==8)&&(this.height==10)) {
            finalPrice= 4;
        } else  {
            if((this.width ==10)&&(this.height==12)) {
                finalPrice= 6;
            } else {
                finalPrice= 10;
            }           
        }
        return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
    }
}

const photo_one = new photo();
const photo_two = new photo(4,6);
console.log('============ Printing of photo objects =========')
console.log(photo_one.toString());
console.log(photo_two.toString());
console.log('================================================')

class MattedPhoto extends photo {
    constructor(width ,height , color){
        super(width,height);
        this.color = color;
    }

    price(){
        const MattedPhotoPrice = 10;
        return super.price() + MattedPhotoPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs ${this.price()}`;
    }
}

class FramedPhoto extends photo {
    constructor(width,height,material,style){
        super(width,height);
        this.material = material;
        this.style = style;
    }

    price(){
        const FramedPhotoPrice = 25;
        return super.price() + FramedPhotoPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} ${this.material} Framed photo , Then style is ${this.style} and it cost ${this.price()}`;
    }
}
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

