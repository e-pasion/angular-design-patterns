type NotificationType = 'Error'| 'Warning' | 'Success';

interface NotificationMessage{
    color:string;
    getErrorMessage(message:string):void;
}

class ErrorNotificationMessage implements NotificationMessage{
    color: string= 'Red';
    getErrorMessage(message: string): void {
        console.log(`¡ERROR!: ${message}`);
    }
}

class SuccessNotificationMessage implements NotificationMessage{
    color: string = 'Green';
    getErrorMessage(message: string): void {
        console.log(`Exito: ${message}`);
    }
}

class WarningNotificationMessage implements NotificationMessage{
    color: string = 'Yellow';
    getErrorMessage(message: string): void {
        console.log(`Cuidado: ${message}`);
    }
}

