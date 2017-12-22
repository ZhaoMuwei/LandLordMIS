/* eslint-disable */

import {parsePagination} from '../urlparser';

it('No search string', () => {
    expect(parsePagination('')).toEqual({pn: 0, rn: 10});
});

it('No search string 2', () => {
    expect(parsePagination('?')).toEqual({pn: 0, rn: 10});
});

it('Bad search string', () => {
    expect(parsePagination('?%23euqbv&eqrnvi&&')).toEqual({pn: 0, rn: 10});
});

it('Bad search string 2', () => {
    expect(parsePagination('?pn=-10&rn=-23')).toEqual({pn: 0, rn: 10});
});

it('Bad search string 3', () => {
    expect(parsePagination('?pn=10aa&rn=-23ii')).toEqual({pn: 0, rn: 10});
});

it('Finally', () => {
    expect(parsePagination('?pn=1&rn=20')).toEqual({pn: 1, rn: 20});
});
