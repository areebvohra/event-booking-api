import { IsString, IsNotEmpty } from 'class-validator';

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

    @IsString()
    @IsNotEmpty()
    public no_of_tickets: string;

    @IsString()
    @IsNotEmpty()
    public eventId: string;
}