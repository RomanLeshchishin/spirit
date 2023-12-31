import React from "react";
import {Layout} from 'antd';
const { Sider } = Layout;
import { Menu } from 'antd';
import {
    HomeOutlined,
    ShoppingOutlined,
    PercentageOutlined,
    HeartOutlined,
    TeamOutlined,
    SmileOutlined,
    PhoneOutlined,
    MailOutlined,
    PictureOutlined,
} from '@ant-design/icons';
import Logo from "../LogoComponent/Logo.tsx";

import styles from "./styles/Menu.module.scss"
import { Link } from 'react-router-dom';


const MenuCustom = () => {

    return (
        <>
            <Layout className={styles.layout}>
                <Sider className={styles.sider}
                       width={256}
                >
                    <div className={styles.logo}>
                        <Logo width={203} height={70} type={'based'} />
                    </div>

                    <Menu
                        mode="inline"
                    >
                        <Menu.Item className={styles.menuItem} key={'/'} icon={<HomeOutlined style={{ fontSize: '120%' }} />}><Link to="/">Главная</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'//'} icon={<ShoppingOutlined style={{ fontSize: '120%' }} />}>Услуги</Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'///'} icon={<PercentageOutlined style={{ fontSize: '120%' }} />}>Акции</Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/horses'} icon={<HeartOutlined style={{ fontSize: '120%' }} />}><Link to="/horses">Наши лошади</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'////'} icon={<TeamOutlined style={{ fontSize: '120%' }} />}>Наши тренеры</Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/comments'} icon={<SmileOutlined style={{ fontSize: '120%' }} />}><Link to="/comments">Отзывы</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/////'} icon={<PhoneOutlined style={{ fontSize: '120%' }} />}>Контакты</Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'/signup'} icon={<MailOutlined style={{ fontSize: '120%' }} />}><Link to="/signup">Записаться</Link></Menu.Item>
                        <Menu.Item className={styles.menuItem} key={'//////'} icon={<PictureOutlined style={{ fontSize: '120%' }} />}>Фотогалерея</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        </>
    );
};

export default MenuCustom;
