import { ResponseInterface } from "./ResponseInterface";
import { ResponseHeaders } from "./Type/ResponseHeaders";
export declare class Response implements ResponseInterface {
    private provider;
    constructor(provider: ResponseInterface);
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
    redirect(urlOrStatusCode: string | number, url?: string): void;
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
