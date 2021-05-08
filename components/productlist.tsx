import Image from 'next/image';
import axios from 'axios'
import Product from '../interfaces/product'

export default function ProductList(props): JSX.Element {

  const [appState, setAppState] = useState({ loading: true })

  const [prodList, setProdList] = useState([])


  useEffect(async () => {
    const apiURL = process.env.PRODSTORE_URL + "prodtlist"
    setAppState({ loading: true });
    const response = await axios.get(apiURL)
    setAppState({ loading: false, repos: allRepos });
    console.log(response)
  }, [setAppState]);

  return (
    <>
      <p>Aqui fica a lista de produtos</p>
    </>
  );
}