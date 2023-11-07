import { ResponseHeaders } from "./Type/ResponseHeaders";
export interface ResponseInterface {
    headers(): ResponseHeaders;
    setCookie(name: string, value: string, options?: {
        domain?: string;
        encode?: (value: string) => string;
        expires?: Date;
        httpOnly?: boolean;
        maxAge?: number;
        path?: string;
        secure?: boolean;
        sameSite?: "strict" | "lax" | "none";
    }): void;
    download(filepath: string, options?: {
        filename?: string;
        maxAge?: number;
        headers?: {
            [key: string]: string;
        };
        cacheControl?: boolean;
    }): void;
    end(): void;
    json(data: any): void;
    redirect(url: string): void;
    redirect(statusCode: number, url: string): void;
    send(body?: any): void;
    sendFile(filepath: string, options?: {
        maxAge?: number;
        lastModifiedEnabled?: boolean;
        headers?: {
            [key: string]: string;
        };
        cacheControl?: boolean;
    }): void;
    setStatus(statusCode: number): this;
}
