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
}
export default HostelManagement;