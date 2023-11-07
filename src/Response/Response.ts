import { ResponseInterface } from "./ResponseInterface";
import { ResponseHeaders } from "./Type/ResponseHeaders";

export class Response implements ResponseInterface
{
  private provider: ResponseInterface;
  
  public constructor(provider: ResponseInterface)
  {
    this.provider = provider;
  }
  
  public headers(): ResponseHeaders
  {
    return this.provider.headers();
  }
  
  public setCookie(
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
  ): void
  {
    this.provider.setCookie(name, value, options);
  }
  
  public download(
    filepath: string,
    options?: {
      filename?: string; // default: file name from filepath
      maxAge?: number; // Defaults to 0
      headers?: { [key: string]: string };
      cacheControl?: boolean; // default: true
    }
  ): void
  {
    this.provider.download(filepath, options);
  }
  
  public end(): void
  {
    this.provider.end();
  }
  
  public json(data: any): void
  {
    this.provider.json(data);
  }
  
  public redirect(urlOrStatusCode: string | number, url?: string): void
  {
    if (typeof urlOrStatusCode === "number" && url)
    {
      this.provider.redirect(urlOrStatusCode, url);
    }
    else if (typeof urlOrStatusCode === "string")
    {
      this.provider.redirect(urlOrStatusCode);
    }
    else
    {
      throw new Error("Invalid redirect parameters");
    }
  }
  
  public send(body?: any): void
  {
    this.provider.send(body);
  }
  
  public sendFile(
    filepath: string,
    options?: {
      maxAge?: number, // default: 0
      lastModifiedEnabled?: boolean, // default: true
      headers?: { [key: string]: string },
      cacheControl?: boolean, // default: true
    }
  ): void
  {
    this.provider.sendFile(filepath, options);
  }
  
  public setStatus(statusCode: number): this
  {
    this.provider.setStatus(statusCode);
    return this;
  }
  
}
