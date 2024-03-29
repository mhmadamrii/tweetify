import {
  FilteredUser,
  UserLoginResponse,
  UserResponse,
} from '../lib/interfaces';

// const SERVER_ENDPOINT = 'http://localhost:3000';
const environment = process.env.NODE_ENV;
const SERVER_ENDPOINT =
  environment === 'development'
    ? 'http://localhost:3000'
    : 'https://scintillating-salmiakki-ec4e99.netlify.app';
// : 'https://project-21-tweetify.vercel.app';
console.log('process env', process.env.NODE_ENV);
console.log('server endpoint', SERVER_ENDPOINT);

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || '';
  const isJson = contentType.includes('application/json');
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

export async function apiRegisterUser(
  credentials: string,
): Promise<FilteredUser> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: credentials,
  });

  return handleResponse<UserResponse>(response).then(
    (data) => data.data.user,
  );
}

export async function apiLoginUser(
  credentials: string,
): Promise<string> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: credentials,
  });
  console.log('user response', response);

  return handleResponse<UserLoginResponse>(response).then(
    (data) => data.token,
  );
}

export async function apiLogoutUser(): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<void>(response);
}

export async function apiGetAuthUser(
  token?: string,
): Promise<FilteredUser> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers,
  });

  return handleResponse<UserResponse>(response).then(
    (data) => data.data.user,
  );
}
