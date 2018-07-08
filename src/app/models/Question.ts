export class Question  {

    question: string;
    answers: Option[]; 
}
export class Option{
    name:string;
    id:number;
    isTrue:boolean;
}

    // question=[
    //     {age:12, name:'user1', isMarried:false},
    //     {age:34, name:'user1', isMarried:true},
    //     {age:54, name:'user1', isMarried:true},
    //     {age:15, name:'user1', isMarried:false},
    //     {age:37, name:'user1', isMarried:true}
      
    //   ]