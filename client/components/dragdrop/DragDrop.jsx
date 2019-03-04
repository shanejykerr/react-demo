import React from 'react';
import Article from './article/Article.jsx';

class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDragTarget: '',
            imageList: ["../../images/bird.jpg", "../../images/gears.jpg", "../../images/water.jpg"]
        };
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
    }

    dragStartHandler(image) {
        if (!this.state.imageList.includes(image)) return;
        this.setState({
            currentDragTarget: image
        });
    }

    dropHandler(image) {
        if (this.state.currentDragTarget === image) return;

        this.setState({
            imageList: this.state.imageList.map(item => {
                if (item !== image && item !== this.state.currentDragTarget) return item;
                return (item === image ? this.state.currentDragTarget : image);
            })
        })
    }

    render() {
        return (
            <main className="dragdrop">
                <section className="dragdrop-description">
                    This is an example drag and drop that utilizes standard HTML events, along with component specific states 
                    and events. In this section, you can drag one image and drop it on top of another to switch the images' positions.
                </section>
                <Article
                    dragStartHandler={this.dragStartHandler}
                    dropHandler={this.dropHandler}
                    image={this.state.imageList[0]}
                />
                <Article
                    dragStartHandler={this.dragStartHandler}
                    dropHandler={this.dropHandler}
                    image={this.state.imageList[1]}
                />
                <Article
                    dragStartHandler={this.dragStartHandler}
                    dropHandler={this.dropHandler}
                    image={this.state.imageList[2]}
                />
            </main>
        )
    }
}

export default DragDrop;