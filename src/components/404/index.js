// @flow

/**
 * @file 404
 * @author zhaomuwei
 */

import React from 'react';

export default class extends React.PureComponent {
    render() {
        return (
            <section
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -90%)',
                    fontFamily: 'serif',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                }}
            >
                <h1
                    style={{
                        margin: 0, fontSize: '110px', textAlign: 'center',
                    }}
                >
                    404
                </h1>
                <p
                    style={{
                        margin: 0, fontSize: '26px', textAlign: 'center', textDecoration: 'underline',
                    }}
                >
                    LOST
                </p>
            </section>
        );
    }
}
