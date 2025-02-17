import style from './Login.module.css'
import Layout from "../../components/Layout/Layout.tsx";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";

const Login = () => {
    return (
        <Layout>
            <div className={style['login']}>
                <LoginForm />
            </div>
        </Layout>
    );
};

export default Login;