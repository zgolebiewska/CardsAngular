import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Pipe({
  name: 'fetchjson',
  pure: false
})
export class FetchjsonPipe implements PipeTransform {

  private cachedData: any = null;
  private cachedUrl = '';
  constructor(private http: HttpClient) {
  }
  transform(url: string): any{
    if(url !== this.cachedUrl){
      console.log("url cached!");
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe(result => this.cachedData = result);
    }
    else console.log("url uncached");

    return this.cachedData;
  }

}
