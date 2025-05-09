* [Creating code blocks](#creating-code-blocks)
	+ [Valid properties](#valid-properties)
		- [`tabName`](#-tabname-)


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
![Screenshot of a language tab after tabName has been applied](./img/tabName/after.png)




