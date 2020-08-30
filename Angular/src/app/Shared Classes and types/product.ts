export class Product {
    constructor(public _id?: number,
        public Name?: string,
        public Price?: number,
        public Quantity?: number,
        public catID?: number,
        public Image?: string,
        public brand?:string,
        public model?:number,
        public color?:string,
        public weight?:number,
        public date?:string,
        public details?:string)
    {

    }
}
