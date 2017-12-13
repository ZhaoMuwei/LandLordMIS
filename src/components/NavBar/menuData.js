// @flow
/* eslint-disable */

interface Idata {
    key: string;
    title: string;
    icon: string;
    children?: {key: string, title: string}[]
}

const data: Idata[] = [
    {
        // 'key' should be unique under all menuData direct items
        // not necessary among children
        key: 'room',
        title: '房源',
        icon: 'shop',
        children: [
            // 'key' should be unique under their own children array
            {key: 'room-list', title: '房源列表'},
        ],
    },
    {
        key: 'contract',
        title: '合同',
        icon: 'profile',
        children: [
            {key: 'contract-list', title: '合同列表'},
        ],
    },
    {
        key: 'template',
        title: '合同模版',
        icon: 'form',
        children: [
            {key: 'template-list', title: '模版列表'},
        ],
    },
    {
        key: 'profit',
        title: '收益',
        icon: 'bank',
        children: [
            {key: 'profit-overview', title: '收益概览'},
        ],
    },
    {
        key: 'utilities',
        title: '生活费用',
        icon: 'pay-circle-o',
        children: [
            {key: 'utilities-overview', title: '费用概览'},
        ],
    },
];

export default data;
