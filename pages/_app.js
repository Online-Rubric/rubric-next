import 'tailwindcss/tailwind.css'
import '../styles/style.css'
// import { UserProvider } from '@auth0/nextjs-auth0';

export default function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider>
      <Component {...pageProps} />
    // </UserProvider>
  );
}