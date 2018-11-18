export class DatetimeHelper {
    static getTimeStamp() {
        return Math.round((new Date()).getTime() / 1000);
    }
}