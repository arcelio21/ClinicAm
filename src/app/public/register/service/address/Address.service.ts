import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { DistrictGet } from 'src/app/shared/model/DistrictGet';
import { ProvinceGet } from 'src/app/shared/model/ProvinceGet';
import { RequestApi } from 'src/app/shared/model/RequestApi';
import { VillageGet } from 'src/app/shared/model/VillageGet';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddressService {

  readonly optionsHttp = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as const,
    responseType: 'json' as const,
    withCrdentials: true,
  };



  constructor(private httpClient: HttpClient) {}

  public getProvince(): Observable<ProvinceGet[]> {
    return this.httpClient
      .get<RequestApi<ProvinceGet[]>>(environment.URL + 'province', this.optionsHttp)
      .pipe(
        map((response) => {
          return response.body?.data || [];
        })
      );
  }

  public getDistrictByIdProvince(
    idProvince: number
  ): Observable<DistrictGet[]> {
    return this.httpClient
      .get<RequestApi<DistrictGet[]>>(
        `${environment.URL}district/byprovince/${idProvince}`,
        this.optionsHttp
      )
      .pipe(
        map((response) => {
          return response.body?.data || [];
        })
      );
  }

  public getVillageByIdDistrict(idDistrict: number): Observable<VillageGet[]> {
    return this.httpClient
      .get<RequestApi<VillageGet[]>>(
        `${environment.URL}village/bydistrict/${idDistrict}`,
        this.optionsHttp
      )
      .pipe(
        map((response) => {
          return response.body?.data || [];
        }),
        // catchError((err) => {
        //   console.log(err);
        //   return [];
        // })
      );
  }
}
