import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImgURL'
})
export class DefaultImgURLPipe implements PipeTransform {

  transform(args: string,defaultImgURL: string): string {
    if(args=='')
    {
      return defaultImgURL;
    }
    return args;
  }

}
