const { src, dest, series, watch } = require(`gulp`),

    htmlValidator = require(`gulp-html`),
    htmlCompressor = require(`gulp-htmlmin`);


    let validateHTML = () => {
        return src(`dev/html/*.html`).pipe(htmlValidator())
        .pipe(dest(`temp`));
    };

    let compressHTML = () => {
    return src(`dev/html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
