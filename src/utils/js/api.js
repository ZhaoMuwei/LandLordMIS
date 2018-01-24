// @flow

/**
 * @file
 * @author ZhaoMuwei
 */

import axios from 'axios';

const instance = axios.create({
    baseURL: '/',
    timeout: 10 * 1000,
});

const axiosGET = instance.get;

export default {
    get: axiosGET,
};
