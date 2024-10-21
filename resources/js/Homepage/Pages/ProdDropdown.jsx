import React from 'react';
import { Dropdown, Space } from 'antd';
import { GrBike, GrCar, GrServices } from 'react-icons/gr';

const items = [
    {
        key: 1,
        label: (
            <a className='flex items-center gap-2' rel="noopener noreferrer" href={`${location.pathname.split('/')[1]=='parts' ? '/parts':''}/products/machine`}>
                <GrServices />   Machines
            </a>
        ),
    },

    {
        key: 3,
        label: (
            <a className='flex items-center gap-2' rel="noopener noreferrer" href={`${location.pathname.split('/')[1]=='parts' ? '/parts':''}/products/electric-vehicles`}>
                <GrCar /> Vehicles
            </a>
        ),
    },
    {
        key: 2,
        label: (
            <a className='flex items-center gap-2' rel="noopener noreferrer" href={`${location.pathname.split('/')[1]=='parts' ? '/parts':''}/products/electric-bikes`}>
                <GrBike /> Bikes
            </a>
        ),
    },

];

const ProdDropdown = () => (
    <Dropdown
        menu={{
            items,
        }}

    >
        <a onClick={(e) => e.preventDefault()}>
            <Space className='text-light' style={{ color: 'white', cursor: 'pointer', fontWeight: '500' }}>
                Products
            </Space>
        </a>
    </Dropdown>
);
export default ProdDropdown;