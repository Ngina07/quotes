export class Quote {
   showDetail: boolean
   constructor(public id:number, public quote: string, public author: string, public submittedby: string, public completeDate: Date){
        this.showDetail=false;
    }
}
