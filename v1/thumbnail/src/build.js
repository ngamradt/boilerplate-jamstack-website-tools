// Copyright (c) Neal Gamradt. All rights reserved. Licensed under the MIT license.
// See the LICENSE file for license information.

import fs from "fs";
import it from "image-thumbnail";
import path from "path";

const args = process.argv,
      inputDirectory = "input",
      outputDirectory = "output";

var quality = 0,
    size = 10;

//If a size was passed in, use that instead of the default.
if (args[2]) {

    console.log(`The size is: ${args[2]}`);
    size = parseInt(args[2]);

} else {

    console.info("No size was passed in.");

}

//If this argument is set, it will force the output to be a jpeg image set at the given percentage.
if (args[3]) {

    console.log(`The JPEG quality is: ${args[3]}`);
    quality = parseInt(args[3]);

} else {

    console.info("No JPEG quality was passed in.");

}

function checkFile(filename) {

    //Make sure we only process files that were dropped in the folder.
    if (filename !== ".gitignore") {

        //We want to process the file as the original file format.
        if (quality === 0) {

            processOriginalFormat(filename);

        } else {

            processJpegFormat(filename);

        }

    } else {

        console.log("The \".gitignore\" file is not an image file.");

    }

}

function checkOutputDirectory(name) {

    if (fs.existsSync(name)) {

        console.info("The directory already exists.");

    } else {

        fs.mkdirSync(name);

    }

}

async function processJpegFormat(image) {

    console.info(`Processing ${image}...`);

    let basename = path.parse(image).name;

    try {

        const thumbnail = await it(`./${inputDirectory}/${image}`, { percentage: size, jpegOptions: { force: true, quality: quality }});

        fs.writeFileSync(`./${outputDirectory}/jpeg-${size}/${basename}.jpg`,thumbnail, "binary");

    } catch (err) {

        console.error(err);

    }

}

async function processOriginalFormat(image) {

    console.info(`Processing ${image}...`);

    try {

        const thumbnail = await it(`./${inputDirectory}/${image}`, { percentage: size});

        fs.writeFileSync(`./${outputDirectory}/orig-${size}/${image}`,thumbnail, "binary");

    } catch (err) {

        console.error(err);

    }

}

//Make sure the output directory exists
if (quality === 0) {

    checkOutputDirectory(`./${outputDirectory}/orig-${size}`);

} else {

    checkOutputDirectory(`./${outputDirectory}/jpeg-${size}`);

}

fs.readdirSync(inputDirectory).forEach(checkFile);