

const notificationFactory:NotificationMessageFactory = new NotificationMessageFactoryImpl();

const errorNotification:NotificationMessage= notificationFactory.createNotification('Error');
errorNotification.getErrorMessage('Al crear el producto');

const successNotification: NotificationMessage = notificationFactory.createNotification('Success');
successNotification.getErrorMessage('Creando el producto');

const warningNotification: NotificationMessage = notificationFactory.createNotification('Warning');
warningNotification.getErrorMessage('El producto que creaste, ya paso su fecha de caducidad');