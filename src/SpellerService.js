import axios from 'axios';
/*eslint no-unused-vars: 1*/
export default class SpellerService {
    constructor(api_url) {
        this.headers = {};
        this.api_url = 'https://speller.yandex.net/services/spellservice.json/' + api_url;

    }
    getData(params = {}) {
        return axios.get(this.api_url, { headers: this.headers, params: params }).then(res => this.adaptation(res.data));
    }
    postData(params = {}) {
        let data = {}
        return axios.post(this.api_url, params, { headers: this.headers, params: data }).then(res => this.adaptation(res));
    }
    putData(data) {
        let params = {}
        return axios.put(this.api_url, data, { headers: this.headers, params: params }).then(response => response.data);
    }
    deleteData(data) {
        let params = data
        return axios.delete(this.api_url, { headers: this.headers, params: params }).
        then(response => response.data);
    }
    adaptation(data) {
        return data;
    }
}