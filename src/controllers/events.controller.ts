import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Event } from '@/interfaces/events.interface';
import { EventService } from '@/services/events.service';

export class EventController {
  public event = Container.get(EventService);

  public getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllEventsData: Event[] = await this.event.getAllEvents();

      res.status(200).json({ data: getAllEventsData, message: 'getAll' });
    } catch (error) {
      next(error);
    }
  };
}
