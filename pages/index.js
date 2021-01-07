import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import axios from 'axios'
import Link from 'next/link'

export default function Home(props) {

  return (
      <Layout>
        <div className={styles.container}>
        <Head>
            <title>Daily XKCD</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Daily XKCD
            </h1>

            <h2>{props.comic.safe_title}</h2>
            <img src={props.comic.img} alt={props.comic.alt} />

            <Footer comicNum={props.comic.num} />
        </main>

        </div>
      </Layout>
  )
}

function Footer({ comicNum }) {

    const nums = [];

    const num = comicNum - 1;

    for(let n = num; n > num - 10; n--) {
        nums.push(n);
    }

    return (
        <footer>
            <h2>Previous 10</h2>
            <ul>
                {nums.map(num => (
                    <li>
                        <Link href="/num/[id].js" as={`/num/${num}`}><a>#{num}</a></Link>
                    </li>
                ))}
            </ul>

        </footer>
    )
}

export async function getStaticProps() {

    const response = await axios.get('https://xkcd.com/info.0.json');

    return {
        props: {
            comic: response.data
        }
    }
}


