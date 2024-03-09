import { stringify } from 'querystring'

export const DEFAULT_QUERY_CONFIG = {
  useErrorBoundary: true,
}

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const paramsSerializer = (params: Record<string, any>) => {
  return stringify(params ?? {}, '&', '=')
}
