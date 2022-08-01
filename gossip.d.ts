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
    author: string
    reactions: {
      "+1": number
      "-1": number
      "confused": number
      "eyes": number
      "heart": number
      "hooray": number
      "laugh": number
      "rocket": number
      "total_count": number
    },
    labels: string[]
  }
  
  export type Theme = 'light' | 'dark'
  
  import { NextPage } from "next"

  export type NextPageWithLayout<T={}> = NextPage<T> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }
}

