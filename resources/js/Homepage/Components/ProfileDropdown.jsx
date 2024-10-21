import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { UserOutlined, ShoppingCartOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import { GrCart, GrDashboard, GrLocation, GrLogin, GrLogout, GrUserAdmin, GrUserSettings } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa6';

const ProfileDropdown = ({ auth, hideIcon = false }) => {


    const handleMenuClick = ({ key }) => {
        switch (key) {
            case 'profile':
                location.href = `/profile`;
                break;
            // case 'trackOrder':
            //     location.href = '/track';
            //     break;
            case 'signOut':
                location.href = '/logout';
                break;
            case 'admin_dash':
                location.href = '/dashboard/home';
                break;
            default:
                break;
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="profile" icon={<GrUserSettings size={15} />}>
                {auth?.user?.name ?? 'Guest'}
            </Menu.Item>
            {auth?.user?.email == 'admin@autopulse.com' && <Menu.Item key="admin_dash" icon={<GrDashboard size={15} />}>
                Dashboard
            </Menu.Item>}
            <Menu.Item key="trackOrder" icon={<GrLocation size={15} />}>
                Track Order
            </Menu.Item>

            {auth.user ?
                <Menu.Item key="signOut" icon={<GrLogout />} style={{ color: 'red' }}>
                    Sign Out
                </Menu.Item> :
                <Menu.Item key="singIn" icon={< GrLogin />} style={{ color: 'green' }}>
                    SignIn
                </Menu.Item>}
        </Menu >
    );

    return (
        <Dropdown className='p-0' overlay={menu} trigger={['click']}>
            <Button className='primary-btn' icon={<FaRegUser />} >  </Button>
        </Dropdown>
    );
};

export default ProfileDropdown;
