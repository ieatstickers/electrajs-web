
export interface ResponseHeaders
{
  get(name: string): string;
  
  set(name: string, value: string): this;
}
