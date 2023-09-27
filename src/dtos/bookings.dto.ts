import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
    @IsString()
    @IsNotEmpty()
    public event_name: string;

    @IsString()
    @IsNotEmpty()
    public username: string;

    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsNumber()
    @IsNotEmpty()
    public no_of_tickets: number;

    @IsString()
    @IsNotEmpty()
    public eventId: string;
}