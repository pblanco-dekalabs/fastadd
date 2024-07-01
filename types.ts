export interface RouteInfo {
  type: 'route',
  root: string,
  crud: boolean,
  children: {
    name: string,
    needsAuth: boolean,
    method: string
  }[]
}

export type BootInfo = RouteInfo