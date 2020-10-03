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

console.log(photo_one.toString());
console.log(photo_two.toString());