// Created by Amir Šaran

(function() {

  // List of styles that can be modified
  const regExps = {
    bold: {
      regexp: /(\*{2})(.*?)\1/g,
      tag: '<strong>'
    },
    emphasis: {
      regexp: /(\/{2})(.*?)\1/g,
      tag: '<em>'
    },
    underline: {
      regexp: /(\_{2})(.*?)\1/g,
      tag: '<u>'
    },
    linetrought: {
      regexp: /(\-{2})(.*?)\1/g,
      tag: '<s>'
    },
    mark: {
      regexp: /(\(m\))(.*?)\1/g,
      tag: '<mark>'
    },
    sub: {
      regexp: /(\.{2})(.*?)\1/g,
      tag: '<sub>'
    },
    sup: {
      regexp: /(\'{2})(.*?)\1/g,
      tag: '<sup>'
    },
    code: {
      regexp: /(\[)(.*?)\]/g,
      tag: '<code>'
    }
  };

// Converting starting HTML tag into closing HTML tag
regExps.constructor.prototype.getEndTag = function() {
  return `${this.valueOf().slice(0, 1)}/${this.valueOf().slice(1)}`;
}

// Main fucntion for markIt
String.prototype.markIt = function() {
  // Raw input that needs to be styled properly
  let string = this.valueOf();

  // Looping trought all the available regular expressions and replacing with correct syntax
  for (let value in regExps) {
    // Testing if the regular expression has found a match
    if (regExps.hasOwnProperty(value) && regExps[value].regexp.test(string)) {
      // If there is a match it replaces the inputed syntax with the correct HTML tags
      string = string.replace(regExps[value].regexp, `${regExps[value].tag}$2${regExps[value].tag.getEndTag()}`);
    }
  }

  // Returns the string
  return string;
}

}());
