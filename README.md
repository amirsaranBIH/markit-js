# Mark-it JS


## Intoduction

A useful addition to your future or current projects for simple text markup with easy to remember syntax. It just uses one method ( .markIt() ) on strings and it converts the string into styled HTML text. You can style the following elements: ```<b>```, ```<em>```, ```<u>```, ```<s>```, ```<mark>```, ```<sub>```, ```<sup>``` and ```<code>```.

- Bold (```**example**```)
- Emphasis (```//example//```)
- Underline (```__example__```)
- Striketrough (```--example--```)
- Mark (```(m)example(m)```)
- Subscript (```..example..```)
- Superscript (```''example''```)
- Code (```[example]```)


## How to use

The only method you will need is .markIt(). Call it on a string and it will convert the given string to HTML tags:

``` '//some example// text'.markIt(); ```

If you don't want a specific style to be applied you can just add the HTML tag as an argument:

``` '**some text** //for// --example--'.markIt('<b>', '<s>'); ```

This will return:

``` **some text** <em>for</em> --example-- ```

## Examples:

``` '**some example** text'.markIt(); ```

This will return:

``` <b>some example</b> text ```

Or you can change text from an input field:

```
const input = document.getElementById('input'),
      btn =document.getElementById('someBtn');

btn.addEventListener('click', function() {
      console.log(input.value.markIt());
});
```

You can also nest multiple styles on one word, for example:

``` '__..some text..__'.markIt(); ```

This will return:

``` <u><sub>some text</sub></u> ```

If you want to use the superscript style you can just wrap the string in double quotes and you will not get any errors:

``` "''some text''".markIt();```


Hope this helps you with making your projects more cooler and user-friendly. :+1:
