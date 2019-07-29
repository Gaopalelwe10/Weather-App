import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

   // transform(array: any[], text: string='', colomn:string): any[] {
    transform(array: any[], text: string=''): any[] {
          // console.log(array);
      if(text === ''){
        return null;
      }
  
      return array.filter(item => {
        return item.name.toLowerCase().includes(text.toLowerCase());
      });
  }

}
