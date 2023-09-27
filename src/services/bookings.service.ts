import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Booking } from '@/interfaces/bookings.interface';


@Service()
export class BookingService {

    public async createBooking(bookingData: Booking): Promise<Booking> {

        const booking: Booking = bookingData;
        return booking;
    }
}

