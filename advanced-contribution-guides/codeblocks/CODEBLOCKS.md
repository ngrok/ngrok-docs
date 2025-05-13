Table of Contents

- [Creating code blocks](#creating-code-blocks)
  - [Valid properties](#valid-properties)
    - [`tabName`](#-tabname-)
    - [`title`](#-title-)
      - [`titleLink`](#-titlelink-)
    - [`mode`](#-mode-)
    - [`disableCopy`](#-disablecopy-)
    - [`collapsible`](#-collapsible-)
      - [`collapseLineNumber`](#-collapselinenumber-)
  - [`indentation`](#-indentation-)

This guide is for internal ngrok teammates who want to use the codeblock and LangSwitcher components to render code snippets in the docs.

# Creating code blocks

A standard codeblock will look like this:

````txt
```bash title="file-title"
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

Result:
![An example codeblock](./img/default.png)

## Valid properties

The code block can take the following meta properties, which you use by adding them to the same line where you specify the language.

### `tabName`

Use `tabName` to rename the language tab shown in the code block component.

Example:

````txt
```bash tabName="Example"
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

Result:
![Screenshot of a language tab after tabName has been applied](./img/tabNameResult.png)

### `title`

Use `title` to add a file name to a code block component.

Example:

````txt
```bash title="Example file"
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

Result:
![An example codeblock with a title prop](./img/titleResult.png)

#### `titleLink`

After defining a `title`, use `titleLink` wrap a link around the file name of a codeblock.

Example:

````txt
```bash title="Example file" titleLink=https://ngrok.com/pricing
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

![An example codeblock with title and titleLink props](./img/titleLinkResult.png)

### `mode`

Define which file icon appears next to the `title` of a codeblock.

Example:

````txt
```bash title="Example file" mode=traffic-policy
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

![An example codeblock with title and titleLink props](./img/modeResult.png)

### `disableCopy`

Boolean. Decide if the "copy code" button will appear in the codeblock

Example:

````txt
```bash disableCopy=true
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

![An example codeblock using the disableCopy prop](./img/disableCopyResult.png)

### `collapsible`

Default `false`. Decide if a codeblock will start off collapsed, truncating what's shown. The user can then expand the codeblock to see the rest.

Example:

````txt
```bash collapsible
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

#### `collapseLineNumber`

Choose which line number codeblock will be collapsed at.

Example:

````txt
```bash title="Example file" collapsible collapseLine=20
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -noenc -out your-cert.crt -keyout your-key.key
```
````

## `indentation`

Default `undefined`. Choose whether the code block should be indented with `tabs` or `spaces`.

In general, don't use this property unless you have a specific reason. The codeblock automatically chooses the appropriate indentation based on the language.

Example:

````txt
```js indendation=spaces
function example(){
	return console.log("example");
}
```
````
