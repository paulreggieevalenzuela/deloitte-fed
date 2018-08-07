import moment from 'moment';

export function convertDate(date) {
    
    return moment(date).format('Do MMMM YYYY');
}

export function convertTime(time) {
    
    return moment(time).format('HH:MMa');
}

export function getYear(date) {
    
    return moment(date).format('YYYY');
}