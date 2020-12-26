#  CurvedLine

**CurvedLine (curved-line)** is a **CSS Houdini** implementation to create a custom horizontal line.

![CSS Houdini Lines](https://raw.githubusercontent.com/hazmi/curved-line/main/assets/preview.jpg)

## Getting started
The future of CSS is getting exciting with the arrival of CSS Houdini. Using its Paint API, we can create our custom style implementation. 

The browser supports for Paint API is also getting better, and with a polyfill, we can support out more browsers.

### 1. Load the worklet

Using CDN is the easiest way to add the library:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('"https://unpkg.com/curved-line@1.0.0/curved-line.js');
}
```

Or, download the [code](https://unpkg.com/curved-line@1.0.0/curved-line.js) and import it to your web page:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('path/to/curved-line.js');
}
```

#### You can use the polyfill

To add support for all moder browsers, you can load the worklet with [css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) fallback.

```html
<script>
  ;(async function() {
    if (CSS['paintWorklet'] === undefined)
      await import('https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js')

    CSS.paintWorklet.addModule('https://unpkg.com/curved-line@1.0.0/curved-line.js')
  })()
</script>
```

### 3. Ready to use it in your CSS!

To use **CurvedLine** worlet you need define some custom properties with values and add the value `paint(curved-line)` on `background-image` property.

> The worklet has default values if you don't define these

```css
.element {
  --curved-lineHeight: 30;             /* default: element height */
  --curved-lineWidth: 5;               /* default: 3 */
  --curved-lineColor: midnightblue;    /* default: 'black' */
  --curved-lineSpread: 20;             /* default: 50 */

  background-image: paint(curved-line);
}
```

| property | description | default value |
| -------- | ----------- | ------------- |
| --curved-lineHeight: | **Line height**, the height of the curved line | `element height` |
| --curved-lineWidth | **Line width**, the width of the line | `3` |
| --curved-lineColor | **Line color**, the line color | `'black'` |
| --curved-lineSpread | **Line spread**, the curve interval length | `20` |

## See Also

* [See this demo on Codepen](https://codepen.io/hazmi/pen/VwKreoq)
* [See more examples on Codepen](https://codepen.io/hazmi/pen/poEdNPr)
* [CurvedLine Github repository](https://github.com/hazmi/curved-line)
* [See more information about CSS Houdini](https://houdini.how/)

## License

MIT License

Copyright (c) 2020 Hazmi
