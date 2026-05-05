export type Route = {
  path: string
  indexable: boolean
}

export const routes: Route[] = [
  { path: '/', indexable: true },
  { path: '/about', indexable: true },
  { path: '/services', indexable: true },
  { path: '/grooming', indexable: true },
  { path: '/daycare', indexable: true },
  { path: '/boarding', indexable: true },
  { path: '/contact', indexable: true },
]
