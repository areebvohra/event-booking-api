import { Service } from 'typedi';
import { Event } from '@/interfaces/events.interface';

@Service()
export class EventService {

    public async getAllEvents(): Promise<Event[]> {
        const eventList = [
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
            {
                "id": "4", "name": "Good Riddance & Choke",
                "image": "assets/4.png",
                "date": "2023-09-30", "location": "The Park Theatre", "price": "$35.96"
            },
            {
                "id": "5", "name": "Protest the Hero",
                "image": "assets/5.png",
                "date": "2023-10-06", "location": "The Park Theatre", "price": "$25.16"
            }
        ]

        const events: Event[] = eventList;
        return events;
    }
}

