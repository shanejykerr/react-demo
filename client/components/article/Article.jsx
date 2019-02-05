import React from 'react';

class Article extends React.Component{
    constructor(props) {
        super(props);

        this.getImage = this.getImage.bind(this);
    }

    getImage(e) {
        if(e.type === 'dragstart') {
            this.props.dragStartHandler(this.props.image);
        } else if (e.type === 'drop') {
            this.props.dropHandler(this.props.image);
        }
    }

    render() {
        return (
            <article className="grid-article">
                <img className="grid-article-image" src={this.props.image} onDragStart={this.getImage} onDragOver={e => e.preventDefault()} onDrop={this.getImage}></img>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </article>
        )
    }
}

export default Article;