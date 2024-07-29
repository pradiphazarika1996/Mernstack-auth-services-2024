import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('should return the 201 status code', async () => {
            ///AAA
            //Arrange
            const userData = {
                firstName: 'john',
                lastName: 'cena',
                email: 'john@gmail.com',
                password: '345678',
            };
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            //Assert
            expect(response.statusCode).toBe(201);
        });
        it('should return json text', async () => {
            ///AAA
            //Arrange
            const userData = {
                firstName: 'john',
                lastName: 'cena',
                email: 'john@gmail.com',
                password: '345678',
            };
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            //Assert
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'));
        });
    });
    describe('fields are missing', () => {});
});
