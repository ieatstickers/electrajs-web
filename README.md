# @electra/web

`@electra/web` is designed to extend the functionality of `@electra/core` for use in web applications. 
It provides classes to expose events from `@electra/core` via an HTTP router, while abstracting away 
framework-specific details. It allows for seamless integration with web frameworks like ExpressJS, and ensures that your 
API endpoints remain agnostic to the underlying web framework. This flexibility makes it easier to switch frameworks 
without a major overhaul of your API business logic.

#### Features:

- `AbstractEndpoint` class that extends `AbstractEvent` from `@electra/core`, designed to work with `@electra/web`'s request and response classes.
- Provides its own classes to interact with web requests and responses, decoupling your application logic from specific web frameworks.
- Designed to work with any web framework, allowing for easy switching between frameworks with minimal code changes.

## Installation

Using npm:

```bash
npm install @electra/web
```

Using yarn:

```bash
yarn add @electra/web
```

## Usage

Classes are exported as named exports from `@electra/web`.

```typescript
import { AbstractEndpoint } from "@electra/web";
import { AbstractPayload, PublicProperties } from "@electra/core";

class ExamplePayload extends AbstractPayload
{
  public exampleProperty: string;
  
  public validate(): boolean
  {
    return typeof this.exampleProperty === 'string';
  }
}

class ExampleResponse
{
  public success: boolean;
}

// Endpoints are defined by extending the AbstractEndpoint class
// An endpoint is almost identical to an @electra/core event - the only difference is that, when constructed, an 
// endpoint requires a request and response as well as the endpoint's payload
class ExampleEndpoint extends AbstractEndpoint<ExamplePayload, ExampleResponse>
{
  protected getPayload(data: PublicProperties<ExamplePayload>): ExamplePayload
  {
    const payload = new ExamplePayload();
    payload.exampleProperty = data.exampleProperty;
    return payload;
  }
  
  protected process(payload: ExamplePayload): ExampleResponse
  {
    const response = new ExampleResponse();
    
    // The request can be accessed via the request property
    this.request.routeParams().get('exampleParam');
    
    // The response can be accessed via the response property
    this.response.setCookie('exampleCookie', 'exampleValue');
    
    response.success = true;
    return response;
  }
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
