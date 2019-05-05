import fetch from 'isomorphic-fetch';

export function getHomeArticle() {
    return fetch('http://localhost:3000/')
    .then(function(response) {
        if (response.status >= 400) {
            console.log(response)
        }else{
            return response.json();

        }
    })
}