import {Layout} from 'antd';
const { Sider } = Layout;
import { Menu } from 'antd';
import {
    HomeOutlined,
    PercentageOutlined,
    HeartOutlined,
    TeamOutlined,
    SmileOutlined,
    MailOutlined,
    PictureOutlined,
} from '@ant-design/icons';
import Logo from "../LogoComponent/Logo.tsx";

import styles from "./styles/Menu.module.scss"
import { Link } from 'react-router-dom';
import useStore from "../../store";
import {Role} from "../../models/Role.ts";


const MenuCustom = () => {
    const store = useStore();
    return (
        <>
            <Layout className={styles.layout}>
                <Sider className={styles.sider}
                       width={256}
                >
                    <div className={styles.logo}>
                        <Logo width={203} height={70} type={'based'} />
                    </div>
                    { store.role == Role.User ?
                    <Menu
                        mode="inline"
                    >
                        <Menu.Item className={styles.menuItem} key={'/'} icon={<HomeOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/">Главная</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/horses'} icon={<HeartOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/horses">Наши лошади</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/coaches'} icon={<TeamOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/coaches">Наши тренеры</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/comments'} icon={<SmileOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/comments">Отзывы</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/signup'} icon={<MailOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/signup">Записаться</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/photoGallery'} icon={<PictureOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/photoGallery">Фотогалерея</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/promotions'} icon={<PercentageOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/promotions">Акции</Link></Menu.Item>
                    </Menu>
                        :
                        <Menu
                            mode="inline"
                        >
                            <Menu.Item className={styles.menuItem} key={'/'} icon={<HomeOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/">Главная</Link></Menu.Item>
                            <Menu.Item className={styles.menuItem} key={'/horses'} icon={<HeartOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/horses">Наши лошади</Link></Menu.Item>
                            <Menu.Item className={styles.menuItem} key={'/coaches'} icon={<TeamOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/coaches">Наши тренеры</Link></Menu.Item>
                            <Menu.Item className={styles.menuItem} key={'/comments'} icon={<SmileOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/comments">Отзывы</Link></Menu.Item>
                            <Menu.Item className={styles.menuItem} key={'/photoGallery'} icon={<PictureOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/photoGallery">Фотогалерея</Link></Menu.Item>
                            <Menu.Item className={styles.menuItem} key={'/promotions-edit'} icon={<PercentageOutlined style={{ fontSize: '120%' }} onPointerEnterCapture onPointerLeaveCapture/>}><Link to="/promotions-edit">Акции</Link></Menu.Item>
                        </Menu>
                    }
                </Sider>
            </Layout>
        </>
    );
};

export default MenuCustom;
