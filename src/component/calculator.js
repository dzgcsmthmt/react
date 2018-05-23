import React,{ Component } from 'react';
import TemperatureInput from './TemperatureInput';
import Verdict from './verdict';
import util from './util';

export default class Calculator extends Component{
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? util.tryConvert(temperature,util.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? util.tryConvert(temperature,util.toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    onTemperatureChange={this.handleCelsiusChange}
                    temperature = {celsius}
                    scale='c' />
                <TemperatureInput
                    onTemperatureChange={this.handleFahrenheitChange}
                    temperature = {fahrenheit}
                    scale='f' />
                <Verdict celsius={temperature} />
            </div>
        )
    }

}
