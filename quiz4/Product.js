export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1,subTotal){
        this.prodId = prodId;
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.totalBuy = totalBuy;
        this.subTotal = price*totalBuy;
    }

    setPrice(price){
       this.price =price;
       this.subTotal = price * this.totalBuy;

    }

    setTotalBuy(total){
       this.total =total;
       this.subTotal = this.price * total;
        

    }

    toString(){

        return `${this.prodId} ${this.prodName}, category: ${this.category}, Harga : ${this.price}, Total buy : ${this.totalBuy}, Sub total : ${this.subTotal}`;
    
    }

}