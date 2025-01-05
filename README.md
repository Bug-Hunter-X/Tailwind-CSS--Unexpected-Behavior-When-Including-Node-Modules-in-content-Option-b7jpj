# Tailwind CSS: Unexpected Behavior When Including Node Modules in `content` Option

This repository demonstrates a common error when configuring Tailwind CSS's `content` option. Including unnecessary files, especially from node_modules, can lead to unexpected build errors and incorrect styling.

## Bug Description

The bug arises from specifying `'./node_modules/flowbite/**/*.js'` within the `content` array of the Tailwind CSS configuration. This causes Tailwind to attempt to parse all `.js` files within the flowbite node module, potentially leading to errors or unintended style application.

## How to Reproduce

1. Clone this repository.
2. Install the necessary packages using `npm install`.
3. Try to build your project.  You'll encounter errors or unexpected styling due to the incorrect `content` configuration.

## Solution

The solution is to remove the `'./node_modules/flowbite/**/*.js'` entry from the `content` array. Tailwind CSS should only process your application's source files.

## Lessons Learned

* Carefully review the files included in your Tailwind CSS `content` array.
* Avoid including node_modules unless absolutely necessary and understood.
* Ensure that your paths are correct and specific to your project's files.