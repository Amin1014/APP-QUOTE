

export class Quote {
    likes: number | undefined;
    dislikes: number | undefined;
    
    
  
    constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date, public showInfo :boolean){ 
  
  }
  
  }