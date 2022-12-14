// cambio
import { reactive } from 'vue'
const store = reactive ({
    userName: 'unregistered',
    changeName (newName){
        this.userName = newName
    }
});
export default store;
// hasta aqui