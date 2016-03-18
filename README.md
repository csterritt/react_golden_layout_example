# React working with Golden Layout

This is based on a project I did to get the minimal tooling up and running to support React development, following [Pete Hunt's awesome webpack setup tutorial](https://github.com/petehunt/webpack-howto).

## Installation

First, install webpack if it’s not available:

`npm install -g webpack`

Next, run `npm install` to install all dependencies.

Then, you can run `npm test` to run some (unbelievably trivial) tests.

Finally, you can run `webpack` to compile all JSX, etc. into the `index.js` file.  Open `index.html` in the browser of your choice, and it all should work.
 
There are a lot of other `webpack` command line options, see the webpack tutorial above.

## The change I made to Golden Layout to make this work

Golden Layout needs to be involved in the creation of Golden Layout panes.  Once it has created the DOM node, we can attach a React instance to it.

The flipside is that React needs to be allowed to clean up its events, etc. bound to the DOM node when that Golden Layout pane is closed.

So the version of Golden Layout named in the `package.json` file is from my repository.

My change adds a new Golden Layout event, `beforeItemDestroyed`.  This was a two line change, and I've done a pull request for it.

## How the code works

The code in `menu_builder.js` sets up the menu in the top-right part of the page to have draggable names, which cause Golden Layout to generate panes when you drag them, using Golden Layout's `createDragSource` function.

The code in `golden_layout_setup.js` uses Golden Layout's `registerComponent` function to say what happens when those panes are generated.

That's also where the `beforeItemDestroyed` binding is set up to run ReactDOM's `unmountComponentAtNode` method before the Golden Layout pane is destroyed.
