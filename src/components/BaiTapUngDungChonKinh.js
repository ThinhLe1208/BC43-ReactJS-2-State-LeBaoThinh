import React, { Component } from 'react';
import './BaiTapUngDungChonKinh.css';
import dataGlasses from './dataGlasses.json';

export default class BaiTapUngDungChonKinh extends Component {

    state = {
        curentGlasses: dataGlasses[0]
    };

    renderGlassesList = () => {
        return dataGlasses.map((glasses, index) => {
            return (
                < div className=" col-md-2 p-2" key={index}>
                    <div
                        className="glasses"
                        onClick={() => { this.setState({ curentGlasses: glasses }); }}
                    >
                        <img src={glasses.url} alt={`glasses-${glasses.id}`} />
                    </div>
                </ div>
            );
        });
    };

    render() {
        const keyFrame = `@keyframes aniChangeGlasses${Date.now()} {
                            from {
                                transform: translateX(-10%) translateY(-20%) rotate(30deg);
                                opacity: 0.7;
                            }
                            to {
                                transform: translateX(-50%) translateY(0) rotate(0deg);
                                opacity: 1;
                            }
                        }`;

        const styleGlasses = {
            animation: `aniChangeGlasses${Date.now()} linear 0.3s`
        };

        let { curentGlasses } = this.state;

        return (
            <div className='wrapper'>
                <style>
                    {keyFrame}
                </style>

                <div className='header bg-dark text-white fs-1 text-center py-3'>TRY GLASSES APP ONLINE</div>

                <div className='py-5 text-center'>
                    <div className="model">
                        <img className="model-img" src="./glassesImage/model.jpg" alt="model" />
                        <img className="model-glasses" src={curentGlasses.url} alt={`glasses-${curentGlasses.id}`} style={styleGlasses} />
                        <div className="model-content">
                            <h3>{curentGlasses.name}</h3>
                            <p>{curentGlasses.desc}</p>
                        </div>
                    </div>
                    <div className="model">
                        <img className='model-img' src="./glassesImage/model.jpg" alt="model" />
                    </div>
                </div>

                <div className="glasses-list py-3">
                    <div className='row '>
                        {this.renderGlassesList()}
                    </div >
                </div>

            </div >
        );
    }
}

