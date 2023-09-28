import { Service } from 'typedi';
import { Booking } from '@/interfaces/bookings.interface';
import { produceMessage } from '@/kafka';
import { randomNumber } from '@/utils';

@Service()
export class BookingService {

    public async createBooking(bookingData: Booking): Promise<Booking> {
        const booking: Booking = bookingData;
        produceMessage('send-email', `${booking.email}, bookingNumber: ${randomNumber()}`)
            .then(() => {
                console.log('Message sent to Kafka');
            })
            .catch((error) => {
                console.error(`Error producing message: ${error}`);
            });
        return booking;
    }
}

