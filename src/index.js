import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const word = $('#location').val();
    $('#location').val("");
  
    let request = new XMLHttpRequest();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText); 
        getElements(response);
      }
    };
  
    request.open("GET", url, true);
    request.send();
  
    function getElements(response) {
      $('.definition1').text(`The definition of ${word} is ${response[0].meanings[0].definitions[0].definition}`);
      $('.definition2').text(`In Other Words ${word} is ${response[0].meanings[1].definitions[1].definition}`);
      $('.definition2').text(`The Synonyms of ${word} is ${response[0].meanings[1].definitions[1].definition}`);
    }
  });
});