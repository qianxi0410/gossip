declare module 'gossip' {
  export interface User {
    login: string
    nick_name: string
    avatar_url: string
    bio: string
  }

  export interface Post {
    id: number
    title: string
    created_at: string
    updated_at: string
    content: string
  }
}
