interface NotificationService{
    email:string ;
    sms :number;
    Notification(): void;
}
class notification implements NotificationService{
    email(): void {
        console.log(`ส่ง ${this.email}`)
    }
}
const notification1 = new Notification ("email",abc123@gmail.com);
