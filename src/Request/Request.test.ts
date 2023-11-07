import { RequestInterface } from "./RequestInterface";
import { Request } from "./Request";

class TestRequestProvider implements RequestInterface
{
  cookies = jest.fn().mockReturnValue({
    getAll: jest.fn(),
    get: jest.fn(),
    has: jest.fn(),
  });
  routeParams = jest.fn().mockReturnValue({
    getAll: jest.fn(),
    get: jest.fn(),
    has: jest.fn(),
  });
  queryParams = jest.fn().mockReturnValue({
    getAll: jest.fn(),
    get: jest.fn(),
    has: jest.fn(),
  });
  getBody = jest.fn().mockReturnValue({});
  getHost = jest.fn().mockReturnValue("host");
  getHostname = jest.fn().mockReturnValue("hostname");
  getIp = jest.fn().mockReturnValue("127.0.0.1");
  getPath = jest.fn().mockReturnValue("path");
  getProtocol = jest.fn().mockReturnValue("http");
  getHeader = jest.fn().mockReturnValue("header");
  isSecure = jest.fn().mockReturnValue(false);
}

describe("Request", () => {
  let provider: TestRequestProvider;
  let request: Request;
  
  beforeEach(() => {
    provider = new TestRequestProvider();
    request = new Request(provider);
  });
  
  describe("constructor", () => {
    it("sets the provider", () => {
      expect(request['provider']).toBe(provider);
    });
  });
  
  describe("cookies", () => {
    it("calls the provider's cookies method", () => {
      request.cookies();
      expect(provider.cookies).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.cookies()).toBe(provider.cookies());
    });
  });
  
  describe("routeParams", () => {
    it("calls the provider's routeParams method", () => {
      request.routeParams();
      expect(provider.routeParams).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.routeParams()).toBe(provider.routeParams());
    });
  });
  
  describe("queryParams", () => {
    it("calls the provider's queryParams method", () => {
      request.queryParams();
      expect(provider.queryParams).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.queryParams()).toBe(provider.queryParams());
    });
  });
  
  describe("getBody", () => {
    it("calls the provider's getBody method", () => {
      request.getBody();
      expect(provider.getBody).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getBody()).toBe(provider.getBody());
    });
  });
  
  describe("getHost", () => {
    it("calls the provider's getHost method", () => {
      request.getHost();
      expect(provider.getHost).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getHost()).toBe(provider.getHost());
    });
  });
  
  describe("getHostname", () => {
    it("calls the provider's getHostname method", () => {
      request.getHostname();
      expect(provider.getHostname).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getHostname()).toBe(provider.getHostname());
    });
  });
  
  describe("getIp", () => {
    it("calls the provider's getIp method", () => {
      request.getIp();
      expect(provider.getIp).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getIp()).toBe(provider.getIp());
    });
  });
  
  describe("getPath", () => {
    it("calls the provider's getPath method", () => {
      request.getPath();
      expect(provider.getPath).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getPath()).toBe(provider.getPath());
    });
  });
  
  describe("getProtocol", () => {
    it("calls the provider's getProtocol method", () => {
      request.getProtocol();
      expect(provider.getProtocol).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getProtocol()).toBe(provider.getProtocol());
    });
  });
  
  describe("getHeader", () => {
    it("calls the provider's getHeader method", () => {
      const headerName = "Content-Type";
      request.getHeader(headerName);
      expect(provider.getHeader).toHaveBeenCalledWith(headerName);
      expect(provider.getHeader).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.getHeader("Content-Type")).toBe(provider.getHeader("Content-Type"));
    });
  });
  
  describe("isSecure", () => {
    it("calls the provider's isSecure method", () => {
      request.isSecure();
      expect(provider.isSecure).toBeCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(request.isSecure()).toBe(provider.isSecure());
    });
  });
  
});
