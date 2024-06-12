import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/proteins', () => {
    it('should return all proteins', async () => {
        const response = await request(app).get('/proteins');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty('name', 'Proteina 1');
    });
});