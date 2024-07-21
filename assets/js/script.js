const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/word';
const nWords = parseInt(prompt('Quante parole vuoi ottenere?'));

let words = [];

if (isNaN(nWords)) {
  location.reload();
}

for(i = 0; i < nWords; i++){
  getApi();
}

function getApi() {
  axios.get(apiUrl)
        .then(res => {
          words.push(res.data.response);
          if(words.length === nWords){
            document.getElementById('output').innerHTML += words.join(' ');
          }
        })
        .catch(err => {
          console.log(err.message);
        })
}