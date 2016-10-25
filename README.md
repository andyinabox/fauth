fauth
======

A completely insecure JavaScript auth system. Nothing fancy here ... this will hide the `<body>` element and present a dialog input. If the user enters the correct password, the body becomes visible. 

Installation
-------------

```bash
npm install fauth --save
```

Usage
-----

```js
var fauth = require('fauth');

fauth('p4ssw3rd', { tries: 3, whitelist: /localhost/ }, function() {
	// do something
}

```

API
----

### fauth(password, [options], callback)

#### password

Type: `String`

A password to use for "authentication." **Please only use throwaway passwords**, this system is insecure and really just for looks.

#### options

Type: `Object`

- `tries`: Number of tries befor redirect. Default is 1
- `redirect`: Url to redirect to after exceeding max tries. Default is "http://example.com/"
- `whitelist`: Domain or set of domains to disable authentication for. can be a string, array of strings, or RegEx. Empty by default.
- `disabled`: Force auth to be completely disabled. Default is false

#### options

Type: `Function`

Function to execute if auth is successful.
