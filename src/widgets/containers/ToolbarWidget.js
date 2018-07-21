import React, { Component } from 'react'
import {
  Toolbar,
  ToolbarButton
} from 'react-onsenui'

class ToolbarWidget extends Component {
    render(){
        const { title } = this.props
        return(
            <Toolbar>
                <div className = "left">
                    <ToolbarButton icon="md-account" />
                </div>
                <div className = "center">{ title }</div>
                <div className = "right">
                    { this.props.renderRight() }
                    <ToolbarButton icon="md-more-vert"/>
                </div>
            </Toolbar>
        )

    }
}

export default ToolbarWidget