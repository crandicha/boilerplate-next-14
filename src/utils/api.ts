import type { AxiosError, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type {
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { useInfiniteQuery, useMutation, useQuery } from 'react-query'

import {
  DEFAULT_HEADERS,
  DEFAULT_QUERY_CONFIG,
  paramsSerializer,
} from 'configs/api'

import type { APIResponse } from 'types/api'

export type TQueryApiConfig<
  TQueryFnData = unknown,
  TQueryFnError = AxiosError,
> = {
  axiosConfig?: AxiosRequestConfig
  queryConfig?: UseQueryOptions<TQueryFnData, TQueryFnError>
  queryKey?: QueryKey | null
}

export type TInfiniteQueryApiConfig<
  TQueryFnData = unknown,
  TQueryFnError = AxiosError,
> = TQueryApiConfig & {
  queryConfig?: UseInfiniteQueryOptions<TQueryFnData, TQueryFnError>
}

export type TMutationApiConfig<
  TData = unknown,
  TError = Error,
  TVariables = void,
> = {
  axiosConfig?: AxiosRequestConfig
  mutationConfig?: UseMutationOptions<TData, TError, TVariables>
}

export const api = async <T>(
  path: string,
  options: AxiosRequestConfig,
): Promise<T> => {
  const headers = {
    ...DEFAULT_HEADERS,
    ...(options.headers || {}),
  }

  return axios({
    headers,
    paramsSerializer: options?.paramsSerializer ?? paramsSerializer,
    url: path,
    ...options,
  })
}

export function useQueryApi<TQueryFnData = unknown, TQueryFnError = AxiosError>(
  path: string,
  {
    axiosConfig = {},
    queryConfig = {},
    queryKey = null,
  }: TQueryApiConfig<TQueryFnData, TQueryFnError> = {
    axiosConfig: {},
    queryConfig: {},
    queryKey: null,
  },
): UseQueryResult<TQueryFnData, TQueryFnError> {
  return useQuery<TQueryFnData, TQueryFnError>(
    queryKey ?? [path, ...(axiosConfig?.params ? [axiosConfig?.params] : [])],
    (): Promise<TQueryFnData> =>
      api<TQueryFnData>(path, { method: 'GET', ...axiosConfig }),
    {
      ...DEFAULT_QUERY_CONFIG,
      ...queryConfig,
    },
  )
}

export const useInfiniteQueryApi = <
  TQueryFnData extends APIResponse,
  TQueryFnError = AxiosError,
>(
  path: string,
  limit = 10,
  {
    axiosConfig = {},
    queryConfig = {},
    queryKey = null,
  }: TInfiniteQueryApiConfig<TQueryFnData, TQueryFnError> = {
    axiosConfig: {},
    queryConfig: {},
    queryKey: null,
  },
): UseInfiniteQueryResult<TQueryFnData, TQueryFnError> => {
  return useInfiniteQuery<TQueryFnData, TQueryFnError>(
    queryKey ?? [path, ...(axiosConfig?.params ? [axiosConfig?.params] : [])],
    ({ pageParam = 0 }): Promise<TQueryFnData> => {
      const isPathContainSearch = path?.includes('?')
      const additionalQuery = `${
        isPathContainSearch ? '&' : '?'
      }limit=${limit}&offset=${pageParam}`

      return api<TQueryFnData>(`${path}${additionalQuery}`, {
        method: 'GET',
        ...axiosConfig,
      })
    },
    {
      getNextPageParam: ({ meta }) => {
        const total = meta?.total ?? 0
        const offset = meta?.offset ?? 0
        return total >= offset + limit ? offset + limit : undefined
      },
      ...DEFAULT_QUERY_CONFIG,
      ...queryConfig,
      cacheTime: 0,
      staleTime: 0,
    },
  )
}

export function useMutationApi<TData, TError = Error, TVariables = void>(
  path: string | ((data: TVariables) => string),
  {
    axiosConfig = {},
    mutationConfig = {},
  }: TMutationApiConfig<TData, TError, TVariables> = {
    axiosConfig: {},
    mutationConfig: {},
  },
) {
  return useMutation<TData, TError, TVariables>(
    (data: TVariables): Promise<TData> => {
      const pathApi = typeof path === 'function' ? path(data) : path
      return api<TData>(pathApi, { ...axiosConfig, ...(data ? { data } : {}) })
    },
    mutationConfig,
  )
}
