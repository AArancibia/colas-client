import { Pipe, PipeTransform } from '@angular/core';
import {assetUrl} from '../../../single-spa/asset-url';

@Pipe({
  name: 'assetUrl',
})
export class AssetUrlPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let path = 'images/';
    return assetUrl(path + value);
  }

}
