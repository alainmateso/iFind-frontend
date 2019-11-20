import React, { Component } from 'react'
import notFound from '../../src/notfound.png'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={ notFound } className="notFound" alt="Not Found"/>
            </div>
        )
    }
}

export default NotFound
