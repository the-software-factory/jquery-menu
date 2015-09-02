[![Build Status](https://travis-ci.org/the-software-factory/jquery-menu.svg?branch=master)](https://travis-ci.org/the-software-factory/jquery-menu)

# jQuery Menu
A menu with the default configuration, disabled items and nested menus.
This plugin is used to define the behaviour of a menu and of all its menu items.

## Installation
You'll need [bower](http://bower.io/) to install jQuery Menu library and its dependencies

Install the library and save it as a dependency in your project:
```sh
$ bower --save install jquery-menu
```

## Options
Please run the following script to initialize a menu with the default options:
```js
$('.menu').menu();
```

You can also specify the following custom options that will overwrite the default ones:

#### delay
* Type: `Number`
* Default: `300`
* Description: Delay (in milliseconds) of menu item closing

#### subMenuClass
* Type: `String`
* Default: `sub-menu`
* Description: CSS class name of any sub menu

#### menuItemClass
* Type: `String`
* Default: `menu-item`
* Description: CSS class name of any menu item

#### visibleMenuItemClass
* Type: `String`
* Default: `is-menu-item-visible`
* Description: CSS class name of the visible menu item

#### Example usage
```js
$('.menu').menu({
	delay: 500,
	subMenuClass: "custom-sub-menu-class"
});
```

## Development
The project has the following structure:
```
dist/
	*.min.js // The uglified version of the component.
example/
	index.html	// jQuery Menu demo page
	css/*.css	// Demo page's stylesheet
src/
    *.js // The source file
tests/
    src/*.js // Tests
		...	// Test runner configuration and test dependencies
...
```

### Installation
This project requires [node](https://nodejs.org/) for the development installation so you can
install client-side dependencies, build it and test it.

Please run following commands in the project's root directory to install all dependencies:
```sh
$ npm install
$ ./node_modules/bower/bin/bower install
$ cd test && npm install
```

### Grunt Tasks
Here is a list of grunt `tasks` => `actions` mappings, see below for a deeper explanation of the actions.

|   *Grunt task*    | *jshint* | *uglify* | *usebanner* | *devserver* | *watch* | *emptyTheChangelog* | *conventionalChangelog* | *changelogCommit* |
|-------------------|:--------:|:--------:|:-----------:|:-----------:|:-------:|:-------------------:|:-----------------------:|:-----------------:|
|      grunt        |    *     |    *     |      *      |             |         |                     |                         |                   |
| grunt development |          |          |             |      *      |    *    |                     |                         |                   |
| grunt changelog   |          |          |             |             |         |         *           |          *              |         *         |

* *jshint*: Validate files with JSHint.
* *uglify*: Create the final \*.min.js.
* *usebanner*: Prepends a banner to the minified file
* *devserver*: Spawns a web server so you can rapidly test your app in action
* *watch*: Run default task when src or test files are added, changed or deleted.
* *emptyTheChangelog*: Truncates the CHANGELOG.md file as conventionalChangelog task will append fully regenerated changelog
* *conventionalChangelog*: Appends Markdown-formatted changelog history to CHANGELOG.md
* *changelogCommit*: Prepares a new commit with updated CHANGELOG.md and commit message "CHANGELOG.md Updated"

## Tests
Take a look at [`test/README.md`](test/README.md) for more details.

## Contributing
Take a look at [`CONTRIBUTING.md`](CONTRIBUTING.md) for more details.
