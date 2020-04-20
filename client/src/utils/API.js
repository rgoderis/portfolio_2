import axios from 'axios'

const API = {
    checkContact: function(){
        axios.get('https://cors-anywhere.herokuapp.com/https://immense-harbor-83008.herokuapp.com/api/users/rgoderis')
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },
    addContact: function(){
        
    }

}

export default API