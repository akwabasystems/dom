# @akwaba/dom

## Overview

A collection of DOM utility methods.

Published on [npmjs.com](https://www.npmjs.com) as `@akwaba/dom`.


## API

- `ancestors(element, selector = "div")` - Returns the ancestors of the given element that match the specified selector
- `children(element, selector = "*")` - Returns the children of the given element that match the specified selector
- `collect(element, property)` - Recursively collects all the element's parent, siblings or child elements that match the specified property
- `cumulativeOffset(element)` - Returns the cumulative top and left offsets for this element
- `dimensions(element)` - Returns the dimensions of the given element
- `height(element)` - Returns the height of the given element
- `matchesSelector(element, selector)` - Returns true if the given element matches the specified selector; otherwise, returns false
- `parents(element)` - Returns the parents of the given element by recursively collecting each "parentNode" element up to the document element
- `select(expression, scope)` - Returns an array of the nodes that match the specified expression from the given scope
- `viewport()` - Returns the dimensions and offsets of the current viewport
- `width(element)` - Returns the width of the given element


### DOM Storage API

- `storage.getStorage(element)` - Retrieves the storage entry for the given element
- `storage.store(element, key, value)` - Stores a key/value pair of content for the given element
- `storage.retrieve(element, key)` - Retrieves the value of the key specified in this element's storage unit



### Usage

```js

import DOM from '@akwaba/dom';

const dimensions = DOM.dimensions("container");
console.log(dimensions);   // { width: 400, height: 300 }

```


## License
Copyright (c) 2019 Akwaba Systems, Inc.
