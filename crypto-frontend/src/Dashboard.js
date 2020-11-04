import React, {Component} from 'react';
import CryptoTable from './components/CryptoTable';
import CryptoChart from './components/CryptoChart';

class CryptoOverview extends Component {
    render() {
        return (
            <div>
                <CryptoTable />
                <CryptoChart />
            </div>
        )
    }
}

export default CryptoOverview