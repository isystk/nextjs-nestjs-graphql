export type Data<T> = {
  id: string
  data: T
}

export type Posts = {
  [id: string]: Data<Post>
}

export type Post = {
  userId: string
  title: string
  description: string
  createdAt: Date | null
  photo: string
}

export type Parts = {
  isShowOverlay: boolean
  isShowLoading: boolean
  isSideMenuOpen: boolean
}

export type User = {
  id: number
  name: string
  token: string
}
