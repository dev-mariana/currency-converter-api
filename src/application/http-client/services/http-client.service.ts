import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { ApiResponse } from '../entities/api-response';

@Injectable()
export class HttpClientService {
  async getCurrency(from: string): Promise<ApiResponse> {
    const url = process.env.BASE_URL;
    const api_key = process.env.API_KEY;

    try {
      const response = await axios.get(`${url}/v6/${api_key}/latest/${from}`);
      return response.data;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
