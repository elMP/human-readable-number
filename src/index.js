module.exports = function toReadable(number) {
  let numberInWorlds = '';
  number = String(number);
  switch (number.length) {
    case 3: {
      numberInWorlds += `${getDigit(number[0])} hundred`;

      if (number[1] === '0' && number[2] === '0')
        break;
      numberInWorlds += ' ';
      number = number.substr(1);
    };
    case 2: {
      if (number[0] === '1') {
        numberInWorlds += getTeens(number[1]);
        break;
      };
      numberInWorlds += getDozen(number[0]);
      if (number[1] === '0')
        break;

      if (number[0] !== '0')
        numberInWorlds += ' ';

      number = number.substr(1);
    };
    case 1: {
      numberInWorlds += getDigit(number[0]);
    }
  }
  return numberInWorlds;
}

function getDigit(number) {
  units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return units[number];
}

function getTeens(number) {
  units = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  return units[number];
}

function getDozen(number) {
  units = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  return units[number];
}