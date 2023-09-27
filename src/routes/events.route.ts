import { Router } from 'express';
import { EventController } from '@controllers/events.controller';
import { BookingController } from '@/controllers/bookings.controller';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CreateBookingDto } from '@/dtos/bookings.dto';

export class EventRoute implements Routes {
  public path = '/api';
  public router = Router();
  public event = new EventController();
  public booking = new BookingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/events`, this.event.getEvents);
    this.router.post(`${this.path}/book`, ValidationMiddleware(CreateBookingDto), this.booking.createBooking);
  }
}
