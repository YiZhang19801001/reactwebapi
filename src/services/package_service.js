//movie_service.js
import axios from 'axios';


export const searchPackages = function(search_term, callback){
    
    // axios.get("http://www.omdbapi.com/?s="+search_term+"&apikey=4a24f274")
    //     .then(function (response){
    //         callback(response);
    //     })
    //     .catch(function (error){
    //         console.log(error);
    //     });
        axios.get("http://localhost:8998/api/packages/?location="+search_term)
        .then(function (response){
            callback(response);
        })
        .catch(function (error){
            console.log(error);
        });
}