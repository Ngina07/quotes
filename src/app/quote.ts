export class Quote {
   showDetail: boolean
   constructor( public quote: string,
    public author: string){
        this.showDetail=false;
    }
}
