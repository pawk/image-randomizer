const mergeImages = require('merge-images');
const { readdir, unlink, writeFile } = require('fs/promises');
const { Canvas, Image } = require('canvas');
const { v4: uuid4 } = require('uuid');

const ATTRIBUTE_CLASSES = ['attr1', 'attr2', 'attr3']
const ART_DIR = './art'

const getRandomImage = attribute => {
    const attributeDir = `./images/${attribute}`
    return readdir(attributeDir)
        .then(items => `${attributeDir}/${items[Math.floor(Math.random()*items.length)]}`)
}

function makeArt(attributes, filename) {
    mergeImages(attributes, {
        Canvas: Canvas,
        Image: Image
      })
    .then(b64 => writeFile(`${ART_DIR}/${filename}.png`, b64.split(';base64,').pop(), {encoding: 'base64'}));
}

function* sequence() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

function sleep(ms = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


function clearArt() {
    return readdir(ART_DIR).then(files => files.map(path => `${ART_DIR}/${path}`).map(unlink))
}
async function main() {
    await clearArt()
    for (const ndx of sequence()) {
        await Promise
            .all(ATTRIBUTE_CLASSES.map(getRandomImage))
            .then(attributes => makeArt(attributes, ndx + 1))
        await sleep()
    }
}

main()
