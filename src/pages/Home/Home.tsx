import style from './Home.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import Hero from "../../components/Hero/Hero.tsx";

const Home = () => {
    return (
        <Layout>
            <div className={style['home']}>
                <Hero />
            </div>
        </Layout>
    )
}

export default Home;