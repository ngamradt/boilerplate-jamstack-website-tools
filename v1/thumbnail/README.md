# Thumbnail Generator

## Overview

This is a simple thumbnail generator written in [Node.js](https://nodejs.dev/en/).

There are likely other, better ways to do this for Jamstack, but this tool works and got me up-and-running quickly with my initial blog posts.

This tool has an `input` directory where a flat list of files should be dropped in.

Caveats for the `input` directory:

1. This currently doesn't work recursively, so this must be a flat list of files.
2. The following formats are known to work with this tool (but other formats might work as well):
    - `gif`
    - `jpeg`
    - `png`
3. You can mix and match file types that you drop into the `input` folder, they do not have to all be the same format.

## Usage

1. If you haven't already, run `npm install` to install needed dependencies.
2. In the [`input` directory](input) of this tool, drop in the files that you want to make into thumbnails.
3. There are a number of `npm` scripts in the [`package.json`](package.json) file.  You can use those to run some of the preset sizes:
    - Force `JPEG` output:
        * `npm run small-jpeg`
        * `npm run medium-jpeg`
        * `npm run large-jpeg`
        * `npm run full-jpeg`
    - Keep original format:
        * `npm run small-original`
        * `npm run medium-original`
        * `npm run large-original`
4. To run the application with your own parameters, do the following:
    - Keep the original file format: `node ./src/build.js <percentage of original size>` (e.g., `node ./src/build.js 15`)
    - Force output to JPEG format: `node ./src/build.js <percentage of original size> <JPEG quality percentage>` (e.g., `node ./src/build.js 15 90`)
4. The resulting thumbnails that were created will be in subdirectories of the [`output` directory](output).
5. Move your new thumbnails to where they are needed and then clear out the [`input` directory](input) and [`output` directory](output) (sans the `.gitignore` file).
