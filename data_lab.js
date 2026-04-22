const Data_Build = [
    {
        category: 'CPU',
        items: [
            { id: 101, name: 'Intel Core i3-12100F', price: 2150000, segment: 'bình dân' },
            { id: 102, name: 'Intel Core i5-12400F', price: 3450000, segment: 'bình dân' },
            { id: 103, name: 'Intel Core i5-13400F', price: 5490000, segment: 'trung cấp' },
            { id: 104, name: 'Intel Core i5-13600K', price: 7990000, segment: 'trung cấp' },
            { id: 105, name: 'Intel Core i7-14700K', price: 10590000, segment: 'cao cấp' },
            { id: 106, name: 'Intel Core i9-14900K', price: 15500000, segment: 'cao cấp' },
            { id: 107, name: 'AMD Ryzen 5 5600', price: 3200000, segment: 'bình dân' },
            { id: 108, name: 'AMD Ryzen 5 7600', price: 5200000, segment: 'trung cấp' },
            { id: 109, name: 'AMD Ryzen 7 7800X3D', price: 10900000, segment: 'cao cấp' },
            { id: 110, name: 'AMD Ryzen 9 7950X', price: 14500000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'Mainboard',
        items: [
            { id: 301, name: 'ASUS PRIME H610M-K', price: 1950000, segment: 'bình dân' },
            { id: 302, name: 'MSI PRO B760M-P', price: 2850000, segment: 'bình dân' },
            { id: 303, name: 'MSI MAG B760M MORTAR', price: 3990000, segment: 'trung cấp' },
            { id: 304, name: 'ASUS ROG STRIX B760-G', price: 4850000, segment: 'trung cấp' },
            { id: 305, name: 'GIGABYTE Z790 AORUS ELITE', price: 7500000, segment: 'cao cấp' },
            { id: 306, name: 'ASUS ROG MAXIMUS Z790 HERO', price: 16900000, segment: 'cao cấp' },
            { id: 307, name: 'MSI PRO B650M-A WIFI', price: 4250000, segment: 'trung cấp' },
            { id: 308, name: 'ASUS ROG STRIX X670E-F', price: 11500000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'VGA',
        items: [
            { id: 201, name: 'ASUS Dual GTX 1650', price: 3850000, segment: 'bình dân' },
            { id: 202, name: 'MSI RX 6600 MECH 2X', price: 5500000, segment: 'bình dân' },
            { id: 203, name: 'GIGABYTE RTX 4060 Eagle OC', price: 8900000, segment: 'trung cấp' },
            { id: 204, name: 'ASUS Dual RTX 4060 Ti', price: 11500000, segment: 'trung cấp' },
            { id: 205, name: 'MSI RTX 4070 SUPER Ventus', price: 17490000, segment: 'cao cấp' },
            { id: 206, name: 'ASUS TUF RTX 4070 Ti SUPER', price: 24500000, segment: 'cao cấp' },
            { id: 207, name: 'ASUS ROG Strix RTX 4080 Super', price: 32500000, segment: 'cao cấp' },
            { id: 208, name: 'MSI RTX 4090 SUPRIM X', price: 59900000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'RAM',
        items: [
            { id: 401, name: '8GB Kingston Fury Beast DDR4', price: 590000, segment: 'bình dân' },
            { id: 402, name: '16GB (2x8) Corsair Vengeance LPX DDR4', price: 1150000, segment: 'bình dân' },
            { id: 403, name: '16GB (1x16) ADATA XPG Lancer DDR5', price: 1550000, segment: 'trung cấp' },
            { id: 404, name: '32GB (2x16) Corsair Vengeance RGB DDR5', price: 3150000, segment: 'trung cấp' },
            { id: 405, name: '32GB (2x16) G.Skill Trident Z5 RGB DDR5', price: 3450000, segment: 'cao cấp' },
            { id: 406, name: '64GB (2x32) G.Skill Trident Z5 RGB DDR5', price: 6850000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'SSD',
        items: [
            { id: 501, name: '250GB Kingston NV2 NVMe Gen4', price: 750000, segment: 'bình dân' },
            { id: 502, name: '500GB Kingston NV2 NVMe Gen4', price: 990000, segment: 'bình dân' },
            { id: 503, name: '500GB Samsung 980 NVMe Gen3', price: 1250000, segment: 'trung cấp' },
            { id: 504, name: '1TB MSI Spatium M450 Gen4', price: 1850000, segment: 'trung cấp' },
            { id: 505, name: '1TB Samsung 990 Pro Gen4', price: 3250000, segment: 'cao cấp' },
            { id: 506, name: '2TB WD Black SN850X Gen4', price: 5450000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'PSU',
        items: [
            { id: 601, name: 'Deepcool PK550D 550W 80 Plus Bronze', price: 990000, segment: 'bình dân' },
            { id: 602, name: 'MSI MAG A650BN 650W 80 Plus Bronze', price: 1350000, segment: 'bình dân' },
            { id: 603, name: 'Deepcool PM750D 750W 80 Plus Gold', price: 1950000, segment: 'trung cấp' },
            { id: 604, name: 'Corsair RM750e 750W 80 Plus Gold', price: 2850000, segment: 'trung cấp' },
            { id: 605, name: 'Corsair RM850e 850W 80 Plus Gold', price: 3250000, segment: 'cao cấp' },
            { id: 606, name: 'ASUS ROG Thor 1000W Platinum II', price: 8900000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'Case',
        items: [
            { id: 701, name: 'Xigmatek NYX Air (Kèm 3 Fan)', price: 550000, segment: 'bình dân' },
            { id: 702, name: 'Mik LV12 Mini - Black (Bể cá)', price: 950000, segment: 'trung cấp' },
            { id: 703, name: 'Deepcool CH560 Digital', price: 2250000, segment: 'trung cấp' },
            { id: 704, name: 'NZXT H9 Flow White', price: 4250000, segment: 'cao cấp' },
            { id: 705, name: 'ROG Strix Helios GX601', price: 7900000, segment: 'cao cấp' }
        ]
    },
    {
        category: 'Cooling',
        items: [
            { id: 801, name: 'Tản khí Thermalright Assassin X 120', price: 450000, segment: 'bình dân' },
            { id: 802, name: 'Tản khí Deepcool AK400 Digital', price: 850000, segment: 'trung cấp' },
            { id: 803, name: 'Tản nhiệt nước AIO Deepcool LS720', price: 3150000, segment: 'cao cấp' },
            { id: 804, name: 'Tản nhiệt nước AIO ASUS ROG RYUJIN III 360', price: 9500000, segment: 'cao cấp' }
        ]
    }
];

const PC_Configurations = [
    {
        name: 'Văn phòng',
        description: 'Tối ưu chi phí, mượt mà các tác vụ Word, Excel, Web.',
        items: [101, 301, 201, 401, 501, 601, 701, 801]
    },
    {
        name: 'IT / Lập trình',
        description: 'Cấu hình mạnh mẽ cho code, Docker và đa nhiệm.',
        items: [104, 304, 203, 404, 504, 603, 703, 802]
    },
    {
        name: 'Đồ họa chuyên nghiệp',
        description: 'Dành cho Render 3D, dựng phim 4K và thiết kế nặng.',
        items: [105, 305, 206, 405, 505, 605, 704, 803]
    },
    {
        name: 'Trí tuệ nhân tạo (AI)',
        description: 'Cấu hình tối thượng với VRAM cực lớn để train model.',
        items: [106, 306, 208, 406, 506, 606, 705, 804]
    }
];