export class DatetimeHelper {
    static getTimeStamp() {
        return Math.round((new Date()).getTime() / 1000);
    }

    static second2time(seconds) {
        var date = new Date(null);
        date.setSeconds(seconds);
        var timeString = date.toISOString().substr(11, 8);
        return timeString;
    }
}