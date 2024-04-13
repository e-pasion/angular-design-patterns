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


abstract class NotificationMessageFactory{
    abstract createNotification(type:NotificationType):NotificationMessage;
}

class NotificationMessageFactoryImpl extends NotificationMessageFactory{
    createNotification(type: NotificationType): NotificationMessage {
        switch(type){
            case 'Error':
                return new ErrorNotificationMessage();
            case 'Success':
                return new SuccessNotificationMessage();
            case 'Warning':
                return new WarningNotificationMessage();
        }
    }
}

const notificationFactory:NotificationMessageFactory = new NotificationMessageFactoryImpl();

const errorNotification:NotificationMessage= notificationFactory.createNotification('Error');
errorNotification.getErrorMessage('Al crear el producto');

const successNotification: NotificationMessage = notificationFactory.createNotification('Success');
successNotification.getErrorMessage('Creando el producto');

const warningNotification: NotificationMessage = notificationFactory.createNotification('Warning');
warningNotification.getErrorMessage('El producto que creaste, ya paso su fecha de caducidad');