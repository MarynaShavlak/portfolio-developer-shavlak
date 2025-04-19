export function formatDate(dateString) {
    const [day, month, year] = dateString.split('/');
    const shortMonths = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return `${day}<br />${shortMonths[parseInt(month, 10) - 1]}`;
}

export function getDatetimeValue(dateString) {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
}
