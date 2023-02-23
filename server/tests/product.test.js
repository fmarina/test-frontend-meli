require("dotenv").config();
const request = require("supertest");
const server = require("../../server");

const API_URL = "/api/items";

beforeEach(() => server);
afterEach(() => server.close());

describe("Products API", () => {
  it("Get Products should return status code 200", async () => {
    const url = `${API_URL}?search=macbook`;
    const res = await request(server).get(url);
    expect(res.statusCode).toBe(200);
  });

  it("Get Product by Id should return status code 200", async () => {
    const url = `${API_URL}/MLA1103568884`;
    const res = await request(server).get(url);
    expect(res.statusCode).toBe(200);
  });
});
