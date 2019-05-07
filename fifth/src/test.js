import React, { Component } from 'react'
import Proptypes from 'prop-types'

class Abc extends Component {
    render () {
        console.log(this.context)
        return (
            <div>
                hello
            </div>
        )
    }
}

Abc.childContextTypes = {
    user: Proptypes.string,
}
export default  Abc