const { src, dest, series, watch } = require(`gulp`),

    htmlValidator = require(`gulp-html`),
    htmlCompressor = require(`gulp-htmlmin`)
    CSSLinter = require(`gulp-stylelint`);

    let validateHTML = () => {
        return src(`dev/html/*.html`).pipe(htmlValidator())
        .pipe(dest(`temp`));
    };

    let compressHTML = () => {
    return src(`dev/html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
      };

  let lintCSS = () => {
      return src(`dev/css/style.css`)
          .pipe(CSSLinter({
              failAfterError: false,
              reporters: [
                  {formatter: `string`, console: true}
              ]
          }))
          .pipe(dest(`temp/css`));
  };


exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
