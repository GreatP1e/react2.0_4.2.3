import { HttpResponse, RequestHandler } from "msw";
import { responsePage1, responsePage2, responseSearchText } from "./response";

class CustomRequestHandlerPage1 extends RequestHandler {
  constructor(
    method: string,
    path: string,
    resolver: (req: Request) => HttpResponse
  ) {
    super({
      info: {
        header: `${method} ${path}`,
      },
      resolver,
    });
  }
  parse({
    request,
  }: {
    request: Request;
  }): Promise<{ searchParams: URLSearchParams }> {
    const searchParams = new URL(request.url).searchParams;
    return Promise.resolve({
      searchParams,
    }) as Promise<{ searchParams: URLSearchParams }>;
  }
  predicate({
    request,
    parsedResult,
  }: {
    request: Request;
    parsedResult: { searchParams: URLSearchParams };
  }): boolean {
    const { searchParams } = parsedResult;
    if (searchParams.get("page") === "0" && !searchParams.get("text")) {
      return true;
    }
    return false;
  }
  log() {}
}
class CustomRequestHandlerPage2 extends RequestHandler {
  constructor(
    method: string,
    path: string,
    resolver: (req: Request) => HttpResponse
  ) {
    super({
      info: {
        header: `${method} ${path}`,
      },
      resolver,
    });
  }
  parse({
    request,
  }: {
    request: Request;
  }): Promise<{ searchParams: URLSearchParams }> {
    const searchParams = new URL(request.url).searchParams;
    return Promise.resolve({
      searchParams,
    }) as Promise<{ searchParams: URLSearchParams }>;
  }
  predicate({
    request,
    parsedResult,
  }: {
    request: Request;
    parsedResult: { searchParams: URLSearchParams };
  }): boolean {
    const { searchParams } = parsedResult;
    if (searchParams.get("page") === "1" && !searchParams.get("text")) {
      return true;
    }
    return false;
  }
  log() {}
}

class CustomRequestHandlerSearchText extends RequestHandler {
  constructor(
    method: string,
    path: string,
    resolver: (req: Request) => HttpResponse
  ) {
    super({
      info: {
        header: `${method} ${path}`,
      },
      resolver,
    });
  }
  parse({
    request,
  }: {
    request: Request;
  }): Promise<{ searchParams: URLSearchParams }> {
    const searchParams = new URL(request.url).searchParams;
    return Promise.resolve({
      searchParams,
    }) as Promise<{ searchParams: URLSearchParams }>;
  }
  predicate({
    request,
    parsedResult,
  }: {
    request: Request;
    parsedResult: { searchParams: URLSearchParams };
  }): boolean {
    const { searchParams } = parsedResult;
    if (searchParams.get("text") === "Frontend") {
      return true;
    }
    return false;
  }
  log() {}
}

const handlerPage1 = new CustomRequestHandlerPage1("GET", "/vacancies", () => {
  return HttpResponse.json(responsePage1);
});
const handlerPage2 = new CustomRequestHandlerPage2("GET", "/vacancies", () => {
  return HttpResponse.json(responsePage2);
});

const handlerSearchText = new CustomRequestHandlerSearchText(
  "GET",
  "/vacancies",
  () => {
    return HttpResponse.json(responseSearchText);
  }
);

export const handlers = [handlerPage1, handlerPage2, handlerSearchText];
