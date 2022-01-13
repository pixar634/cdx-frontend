import { FETCH_PROJECT } from "../types";
import api from '../config/axiosConfig'


export const fetchProject = () => async (dispatch) => {
    const response = await api.get(
        `/projects`        
    );
    console.log("WOOOOOO ACTITON", response.data);
    dispatch({
        type: FETCH_PROJECT,
        payload: response.data,
    });
};

