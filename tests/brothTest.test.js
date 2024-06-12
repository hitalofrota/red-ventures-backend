import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/broths', () => {
  it('should return all broths', async () => {
    const response = await request(app).get('/broths');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(3);
    expect(response.body[0]).toHaveProperty('name', 'Sopa Low Carb');
  });
});