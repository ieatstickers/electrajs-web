import { ParsedQueryParams } from "../Type/ParsedQueryParams";
import { ParsedQueryParam } from "../Type/ParsedQueryParam";
import { RequestInterface } from "./RequestInterface";
export declare class Request implements RequestInterface {
    private provider;
    constructor(provider: RequestInterface);
    cookies(): {
        getAll(): {
            [key: string]: string;
        };
        get(name: string): string;
        has(name: string): boolean;
    };
    routeParams(): {
        getAll(): {
            [key: string]: string;
        };
        get(name: string): string;
        has(name: string): boolean;
    };
    queryParams(): {
        getAll(): ParsedQueryParams;
        get(name: string): ParsedQueryParam;
        has(name: string): boolean;
    };
    getBody(): {
        [key: string]: string | number | boolean;
    };
    getHost(): string;
    getHostname(): string;
    getIp(): string;
    getPath(): string;
    getProtocol(): string;
    getHeader(name: string): string;
    isSecure(): boolean;
}
