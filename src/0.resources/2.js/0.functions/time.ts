export function timeToString(timestamp1: number | string): string {
    let timestamp = parseFloat(timestamp1.toString());
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const current = Date.now();
    const elapsed = current - timestamp;
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: "auto" });

    if (elapsed > 0) {
        if (elapsed < msPerMinute) {
            return rtf.format(-Math.floor(elapsed / 1000), 'seconds');
        } else if (elapsed < msPerHour) {
            return rtf.format(-Math.floor(elapsed / msPerMinute), 'minutes');
        } else if (elapsed < msPerDay) {
            return rtf.format(-Math.floor(elapsed / msPerHour), 'hours');
        } else if (elapsed < msPerMonth) {
            return rtf.format(-Math.floor(elapsed / msPerDay), 'days');
        } else if (elapsed < msPerYear) {
            return rtf.format(-Math.floor(elapsed / msPerMonth), 'months');
        } else {
            return parseDate(new Date(timestamp));
        }
    } else {
        if (-msPerMinute < elapsed) {
            return rtf.format(-Math.floor(elapsed / 1000), 'seconds');
        } else if (-msPerHour < elapsed) {
            return rtf.format(-Math.floor(elapsed / msPerMinute), 'minutes');
        } else if (-msPerDay < elapsed) {
            return rtf.format(-Math.floor(elapsed / msPerHour), 'hours');
        } else if (-msPerMonth < elapsed) {
            return rtf.format(-Math.floor(elapsed / msPerDay), 'days');
        } else if (-msPerYear < elapsed) {
            return rtf.format(-Math.floor(elapsed / msPerMonth), 'months');
        } else {
            return parseDate(new Date(timestamp))
        }
    }
}

export function parseDate(date: Date): string {
    let months: { [key: string]: string } = {
        "1": "Jan",
        "2": "Feb",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "Aug",
        "9": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
    }
    let now = new Date(Date.now());

    let text: string;
    if (date.getFullYear() < now.getFullYear()) {
        text = months[date.getMonth()] + " " + date.getFullYear();
    } else if (date.getMonth() < now.getMonth()) {
        text = date.getDate() + " " + months[date.getMonth()];
    } else if (date.getDate() < now.getDate()) {
        text = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    } else {
        text = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    return text;
}