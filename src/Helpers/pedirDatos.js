import data_Album from "../Components/Data/dataAlbum"

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data_Album)
        },)
    })
 }

 export default pedirDatos