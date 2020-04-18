import React, { Component } from 'react'
import * as sifirBirMusic from '../assets/audio/sifirbir.mp3';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container">
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-8">
                            <p><b>ReactJS - Image and Video Search</b></p>
                            <p>All pictures and videos come from <a href="https://pixabay.com" target="_blank">Pixabay</a>.</p>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="pull-right">
                                <audio controls>
                                    <source src={sifirBirMusic} type="audio/mp3" />
                                        Your browser does not support the audio element.
                               </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
