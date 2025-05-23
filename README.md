# html2text


html2text is a Python script that converts a page of HTML into clean, easy-to-read plain ASCII text. Better yet, that ASCII also happens to be valid Markdown (a text-to-HTML format).


Usage: `html2text [filename [encoding]]`

| Option              | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| `--version`         | Show program's version number and exit                                                             |
| `-h`, `--help`      | Show this help message and exit                                                                    |
| `--ignore-links`    | Don't include any formatting for links                                                             |
| `--escape-all`      | Escape all special characters.  Output is less readable, but avoids corner case formatting issues. |
| `--reference-links` | Use reference links instead of links to create markdown                                            |
| `--mark-code`       | Mark preformatted and code blocks with [code]...[/code]                                            |

For a complete list of options see the [docs](https://github.com/Alir3z4/html2text/blob/master/docs/usage.md)


Or you can use it from within `Python`:

```py
>>> import html2text
>>> print(html2text.html2text("<p><strong>Zed's</strong> dead baby, <em>Zed's</em> dead.</p>"))
**Zed's** dead baby, _Zed's_ dead.
```


Or with some configuration options:
```py
>>> import html2text
>>> h = html2text.HTML2Text()
>>> # Ignore converting links from HTML
>>> h.ignore_links = True
>>> print h.handle("<p>Hello, <a href='https://www.google.com/earth/'>world</a>!")
Hello, world!

>>> print(h.handle("<p>Hello, <a href='https://www.google.com/earth/'>world</a>!"))

Hello, world!

>>> # Don't Ignore links anymore, I like links
>>> h.ignore_links = False
>>> print(h.handle("<p>Hello, <a href='https://www.google.com/earth/'>world</a>!"))
Hello, [world](https://www.google.com/earth/)!
```

*Originally written by Aaron Swartz. This code is distributed under the GPLv3.*


## How to install

`html2text` is available on pypi
https://pypi.org/project/html2text/

```sh
$ pip install html2text
```

##  Development

### How to run unit tests

```sh
tox
```

To see the coverage results:

```sh
coverage html
```

then open the `./htmlcov/index.html` file in your browser.


### Code Quality & Pre Commit

The CI runs several linting steps, including:

- mypy
- Flake8
- Black

To make sure the code passes the CI linting steps, run:

```shell
$ tox -e pre-commit
```

## Documentation

Documentation lives [here](https://github.com/Alir3z4/html2text/blob/master/docs/usage.md)
