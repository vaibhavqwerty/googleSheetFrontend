import { message } from 'antd';
import axios from 'axios';

class FormService {

    async fetchData() {
        try {
            const response = await axios.get('http://localhost:8070/demo/getRequest');
            return response?.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async saveData(localData) {
        try {
            const response = await axios.post('http://localhost:8070/demo/saveRequest?username='+localData.name+'&number='+localData.mobileNumber);
            if(response?.status <= 204){
                message.success(response?.data);
                return response?.data;
            }
            return null;
        } catch (error) {
            console.error('Error fetching data:', error);
            message.error("Something went wrong!");
        }
    }
}

export const formService = new FormService();