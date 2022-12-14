import { app } from './index.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import comments from '../store/comments.js'

const db = getFirestore(app)
const commentsRef = collection(db,'comments')

const addComment = (comment) => {
    addDoc(commentsRef, comment);
}
onSnapshot(commentsRef, (snapshot) => {
    comments.value = []
    snapshot.forEach(doc =>{
        const comment = {
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            email: doc.data().email,
        }
        comments.value.push(comment)
    })
})

const deleteComment = (id) => {
    deleteDoc(doc(commentsRef,id))
}
// const q = query(collection(db, "usuarios"))
// const traerUsuarios = async () => {
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {    
//         console.log(doc.id, " => ", doc.data());
//     });
// }


export { addComment, deleteComment }