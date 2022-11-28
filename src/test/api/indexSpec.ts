import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("test main endpoint server", () => {
  it("test get / endpoint ", async () => {
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
  });
});
