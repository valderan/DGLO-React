export default class CoffeeService {
    
    constructor() {
        // base URL api
        // start server: json-server --watch ./src/db.json --port 3333
        //this.apiURL = 'http://localhost:3333'
        this.apiURL = '';
    }

    // base method for work with api 
    getUrl = async (url, string = undefined) => {
        const baseUrl = this.apiURL;
        let res = undefined;
        if (string) {
            res = await fetch(`${baseUrl}${url}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(string)
            });
        } else {
            res = await fetch(`${baseUrl}${url}`);
        }

        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        return await res.json();
    }

    uploadMessage = async ( body, url = '/contacts') => {
        return await this.getUrl(url, body);
    }

    getBestsellers = async (url = '/bestsellers') => {
        const res = await this.getUrl(url);
        return await res;
    }

    getCoffee = async (url = '/coffee') => {
        const res = await this.getUrl(url);
        return await res;
    }

    getGoods = async (url = '/goods') => {
        const res = await this.getUrl(url);
        return await res;
    }

    static _valid = (str = '') => {
        return str.length !== 0 ? str : 'no data';
    }
    

}
