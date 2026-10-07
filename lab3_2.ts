abstract class Discount{
    price: number;
    constructor(price:number){
        this.price = price;
    }
    abstract Discount(): void{

    }
}
class FixedDiscount extends Discount{
    Discount(): void {
        console.log("ราคาสุทธิหลังหักส่วนลด")
        return(`ราคาสินค้า ${this.price} - จำนวนส่วนลด`);
    }
}
class PercentageDiscount extends Discount{
    Discount(): void {
        console.log("")
    }
}