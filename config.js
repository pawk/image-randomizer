// where you want your art to be saved
const ART_DIR = './art'
// how many art you want to generate
const ART_COUNT = 10
// classes will be translated to directory paths of $ATTRIBUTE_DIR/$ATTRIBUTE_CLASS, i.e.: ./images/attr1
const ATTRIBUTE_CLASSES = ['attr1', 'attr2', 'attr3', 'attr4']
// directory where you hold ATTRIBUTE_CLASSES directories
const ATTRIBUTE_DIR = './images'
// number of milliseconds between art generations
const DELAY = 0

module.exports = {
    ART_DIR,
    ART_COUNT,
    ATTRIBUTE_CLASSES,
    ATTRIBUTE_DIR,
    DELAY,
}
