// Import the global CSS. If your CSS is in a different file, update the path.
import '../app/globals.css'
import type { AppProps } from 'next/app'

// This is the custom App component that wraps your pages. 
// Notice how it receives the Component and pageProps from its arguments.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Don't forget to export the component!
export default MyApp