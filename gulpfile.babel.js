import gulp from 'gulp'
import browserSync from 'browser-sync'
import del from 'del'

import { paths } from './tasks/config'
import environments from 'gulp-environments'

const development = environments.development;
const production = environments.production;

/**
 * Import theme specific tasks
 */
import { styles, scripts, views, fontGenerator } from './tasks/tasks'
import { imageMinification } from './tasks/tasks'
import { svgIcons } from './tasks/tasks'
import { copy } from './tasks/tasks'

/**
 *  Start the engine 🚙
 */
const server = () => {
  browserSync.init({
    watch: true,
    injectChanges: true,
    server: {
      baseDir: "./public/",
      index: "index.html"
    }
  })
}

const reload = (done) => {
  browserSync.reload();
  done();
}

const watch = () => {
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload))
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.views.src, gulp.series(views, reload))
}

/**
 * Wipe assets (sounds way too dirty)
 */
const clean = () => del([ 'public' ])
const cleanFontStyles = () => del([  `${paths.fonts.dest}/*.css` ])

/**
 * Build icons and images
 */
export const icons = gulp.series(svgIcons)
export const images = gulp.series(imageMinification)
export const fonts = gulp.series(fontGenerator, cleanFontStyles)

/**
 * Custom environments
 */
const dev = gulp.series(clean, icons, gulp.parallel(server, images, fonts, scripts, styles, views, copy, watch))
const prod = gulp.series(clean, gulp.series(clean, icons, images, fonts, scripts, styles, views, copy))

let build = production() ? prod : dev

export default build
