import axios from 'axios';
import { envVar } from './envVar';

interface SuksesseResponse {
  access_token: string;
  token_type: string;
}

export class TexasClient {
  async exchangeToken(token: string, target: string): Promise<SuksesseResponse> {
    const exchangeTokenUrl = envVar('NAIS_TOKEN_EXCHANGE_ENDPOINT');

    const requestBody = {
      identity_provider: 'tokenx',
      target: target,
      user_token: token,
    };

    const response = await axios.post<SuksesseResponse>(exchangeTokenUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  }

  async validateToken(token: string): Promise<SuksesseResponse> {
    const validateTokenUrl = envVar('NAIS_TOKEN_INTROSPECTION_ENDPOINT');

    const requestBody = {
      identity_provider: 'tokenx',
      token: token,
    };

    const response = await axios.post<SuksesseResponse>(validateTokenUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  }
}
