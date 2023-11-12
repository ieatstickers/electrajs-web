import { ResponseHeaders } from "./Type/ResponseHeaders";

export interface ResponseInterface
{
  headers(): ResponseHeaders;
  
  setCookie(
    name: string,
    value: string,
    options?: {
      domain?: string; // default: domain name of the app
      encode?: (value: string) => string; // default: encodeURIComponent
      expires?: Date; // default: session cookie
      httpOnly?: boolean;
      maxAge?: number;
      path?: string; // default: "/"
      secure?: boolean;
      sameSite?: "strict" | "lax" | "none";
    }
  ): void;
  
  download(
    filepath: string,
    options?: {
      filename?: string; // default: file name from filepath
      maxAge?: number; // Defaults to 0
      headers?: { [key: string]: string };
      cacheControl?: boolean; // default: true
    }
  ): Promise<void>;
  
  end(): void;
  
  json(data: any): void;
  
  redirect(url: string): void;
  redirect(statusCode: number, url: string): void;
  
  send(body?: any): void;
  
  sendFile(
    filepath: string,
    options?: {
      maxAge?: number, // default: 0
      lastModifiedEnabled?: boolean, // default: true
      headers?: { [key: string]: string },
      cacheControl?: boolean, // default: true
    }
  ): void;
  
  setStatus(statusCode: number): this;
}
