import React from 'react';

const Article = (props) => {
    const getImage = (e) => {
        if(e.type === 'dragstart') {
            props.dragStartHandler(props.image);
        } else if (e.type === 'drop') {
            props.dropHandler(props.image);
        }
    }

    return (
        <article className="dragdrop-article">
            <img className="dragdrop-article-image" src={props.image} onDragStart={getImage} onDragOver={e => e.preventDefault()} onDrop={getImage}></img>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </article>
    )
}

export default Article;