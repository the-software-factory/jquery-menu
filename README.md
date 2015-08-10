# jQuery Menu
A menu with the default configuration, disabled items and nested menus.
This plugin is used to define the behaviour of a menu and of all its menu items.

## Options
Please run the following script to initialize a menu with the default options:
```js
$('.menu').menu();
```

The menu method accepts an configuration object with the following options:

### delay
* Delay (in milliseconds) of menu item closing
* Type: number
* Default: 300

### subMenuClass
* CSS class name of any sub menu.
* Type: string
* Default: 'sub-menu'

### menuItemClass
* CSS class name of any menu item.
* Type: string
* Default: 'menu-item'

### visibleMenuItemClass
* CSS class name of the visible menu item.
* Type: string
* Default: 'is-menu-item-visible'

## Installation

### Development
This project requires [node](https://nodejs.org/) for the development installation so you can
install client-side dependencies, build it and test it.

Please run following commands to install all dependencies:
```sh
$ npm install
$ ./node_modules/bower/bin/bower install
```

### Deploy
This project requires [bower](http://bower.io/) for the deploy installation so you can install client-side dependencies
Please run following commands to install the dependencies:
```sh
$ bower install
```

## Development
The project has the following structure:
```
dist/
	*.min.js // The minified and uglified version of the component.
src/
    *.js // The source file
tests/
    ... // Contains all tests and all needed file to set up a tests environment.
    *.test.js // All tests need to have the "test" suffix before the extension.
...
```

### Grunt Tasks
Here is a list of grunt `tasks` => `actions` mappings, see below for a deeper explanation of the actions.

|   *Grunt task*  | *clean* | *jshint* | *same_filename_concat* | *nodeunit* | *watch* | *conventionalChangelog* | *changelogCommit* |
|-----------------|:-------:|:--------:|:----------------------:|:----------:|:-------:|:-----------------------:|:-----------------:|
|      grunt      |    *    |    *     |            *           |     *      |         |                         |                   |
|   grunt watch   |         |          |                        |            |    *    |                         |                   |
| grunt changelog |         |          |                        |            |         |            *            |          *        |

* *jshint*: Validate files with JSHint.
* *uglify*: Create the final \*.min.js.
* *watch*: Run `default` task when `src` files are added, changed or deleted.
* *conventionalChangelog*: Generates a CHANGELOG.md file from the git log
* *changelogCommit*: Prepares a new git commit with the CHANGELOG.md file

## Tests
Take a look at [`test/README.md`](test/README.md) for more details.
