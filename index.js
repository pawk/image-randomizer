const mergeImages = require('merge-images');
const { readdir, writeFile } = require('fs/promises');
const { Canvas, Image } = require('canvas');
const { v4: uuid4 } = require('uuid');

const ATTRIBUTE_CLASSES = ['attr1', 'attr2', 'attr3']

const getRandomImage = attribute => {
    const attributeDir = `./images/${attribute}`
    return readdir(attributeDir)
        .then(items => `${attributeDir}/${items[Math.floor(Math.random()*items.length)]}`)
}

function makeArt(attributes) {
    mergeImages(attributes, {
        Canvas: Canvas,
        Image: Image
      })
    .then(b64 => writeFile(uuid4(), b64));
}

const result = Promise
    .all(ATTRIBUTE_CLASSES.map(getRandomImage))
    .then(makeArt)
