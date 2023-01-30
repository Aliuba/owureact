import axios from "axios";

const axiosSpacexService=axios.create({baseURL:'https://api.spacexdata.com/v3'})

export {axiosSpacexService}