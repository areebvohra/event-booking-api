import request from 'supertest';
import { App } from '@/app';
import { EventRoute } from '@/routes/events.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Events', () => {
  describe('[GET] /events', () => {
    it('get all events', async () => {
      const eventRoute = new EventRoute();
      const events = []

      events.find = jest.fn().mockReturnValue([
        {
          "id": "1", "name": "Bell Witch",
          "image": "assets/1.png",
          "date": "2023-09-25", "location": "The Park Theatre", "price": "$35.00"
        },
        {
          "id": "2", "name": "Ten Foot Pole",
          "image": "assets/2.png",
          "date": "2023-09-26", "location": "The Park Theatre", "price": "$25.16"
        },
        {
          "id": "3", "name": "Great Lake Swimmers",
          "image": "assets/3.png",
          "date": "2023-09-29", "location": "The Park Theatre", "price": "$22.50"
        },
      ]);

      const app = new App([eventRoute]);
      return request(app.getServer()).get(`${eventRoute.path}/events`).expect(200);
    });
  });
});
