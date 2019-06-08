import {Pipe,PipeTransform} from '@angular/core';

@Pipe({

  name: 'myPipes' ,
  pure : false
})

export class myPipe implements PipeTransform{

transform(value:any,num1:number):any{

if(num1 %2 == 0){
    return 'number is even'+ value;
}else {
    return 'number is odd'+value;
}

}

}