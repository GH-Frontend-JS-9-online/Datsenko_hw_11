export default class Storage {   
    static getData(key) {
        return JSON.parse(localStorage.getItem(key))
    }
    
    static setData(key, data) {        
        localStorage.setItem(key, JSON.stringify(data))
    }

    static removeData() {
        localStorage.clear()
    }
}