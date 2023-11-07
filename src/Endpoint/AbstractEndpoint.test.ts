import { AbstractEndpoint } from "./AbstractEndpoint";
import { AbstractPayload, PublicProperties } from "@electra/core";
import { RequestInterface } from "../Request/RequestInterface";
import { ResponseInterface } from "../Response/ResponseInterface";

class TestPayload extends AbstractPayload
{
  public test: string;
  
  public validate(): boolean
  {
    return typeof this.test === 'string';
  }
}

class TestEndpoint extends AbstractEndpoint<TestPayload, any>
{
  protected getPayload(data: PublicProperties<TestPayload>): TestPayload
  {
    const payload = new TestPayload();
    payload.test = data.test;
    return payload;
  }
  
  protected process(payload: any): any
  {
    return null;
  }
}

class TestHttpRequest {}

class TestHttpResponse {}


describe("AbstractEndpoint", () => {
  
  describe("constructor", () => {
    
    it("sets the a valid payload, request and response", () => {
      const payload = new TestPayload();
      payload.test = "test";
      const request = new TestHttpRequest();
      const response = new TestHttpResponse();
      const endpoint = new TestEndpoint(payload, request as RequestInterface, response as ResponseInterface);
      
      expect(endpoint['payload']).toBe(payload);
      expect(endpoint['request']).toBe(request);
      expect(endpoint['response']).toBe(response);
    });
    
    it("throws an error when given an invalid payload", () => {
      const request = new TestHttpRequest();
      const response = new TestHttpResponse();
      const expectation = expect(() => new TestEndpoint({ test: null }, request as RequestInterface, response as ResponseInterface));
      expectation.toThrow(TypeError);
      expectation.toThrow("Invalid payload data passed to TestEndpoint");
    });
    
  });
  
});
