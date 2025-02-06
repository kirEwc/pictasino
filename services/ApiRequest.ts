interface HttpRequest<T = unknown> {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  headers?: Record<string, string>;
  body?: T;
}

const ApiRequest = async <T = unknown>({ method, url, body, headers }: HttpRequest<T>) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response;
};

export default ApiRequest;
