const artifactPath = 'public'

export const paths = {
  styles: {
    src: 'assets/sass/**/*.scss',
    dest: `${artifactPath}/css/`
  },
  scripts: {
    src: 'assets/js/**/*.js',
    dest: `${artifactPath}/js/`
  },
  views: {
    src: [
      'pages/**/*.njk',
      'templates/**/*.njk'
    ],
    dest: `${artifactPath}`
  },
  fonts: {
    src: 'assets/fonts/**/*.ttf',
    dest: `${artifactPath}/fonts/`
  },
  images: {
    src: 'assets/images/**/*',
    dest: `${artifactPath}/images/`
  },
  icons: {
    src: 'assets/icons/**/*',
    dest: `${artifactPath}/icons/`
  },
  raw: {
    woff: {
      src: 'assets/fonts/**/*.{woff,woff2}',
      dest: `${artifactPath}/fonts/`
    }
  }
}
