function ageInDays() {
  let birthYear = prompt('Which year were you born?');
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  let days = (currentYear - birthYear) * 365;

  // create a text node
  let answer = document.createTextNode('You have lived ' + days + ' days.');

  //create a new h1 element <h1>
  let h1 = document.createElement('h1');

  //puts a text note into h1
  h1.appendChild(answer);

  //add h1 value to the "flex-box-result"
  document.getElementById('flex-box-result').appendChild(h1);

  //set the id attribute to "age" to a h1 element
  h1.setAttribute('id', 'age');
}

function reset() {

  document.getElementById('age').remove();
}
