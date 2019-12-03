
// буферизация данных, чтоб не делать часто запросы к апи для статических данных
class Buffer {
    constructor(buffer = undefined) {
        this.buffer = [];
        if (buffer) {
            this.buffer.push(buffer);
        }
    }

    // Проверка наличия ячейки буфера 
    // @nameBuffer - имя буфера для проверки
    // return - число (кол-во) ячеек буфера с данным именем (должен быть 1, если больше - беда) 
    ifExist(nameBuffer) {
        return this.buffer.filter(elem => elem.name === nameBuffer).length
    }

    // Создание ячейки буфера
    // @nameBuffer - имя ячейки буфера 
    // @bodyBuffer - тело буфера 
    // @rewriting = ( true | false )    true - при наличии ячейки с именем @nameBuffer - она перезаписывается, 
    //                                  false - не перезаписывается и return false
    // return - (false | true) - неудачная | удачная попытка содать ячейку буфера
    create(nameBuffer, bodyBuffer, rewriting = true) {
        
        if (!rewriting) {
            if (this.ifExist(nameBuffer) > 0) return false; 
        } 

        if (this.ifExist(nameBuffer) > 0) {
            this.buffer = this.buffer.filter(elem => elem.name !== nameBuffer)
        } 
        
        this.buffer.push({
            name: nameBuffer,
            body: bodyBuffer
        })

        return this.ifExist(nameBuffer) > 0 ? true : false; 
    }

    // Возврат тела ячейки буфера 
    // @nameBuffer - имя ячейки буфера 
    // return - @nameBuffer.body | false - если ячейка отсутсвует
    get(nameBuffer) {
        if (this.ifExist(nameBuffer) > 0) {
            return this.buffer.filter(elem => elem.name === nameBuffer)[0].body
        }

        return false;
    }

    // Очистка ячейки буфера 
    // @nameBuffer - имя ячейки буфера для очистки
    clear(nameBuffer) {
            this.buffer = this.buffer.filter(elem => elem.name !== nameBuffer);
        
    }

}

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

    static _valid = (str = '') => {
        return str.length !== 0 ? str : 'no data';
    }
    
}
