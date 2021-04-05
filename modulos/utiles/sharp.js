const sharp = require('sharp')

sharp('./guts.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png') 