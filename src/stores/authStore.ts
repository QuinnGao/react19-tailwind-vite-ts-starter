import { create } from "zustand"
import Cookies from "js-cookie"
import { USER_TOKEN } from "@/constants"

interface AuthState {
  auth: {
    token: string | null
    setToken: (token: string | null) => void
    clearToken: () => void
  }
}

export const useAuthStore = create<AuthState>((set) => {
  const token = Cookies.get(USER_TOKEN) || ""
  return {
    auth: {
      token,
      setToken: (token) => {
        set((state) => {
          Cookies.set(USER_TOKEN, JSON.stringify(token))
          return { ...state, token }
        })
      },
      clearToken: () =>
        set((state) => {
          Cookies.remove(USER_TOKEN)
          return { ...state, token: "" }
        }),
    },
  }
})
