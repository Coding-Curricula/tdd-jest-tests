const request = require('supertest');
const app = require('./index');

test('root path at / should return status code 200 and "hello world"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
});

// test to render a homepage like an index.html at /home endpoint
test('should return index.html at "/home" and give response of 200', async () => {
    const response = await request(app).get('/home');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('<h1>Home</h1>');
});