import type { InternalAxiosRequestConfig } from "axios"
import Axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig,
} from "axios"
import { ContentTypeEnum, ResultEnum } from "@/interfaces/requestEnum"
import { toast } from "sonner"

import { useAuthStore } from "@/stores/authStore"
import { USER_TOKEN } from "@/constants"
import { t } from "i18next"

// default config
const configDefault = {
  headers: {
    "Content-Type": ContentTypeEnum.JSON,
  },
  timeout: 6000,
  baseURL: import.meta.env.VITE_BASE_API,
  data: {},
}

async function requestHandler(
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  const token = useAuthStore.getState().auth.token
  if (token) config.headers.set(USER_TOKEN, token)

  return config
}

async function responseHandler(
  response: AxiosResponse
): Promise<AxiosResponse> {
  const { data } = response
  const { code, msg } = data
  if (code !== ResultEnum.SUCCESS) {
    toast.error(msg)
  }
  return response
}

async function responseErrorHandler(error: AxiosError): Promise<AxiosError> {
  // HTTP 状态码
  const status = error.response?.status
  const statusMessages: Record<number, string> = {
    400: "400",
    401: "401",
    403: "403",
    408: "408",
    500: "500",
    501: "501",
    502: "502",
    503: "503",
    504: "504",
    505: "505",
  }
  // 处理 HTTP 网络错误
  const message =
    status === 404
      ? `${t(statusMessages[status], { ns: "request" })} ${error.response?.config?.url}`
      : status
        ? t(statusMessages[status], { ns: "request" })
        : t("default", { ns: "request" })

  console.log(message)
  toast(message)
  return Promise.reject(error)
}

class Request {
  private static axiosInstance: AxiosInstance
  private static axiosConfigDefault: AxiosRequestConfig

  constructor(config: AxiosRequestConfig = configDefault) {
    Request.axiosConfigDefault = config
    Request.axiosInstance = Axios.create(config)
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  private httpInterceptorsRequest() {
    Request.axiosInstance.interceptors.request.use(
      requestHandler,
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  private httpInterceptorsResponse() {
    Request.axiosInstance.interceptors.response.use(
      responseHandler,
      responseErrorHandler
    )
  }

  // common request
  public request<T>(paramConfig: AxiosRequestConfig): Promise<T> {
    const config = { ...Request.axiosConfigDefault, ...paramConfig }
    return new Promise((resolve, reject) => {
      Request.axiosInstance
        .request<T>(config)
        .then((response) => {
          resolve(response as unknown as T)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default new Request()
