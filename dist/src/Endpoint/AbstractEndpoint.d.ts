import { AbstractEvent, AbstractPayload, EventInterface, PublicProperties } from "@electra/core";
import { RequestInterface } from "../Request/RequestInterface";
import { ResponseInterface } from "../Response/ResponseInterface";
export declare abstract class AbstractEndpoint<EndpointPayload extends AbstractPayload, EndpointResponse> extends AbstractEvent<EndpointPayload, EndpointResponse> implements EventInterface<EndpointResponse> {
    protected readonly request: RequestInterface;
    protected readonly response: ResponseInterface;
    constructor(payload: EndpointPayload | PublicProperties<EndpointPayload>, request: RequestInterface, response: ResponseInterface);
}
