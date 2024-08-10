import axios from "axios";
import apiendpoint from "./apiendpoint";
export const apisavesheetform=async(datas)=>{
    try {
        const res = await axios.post(`${apiendpoint()}`, JSON.stringify(datas));
        return res.data;
    } catch (error) {
        console.error("Error saving form data:", error);
        throw error;
    }
}