import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ApiResponse } from '../entities/api-response';

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {}

  getCurrency(from: string): Observable<AxiosResponse<ApiResponse[]>> {
    const url = process.env.BASE_URL;
    const api_key = process.env.API_KEY;

    try {
      return this.httpService.get(`${url}/${api_key}/latest/${from}`);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
