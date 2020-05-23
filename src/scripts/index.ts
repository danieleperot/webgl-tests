import '../styles/index.scss'

/**
 * My main function
 */
function main() {
  const canvas : HTMLCanvasElement = document.querySelector('#glCanvas')
  const gl = canvas.getContext('webgl')

  if (gl === null) {
    console.warn('WebGL is not supported.')
    return
  }

  // Set clear color to black
  gl.clearColor(0.0, 0.0, 0.0, 1.0)

  // Clear the color buffer with the specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT)
}

window.onload = main
