import React, { Component } from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import ons from 'onsenui'
import {
    Page,
    ToolbarButton
} from 'react-onsenui'
import ToolbarWidget  from '../../widgets/containers/ToolbarWidget'
import ItemGridWidget from '../../widgets/containers/ItemGridWidget'

class Home extends Component {
    state = {
        data: {},
        listType: 'grid',
        interval: 60*1000
    }
    componentWillMount = () => {
        this.cargarDatos()
        setInterval( () => {
            this.cargarDatos()
        },
        this.state.interval )
    }
    cargarDatos = () => {
        //const urlAPI = `https://api.coinmarketcap.com/v2/ticker/?limit=10`
        const urlAPI = `https://api.coinmarketcap.com/v2/ticker/?start=1&convert=BTC&limit=20&sort=rank&structure=array`
        fetch( urlAPI )
        .then( rsp => rsp.json() )
        .then( ({ data }) => this.setState({data}) )
        .catch( err => {
            ons.notification.alert({
                message: err.message
            })
        })

    }
    toggleView = listType  => {
        console.log( listType )
        this.setState({
            listType
        })
    }
    render(){
        const { data, listType } = this.state
        return (
            <Page
                renderToolbar = { () => (
                    <ToolbarWidget
                        title = 'CMC ticker'
                        renderRight = { () => (
                            listType == 'grid' ? (
                                <ToolbarButton onClick = { () => this.toggleView('list') } icon = "md-view-list" />
                            ) : (
                                <ToolbarButton onClick = { () => this.toggleView('grid') } icon = "md-view-module" />
                            )
                        )}
                    />
                )}
            >
                <ItemGridWidget 
                    listType = { listType }
                    data     = { data }
                />
            </Page>
        )
    }
}

export default Home