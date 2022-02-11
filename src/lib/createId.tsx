let id = parseInt(window.localStorage.getItem('idMax') || '0');
export default function createId(){
    id++
    window.localStorage.setItem('idMax', JSON.stringify(id))
    return id
}