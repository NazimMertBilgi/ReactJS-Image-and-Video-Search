import React, { Component } from 'react'
import Modal from "react-responsive-modal";

export default class VideoPlayer extends Component {
    render() {
        const { open, toggleModal, url } = this.props;
        return (
            <Modal
                open={open}
                onClose={toggleModal}
                styles={{
                    modal: {
                        maxWidth: "unset",
                        width: "100%",
                        height:"500px",
                        padding: "unset"
                    },
                    overlay: {
                        background: "rgba(0, 0, 0, 0.5)"
                    },
                    closeButton: {
                        background: "yellow"
                    }
                }}
                center
            >
                <video
                    controls
                    autoPlay
                    style={this.styles}
                    src={url} />
            </Modal>
        )
    }

    styles = {
        "object-fit": "initial",
        "width": "100%",
        "height": "500px"
    }
    
}


