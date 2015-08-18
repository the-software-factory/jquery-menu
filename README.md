# jQuery Menu
A menu with the default configuration, disabled items and nested menus.
This plugin is used to define the behaviour of a menu and of all its menu items.

## Installation
You'll need [bower](http://bower.io/) to install jQuery Menu library and its dependencies

Install the library:
```sh
$ bower install jquery-menu
```

Install the library and save it as a dependency in your project:
```sh
$ bower install jquery-menu --save
```

## Options
Please run the following script to initialize a menu with the default options:
```js
$('.menu').menu();
```

The menu method accepts an configuration object with the following options:

### delay
* Delay (in milliseconds) of menu item closing
* Type: number
* Default: `300`

### subMenuClass
* CSS class name of any sub menu.
* Type: string
* Default: `sub-menu`

### menuItemClass
* CSS class name of any menu item.
* Type: string
* Default: `menu-item`

### visibleMenuItemClass
* CSS class name of the visible menu item.
* Type: string
* Default: `is-menu-item-visible`

## Development
The project has the following structure:
```
dist/
	*.min.js // The minified and uglified version of the component.
example/
	index.html	// jQuery Menu demo
	css/*.css	// Demo page's stylesheet
src/
    *.js // The source file
tests/
    ... // Contains all tests and all needed file to set up a tests environment.
    *.test.js // All tests need to have the "test" suffix before the extension.
...
```

### Installation
This project requires [node](https://nodejs.org/) for the development installation so you can
install client-side dependencies, build it and test it.

Please run following commands to install all dependencies:
```sh
$ npm install https://github.com/the-software-factory/jquery-menu.git
$ ./node_modules/bower/bin/bower install
```

### Grunt Tasks
Here is a list of grunt `tasks` => `actions` mappings, see below for a deeper explanation of the actions.

|   *Grunt task*    | *jshint* | *uglify* | *usebanner* | *devserver* | *watch* | *conventionalChangelog* | *changelogCommit* |
|-------------------|:--------:|:--------:|:-----------:|:-----------:|:-------:|:-----------------------:|:-----------------:|
|      grunt        |    *     |    *     |      *      |             |         |                         |                   |
| grunt development |          |          |             |      *      |    *    |                         |                   |
| grunt changelog   |          |          |             |             |         |          *              |         *         |

* *jshint*: Validate files with JSHint.
* *uglify*: Create the final \*.min.js.
* *usebanner*: Prepends a banner to the minified file
* *devserver*: Spawns a web server so you can repidly test your app in action
* *watch*: Run `default` task when `src# jQuery Menu
A menu with the default configuration, disabled items and nested menus.
This plugin is used to define the behaviour of a menu and of all its menu items.

## Installation
This project requires [bower](http://http://bower.io/) to install its dependencies.
Please follow theese instruction to [install](http://bower.io/#install-bower/) bower.

Please run following commands to install jQuery menu with its dependencies:
```sh
$ bower install jquery-menu
```

## Options
Please run the following script to initialize a menu with the default options:
```js
$('.menu').menu();
```

The menu method accepts an configuration object with the following options:

### delay
* Delay (in milliseconds) of menu item closing
* Type: number
* Default: `300`

### subMenuClass
* CSS class name of any sub menu.
* Type: string
* Default: `sub-menu`

### menuItemClass
* CSS class name of any menu item.
* Type: string
* Default: `menu-item`

### visibleMenuItemClass
* CSS class name of the visible menu item.
* Type: string
* Default: `is-menu-item-visible`

## Development

### Installation
This project requires [node](https://nodejs.org/) for the development installation so you can
install client-side dependencies, build it and test it.

Please run following commands:
```sh
$ npm install https://github.com/the-software-factory/jquery-menu.git
$ cd node_modules/jquery-menu
$ npm install
$ node_modules/bower/bin/bower install
```

### Project structure
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

|   *Grunt task*    | *jshint* | *uglify* | *usebanner* | *devserver* | *watch* | *conventionalChangelog* | *changelogCommit* |
|-------------------|:--------:|:--------:|:-----------:|:-----------:|:-------:|:-----------------------:|:-----------------:|
|      grunt        |    *     |    *     |      *      |             |         |                         |                   |
| grunt development |          |          |             |      *      |    *    |                         |                   |
| grunt changelog   |          |          |             |             |         |          *              |         *         |

* *jshint*: Validate files with JSHint.
* *uglify*: Create the final \*.min.js.
* *usebanner*: Prepends a banner to the minified file
* *devserver*: Spawns a web server so you can rapidly try your application in action
* *watch*: Run `default` task when `src` or `test` files are added, changed or deleted.
* *conventionalChangelog*: Generates a CHANGELOG.md file from the git log
* *changelogCommit*: Prepares a new git commit with the CHANGELOG.md file

## Tests
Take a look at [`test/README.md`](test/README.md) for more details.
