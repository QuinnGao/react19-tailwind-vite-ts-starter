import type { InternalAxiosRequestConfig } from "axios"
import axios from "axios"
import { toast } from "sonner"

import { useAuthStore } from "@/stores/authStore"
import { USER_TOKEN } from "@/constants"
// import { history } from '@/routes/history';

async function requestHandler(
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  const token = useAuthStore.getState().auth.token

  if (token) config.headers.set(USER_TOKEN, token)

  return config
}

const instance = axios.create({
  timeout: 6000,
})

instance.interceptors.request.use(requestHandler)

export default instance
