import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout'
import axios from 'axios'

export default function ComicDetail(props) {

    return (
        <Layout>
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img} alt={props.comic.alt} ></img>
        </Layout>
    )

}

export async function getServerSideProps(context) {

    const num = context.query.id;

    const response = await axios.get(`https://xkcd.com/${num}/info.0.json`);

    return {
        props: {
            comic: response.data,
        }
    }

}
