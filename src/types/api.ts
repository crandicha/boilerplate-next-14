export interface APIResponseMetadata {
  offset?: number
  limit?: number
  total?: number
}

export interface APIResponse<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TData = Record<string, any>,
  TMeta = APIResponseMetadata,
> {
  data: TData
  meta: TMeta
}

export interface TokenData {
  userId: string
  email: string
  guruToken: string
  expiredAt: string
  idToken?: string
}
