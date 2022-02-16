const findTheOldest = function(personArray) {
  function getAge(person) {
    return age = (person.yearOfDeath || (new Date()).getFullYear()) - person.yearOfBirth;
  }
  return personArray.reduce((oldestPerson, person) => {
    return getAge(person) > getAge(oldestPerson) ? person : oldestPerson;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
