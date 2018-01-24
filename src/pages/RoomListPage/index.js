/**
 * @file Room List Page
 * @author ZhaoMuwei
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Pagination} from 'antd';
import api from '../../utils/js/api';
import {parseURL, parsePagination} from '../../utils/js/urlparser';
import BasePage from '../BasePage';

const tableColumns = [
    {title: '名称', dataIndex: 'Name', key: 'Name'},
    {title: 'Group', dataIndex: 'Group', key: 'Group'},
    {title: '地址', dataIndex: 'Address', key: 'Address'},
    {title: '楼层', dataIndex: 'Floor', key: 'Floor'},
    {title: '门牌号', dataIndex: 'Number', key: 'Number'},
];

export default class RoomListPage extends Component {
    state = {
        data: [],
        loading: true,
        pagination: null
    }

    async componentDidMount() {
        const {pn, rn} = parsePagination(window.location.search);

        const response = await api.get('/api/GetRoomList', {
            params: {Offset: pn * rn, Limit: rn},
        });
        const responseData = response.data;
        if (responseData.status !== 0) {
            return;
        }

        console.log('r', response);

        this.setState({
            data: responseData.data.list,
            loading: false,
            pagination: {
                current: pn + 1,
                pageSize: rn,
                total: responseData.data.total,
                showQuickJumper: true,
                defaultPageSize: 15,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                onChange: (page, pageSize) => {},
            }
        });
    }

    render() {
        const {data, loading, pagination} = this.state;

        return (
            <BasePage
                title="房源列表"
                navBarGroup="room"
                navBarKey="roomlist"
                className="RoomListPage"
            >
                <div className="RoomListPage__content">
                    <Table
                        rowKey="ApartmentId"
                        dataSource={data}
                        columns={tableColumns}
                        loading={loading}
                        bordered
                        pagination={false}
                    />
                </div>

                {/* 如何把pagination放到最下 且超长时还可以跟随滚动? */}
                <div className="RoomListPage__pagination">
                    <Pagination {...pagination} />
                </div>
            </BasePage>
        );
    }
}
