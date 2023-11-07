import { Response } from './Response';
import { ResponseInterface } from "./ResponseInterface";

class TestResponseProvider implements ResponseInterface
{
  headers = jest.fn().mockReturnValue({
    get: jest.fn(),
    set: jest.fn()
  });
  setCookie = jest.fn();
  download = jest.fn();
  end = jest.fn();
  json = jest.fn();
  redirect = jest.fn();
  send = jest.fn();
  sendFile = jest.fn();
  setStatus = jest.fn(() => this);
}

describe("Response", () => {
  let provider: TestResponseProvider;
  let response: Response;
  
  beforeEach(() => {
    provider = new TestResponseProvider()
    response = new Response(provider);
  });
  
  describe("constructor", () => {
    it("sets the provider", () => {
      expect(response['provider']).toBe(provider);
    });
  });
  
  describe("headers", () => {
    it("calls the provider's headers method", () => {
      response.headers();
      expect(provider.headers).toHaveBeenCalledTimes(1);
    });
    
    it("returns what the provider returns", () => {
      expect(response.headers()).toBe(provider.headers());
    });
  });
  
  describe("setCookie", () => {
    it("calls the provider's setCookie method with the correct parameters", () => {
      const name = 'token';
      const value = 'abc123';
      const options = { httpOnly: true };
      
      response.setCookie(name, value, options);
      expect(provider.setCookie).toHaveBeenCalledWith(name, value, options);
    });
  });
  
  describe("download", () => {
    it("calls the provider's download method with the correct parameters", () => {
      const filepath = '/path/to/file';
      const options = { filename: 'download.txt' };
      
      response.download(filepath, options);
      expect(provider.download).toHaveBeenCalledWith(filepath, options);
    });
  });
  
  describe("end", () => {
    it("calls the provider's end method", () => {
      response.end();
      expect(provider.end).toHaveBeenCalledTimes(1);
    });
  });
  
  describe("json", () => {
    it("calls the provider's json method with the correct data", () => {
      const data = { key: 'value' };
      response.json(data);
      expect(provider.json).toHaveBeenCalledWith(data);
    });
  });
  
  describe("redirect", () => {
    it("url only: calls the provider's redirect method", () => {
      const url = 'http://example.com';
      response.redirect(url);
      expect(provider.redirect).toHaveBeenCalledWith(url);
    });
    
    it("status & url: calls the provider's redirect method with status and url", () => {
      const status = 301;
      const url = 'http://example.com';
      response.redirect(status, url);
      expect(provider.redirect).toHaveBeenCalledWith(status, url);
    });
    
    it("throws an error if given invalid arguments", () => {
      expect(() => {
        response.redirect(true as any); // Invalid argument
      }).toThrow("Invalid redirect parameters");
    });
  });
  
  describe("send", () => {
    it("calls the provider's send method with the correct body", () => {
      const body = 'response body';
      response.send(body);
      expect(provider.send).toHaveBeenCalledWith(body);
    });
  });
  
  describe("sendFile", () => {
    it("calls the provider's sendFile method with the correct parameters", () => {
      const filepath = '/path/to/file';
      const options = { cacheControl: false };
      
      response.sendFile(filepath, options);
      expect(provider.sendFile).toHaveBeenCalledWith(filepath, options);
    });
  });
  
  describe("setStatus", () => {
    it("calls the provider's setStatus method with the correct status code", () => {
      const statusCode = 404;
      response.setStatus(statusCode);
      expect(provider.setStatus).toHaveBeenCalledWith(statusCode);
    });
    
    it("returns same instance of Response class", () => {
      const result = response.setStatus(200);
      expect(result).toBe(response);
    });
  });
});
