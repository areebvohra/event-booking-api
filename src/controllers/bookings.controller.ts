import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Booking } from '@/interfaces/bookings.interface';
import { BookingService } from '@/services/bookings.service';

export class BookingController {
    public booking = Container.get(BookingService);

    public createBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookingData: Booking = req.body;
            const createBookingData = await this.booking.createBooking(bookingData);

            res.status(201).json({ data: createBookingData, message: 'email sent' });
        } catch (error) {
            next(error);
        }
    }
}
