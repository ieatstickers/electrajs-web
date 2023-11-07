import { ParsedQueryParams } from "../Type/ParsedQueryParams";
import { ParsedQueryParam } from "../Type/ParsedQueryParam";
import { RequestInterface } from "./RequestInterface";

export class Request implements RequestInterface
{
  private provider: RequestInterface;
  
  public constructor(provider: RequestInterface)
  {
    this.provider = provider;
  }
  
  public cookies(): {
    getAll(): { [key: string]: string };
    get(name: string): string;
    has(name: string): boolean;
  }
  {
    return this.provider.cookies();
  }
  
  public routeParams(): {
    getAll(): { [key: string]: string };
    get(name: string): string;
    has(name: string): boolean;
  }
  {
    return this.provider.routeParams();
  }
  
  public queryParams(): {
    getAll(): ParsedQueryParams;
    get(name: string): ParsedQueryParam;
    has(name: string): boolean;
  }
  {
    return this.provider.queryParams();
  }
  
  public getBody(): { [key: string]: string | number | boolean }
  {
    return this.provider.getBody();
  }
  
  public getHost(): string
  {
    return this.provider.getHost();
  }
  
  public getHostname(): string
  {
    return this.provider.getHostname();
  }
  
  public getIp(): string
  {
    return this.provider.getIp();
  }
  
  public getPath(): string
  {
    return this.provider.getPath();
  }
  
  public getProtocol(): string
  {
    return this.provider.getProtocol();
  }
  
  public getHeader(name: string): string
  {
    return this.provider.getHeader(name);
  }
  
  public isSecure(): boolean
  {
    return this.provider.isSecure();
  }
}
