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
            return response?.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export const formService = new FormService();