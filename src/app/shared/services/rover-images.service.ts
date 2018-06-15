import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { ImageResponse } from '../models/image-model';

@Injectable()
export class RoverImagesService {

  constructor(
    private http: HttpClient,
  ) { }


  public rovers = ['curiosity', 'opportunity'];
  public cameras = ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam', 'pancam', 'minites'];

  private urlBuilder(params: string) {
    return `${environment.roverApiUrl}${params}&api_key=${environment.roverApiKey}`;
  }

  public getRandom(list: any) {
    return list[Math.floor(Math.random() * list.length)];
  }

  private yestrdayDate() {
    const day = new Date();
    return [day.getFullYear(), day.getMonth() + 1, day.getDate() - 1].join('-');
  }

  public getImagesByDate(rover: string, date: string): Observable<ImageResponse> {
    const url = this.urlBuilder(`${rover}/photos?earth_date=${date}`);
    console.log(url);
    return this.http.get<ImageResponse>(url);
  }

  public getImageOfTheDay(): Observable<ImageResponse> {
    const yesterday = this.yestrdayDate();
    const rover = this.getRandom(this.rovers);
    const camera = this.getRandom(this.cameras);
    const url = this.urlBuilder(`${rover}/photos?earth_date=${yesterday}&camera=${camera}`);

    console.log(url);

    return this.http.get<ImageResponse>(url);
  }

  public getImages(rover: string, camera: string): Observable<ImageResponse> {
    const yesterday = this.yestrdayDate();
    const url = this.urlBuilder(`${rover}/photos?earth_date=${yesterday}&camera=${camera}`);

    console.log(url);

    return this.http.get<ImageResponse>(url);
  }


}
