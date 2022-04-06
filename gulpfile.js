const { src, dest, series, watch } = require(`gulp`),

    htmlValidator = require(`gulp-html`);

    let validateHTML = () => {
        return src(`dev/html/*.html`).pipe(htmlValidator())
        .pipe(dest(`temp`));
    };


exports.validateHTML = validateHTML;
