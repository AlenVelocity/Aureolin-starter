import { Provider } from 'aureolin'
import axios, { AxiosRequestConfig } from 'axios'
@Provider('http')
export default class HTTPProvider {
    public get = async <T = unknown>(url: string, options?: AxiosRequestConfig): Promise<T> => {
        const { data } = await axios.get<T>(url, options)
        return data
    }

    public post = async <T = unknown>(
        url: string,
        data?: Record<string, unknown>,
        options?: AxiosRequestConfig
    ): Promise<T> => {
        const { data: response } = await axios.post<T>(url, data, options)
        return response
    }

    public put = async <T = unknown>(
        url: string,
        data?: Record<string, unknown>,
        options?: AxiosRequestConfig
    ): Promise<T> => {
        const { data: response } = await axios.put<T>(url, data, options)
        return response
    }

    public delete = async <T = unknown>(url: string, options?: AxiosRequestConfig): Promise<T> => {
        const { data: response } = await axios.delete<T>(url, options)
        return response
    }

    public patch = async <T = unknown>(
        url: string,
        data?: Record<string, unknown>,
        options?: AxiosRequestConfig
    ): Promise<T> => {
        const { data: response } = await axios.patch<T>(url, data, options)
        return response
    }
}
