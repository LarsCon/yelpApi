const fetch = require('node-fetch');

const defaultHeaders = {
  Accept: 'application/json',
  'Access-Control-Allow-Headers': '*',
};

async function apiFetch(url, options = {}) {
  if (typeof url !== 'string') throw StatusError(INVALID_URL);

  const { method = 'GET', body, params, api } = options;

  const fetchOptions = {
    method: method.toUpperCase(),
    headers: { ...defaultHeaders },
    cache: 'default',
  };

  const apiBaseUrl = YELP_URL;
  const fullURL = urlWithParams(apiBaseUrl + url, params);
  const res = await fetch(fullURL, init);

  if (!res.ok) throw StatusError({ message: `(API FETCH) ${res.status} ${res.statusText}`, status: res.status });

  const contentType = res.headers.get('content-type') || [];
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}

module.exports = apiFetch;