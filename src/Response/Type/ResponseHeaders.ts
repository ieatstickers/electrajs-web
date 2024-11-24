
export interface ResponseHeaders
{
  get(name: string): string | null;
  
  set(name: string, value: string): this;
}
