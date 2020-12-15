# DecoratedText

The `DecoratedText` component adds a decoration on the right and/or left side.

## API

### style

Specifies the font style

Optional: true
Accepted Types: string

### size

Specifies the font size

Optional: true
Accepted Types: string, number

### color

Specifies the font color

Optional: true
Accepted Types: string

### backgroundColor

Specifies the text background color

Optional: true
Accepted Types: string

### weight

Specifies font weight

Optional: true
Accepted Types: string

### lowerCase

Can set the font to lowerCase

Optional: true
Accepted Types: boolean

### width

Specifies the widhth of the component

Optional: true
Accepted Types: number

### decoration

The decoration prop can either be a component or a configuration object. If a component is passed, the default width and padding of the decoration is 36px and 3px, respectively.

The API for the config object is as follows:

#### start

A decoration to be placed before the text

Optional: true
Accepted Types: React Component, string, number, array

### end

Same as `start` but on the left side

#### startWidth

The width of the start decoration

Optional: true
Default: 36px
Accepted Types: string, number

#### endWidth

Same as `startWidth` but for end

#### startPadding

The padding of the start decoration

Optional: true
Default: 4px
Accepted Types: string, number

#### endPadding

Same as `startPadding` but for end
