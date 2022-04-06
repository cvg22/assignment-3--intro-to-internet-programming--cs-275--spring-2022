const { src, dest, series, watch } = require(`gulp`),

    htmlValidator = require(`gulp-html`),
    htmlCompressor = require(`gulp-htmlmin`),
    CSSLinter = require(`gulp-stylelint`),
    babel = require(`gulp-babel`),
    jsLinter = require(`gulp-eslint`),
    jsCompressor = require(`gulp-uglify`);


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

  let lintJS = () => {
    return src(`dev/js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
  };

  let transpileJSForDev = () => {
    return src(`dev/js/*.js`)
        .pipe(babel())
	      .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
  };

  let transpileJSForProd = () => {
    return src(`dev/js/*.js`)
        .pipe(babel())
	      .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
  };

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
