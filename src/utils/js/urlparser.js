// @flow

/**
 * @file
 * @author ZhaoMuwei
 */

import qs from 'qs';

export const parseURL = (url: string = window.location.search) => (
    qs.parse(url.slice(1))
);

export const parsePagination = (url: string = window.location.search) => {
    const params = parseURL(url);
    let {pn, rn} = params;
    pn = +pn >= 0 ? +pn : 0;
    rn = +rn >= 0 ? +rn : 10;
    return {pn, rn};
};
