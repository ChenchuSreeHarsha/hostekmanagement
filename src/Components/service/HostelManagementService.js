import axios from "axios";

class HostelManagement {
    static AddNewRoom(values){
        const HostelManagementUrl = 'http://localhost:4000/roommanagement';
        return axios.post(HostelManagementUrl,values)
    }
    static AddNewHosteler(values){
        const HostelManagementUrl = 'http://localhost:4000/addnewhosteler';
        return axios.post(HostelManagementUrl,values)
    }
    static UpdateRoom(roomId, values) {
        const HostelManagementUrl = `http://localhost:4000/roommanagement/${roomId}`;
        return axios.put(HostelManagementUrl, values);
    }

    static DeleteRoom(roomId) {
        const HostelManagementUrl = `http://localhost:4000/roommanagement/${roomId}`;
        return axios.delete(HostelManagementUrl);
    }
}
export default HostelManagement;