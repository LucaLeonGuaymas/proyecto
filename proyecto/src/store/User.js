import { ref } from 'vue';

const user = ref(null)

export function addUser(user1) {
    user.value = user1
}
export default user