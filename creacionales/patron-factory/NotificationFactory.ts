
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
