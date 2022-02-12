export const filterNumbers = (word) => word && /[A-Za-z]/g.test(word);
export const filterInvalidCharacters = (word) => word && !/[<>=[]/g.test(word);
export const wordToLowercase = (word) => word.toLowerCase();
export const removeInvalidCharacters = (word) =>
  word.replace(/[.?!`";:]+/g, "");
export const asasda = (word) => word.replace(/'+(\w+)'+/, "$1");
export const countWords = (dic, word) => {
  if (dic?.[word]) {
    dic[word]++;
  } else {
    dic[word] = 1;
  }
  return dic;
};
