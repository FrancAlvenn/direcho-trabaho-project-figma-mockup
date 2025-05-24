import eventsJSON from '../data/events.json';

export const getEvents = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(eventsJSON);
        }, 1500)
    })
}