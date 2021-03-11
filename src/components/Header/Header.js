import React from 'react';

const Header = () => {
    const bannerDivStyle = {
        backgroundImage: 'url("https://media.istockphoto.com/photos/the-stadium-picture-id959685582?k=6&m=959685582&s=612x612&w=0&h=DvkXyShuBDzyEAVl16ZkWcP_twzJzCV81yYFUrRjv0w=")',
        backgroundSize: '1400px 200px',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        width: '100%'
    }
    return (
        <div style={bannerDivStyle}>
            <h1 className='text-center text-warning h1 display-2 p-5'>Team History</h1>
        </div>
    );
};

export default Header;