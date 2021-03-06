import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import '../styles/index.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
