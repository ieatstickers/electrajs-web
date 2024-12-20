import { ParsedQueryParams } from "./Type/ParsedQueryParams";
import { ParsedQueryParam } from "./Type/ParsedQueryParam";

export interface RequestInterface
{
  cookies(): {
    getAll(): Record<string, string>;
    get(name: string): string;
    has(name: string): boolean;
  };
  
  routeParams(): {
    getAll(): Record<string, string>;
    get(name: string): string | null;
    has(name: string): boolean;
  };
  
  queryParams(): {
    getAll(): ParsedQueryParams;
    get(name: string): ParsedQueryParam | null;
    has(name: string): boolean;
  };
  
  getBody(): any;
  
  getHost(): string;
  
  getHostname(): string;
  
  getIp(): string | null;
  
  getPath(): string;
  
  getProtocol(): string;
  
  getHeader(name: string): string | null;
  
  isSecure(): boolean;
  
  get(name: string): any;
  
  set(name: string, value: any): this;
}
