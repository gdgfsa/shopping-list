export class ShoppingItem {
    id: number;
    name: string='';
    bought: boolean=false;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
