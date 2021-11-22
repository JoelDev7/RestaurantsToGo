import { locations } from './location.mock'
import camelize from 'camelize'

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm]
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    });
};

export const locationTransform = (result) => {
    const formatedResponse = camelize(result);
    const { geometry = {} } = formatedResponse.results[0];
    const { lat, lng } = geometry.location;
    return { lat, lng };
};