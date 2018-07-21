import React, { Component } from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import {
    Card
} from 'react-onsenui'

import '../ui/item-grid-widget.css'
/*
"1": {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "website_slug": "bitcoin",
    "rank": 1,
    "circulating_supply": 17162212,
    "total_supply": 17162212,
    "max_supply": 21000000,
    "quotes": {
    "USD": {
    "price": 7425.43,
    "volume_24h": 3963350000,
    "market_cap": 127436803851,
    "percent_change_1h": 0.23,
    "percent_change_24h": 0.71,
    "percent_change_7d": 18.37
    }
    },
    "last_updated": 1532199440
},*/
class ItemGridWidget extends Component {
    render(){
        const { data, listType } = this.props
        const arrData = Object.keys( data ) // --- por si llega como json en lugar de array
        return (
            <div className = {`ItemGridWidget-${listType}`}>
                { arrData.map( i => {
                        const el = data[i]
                        return (
                            <div
                                className = { `ItemGrid-Item__${listType}` }
                                key = { `${el.id}` }
                            >
                                <div className = "ItemGrid-Item-rank">{el.rank}</div>
                                <img 
                                    className = { `ItemGrid-Item__${listType}-Logo` }
                                    alt = { el.symbol }
                                    src = {`https://noesishosting.com/cdn/img/crypto/${el.symbol}.png`}
                                />
                                <div className = "ItemGrid-Item-name">{el.name}</div>
                                <div className = "ItemGrid-Item-symbol">{el.symbol}</div>
                                <div className = "ItemGrid-Item-priceUSD">{el.quotes.USD.price}</div>
                                <div className = "ItemGrid-Item-priceBTC">{el.quotes.BTC.price}</div>
                                <div className = "ItemGrid-Item-marketCap">{el.quotes.USD.market_cap}</div>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default ItemGridWidget