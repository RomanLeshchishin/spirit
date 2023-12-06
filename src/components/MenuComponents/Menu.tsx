import React, {useState} from "react";
import { Button, Layout } from 'antd';
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
import { ArrowBack } from './ArrowBack';
import { ArrowNext } from './ArrowNext';
import Logo from "../LogoComponent/Logo.tsx";

import styles from "./styles/Menu.module.scss"

const MenuCustom = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout className={styles.layout}>
                <Sider className={styles.sider}
                       width={256}
                       trigger={null}
                       collapsible
                       collapsed={collapsed}
                       collapsedWidth={94}
                >
                    {collapsed? (
                        <div className={styles.logoMin}>
                            <Logo width={50} height={50} min={collapsed} />
                        </div>
                    ) : (
                        <div className={styles.logo}>
                            <Logo width={203} height={70} min={collapsed} />
                        </div>
                    )}

                    <Menu
                        mode="inline"
                    >
                        <Menu.Item key={'/'} icon={<HomeOutlined style={{ fontSize: '120%' }} />}>Главная</Menu.Item>
                        <Menu.Item key={'//'} icon={<ShoppingOutlined style={{ fontSize: '120%' }} />}>Услуги</Menu.Item>
                        <Menu.Item key={'///'} icon={<PercentageOutlined style={{ fontSize: '120%' }} />}>Акции</Menu.Item>
                        <Menu.Item key={'/horses'} icon={<HeartOutlined style={{ fontSize: '120%' }} />}>Наши лошади</Menu.Item>
                        <Menu.Item key={'////'} icon={<TeamOutlined style={{ fontSize: '120%' }} />}>Наши тренеры</Menu.Item>
                        <Menu.Item key={'/comments'} icon={<SmileOutlined style={{ fontSize: '120%' }} />}>Отзывы</Menu.Item>
                        <Menu.Item key={'/////'} icon={<PhoneOutlined style={{ fontSize: '120%' }} />}>Контакты</Menu.Item>
                        <Menu.Item key={'/signup'} icon={<MailOutlined style={{ fontSize: '120%' }} />}>Записаться</Menu.Item>
                        <Menu.Item key={'//////'} icon={<PictureOutlined style={{ fontSize: '120%' }} />}>Фотогалерея</Menu.Item>
                    </Menu>
                    <Button
                        type="text"
                        icon={collapsed ? <ArrowBack /> : <ArrowNext />}
                        onClick={() => setCollapsed(!collapsed)}
                        className={styles.button}
                        style={{
                            width: 24,
                            height: 24,
                            position: 'absolute',
                            top: 37,
                            right: -12,
                            zIndex: 12,
                        }}
                    />
                </Sider>
            </Layout>
        </>
    );
};

export default MenuCustom;
