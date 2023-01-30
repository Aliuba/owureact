import {axiosSpacexService} from "./axiosSpacexService";

const launchService={
    getAll: ()=> axiosSpacexService.get('/launches'),

}

export {launchService}