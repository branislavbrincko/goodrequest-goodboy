const numbersAndEmptyCharacterRegex = new RegExp("^[0-9 ]*$");

function insertIntoString(stringToInsertTo, stringToInsert, positionId) {
  return stringToInsertTo.slice(0, positionId) + stringToInsert + stringToInsertTo.slice(positionId);
}

window.insertIntoString = insertIntoString;

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

export function onlyPhoneNumberCharacters(value) {
  return numbersAndEmptyCharacterRegex.test(value);
}

export function formatPhoneNumber(value) {
  let formattedValue = value;

  if (value.length >= 9) {
    formattedValue = replaceAll(formattedValue, " ", "");
    formattedValue = insertIntoString(formattedValue, " ", [3]);
    formattedValue = insertIntoString(formattedValue, " ", [7]);
  }

  return formattedValue;
}
