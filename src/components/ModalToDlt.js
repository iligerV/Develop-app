import React from 'react'
import PropTypes from 'prop-types'

class ModalToDlt extends React.Component {

    deleteNews = () => {
        console.log('Новость удалена');
        this.props.handleBtnMakeVisibleModalToDelete();
    };
    declineDeleteNews = () => {
        this.props.handleBtnMakeVisibleModalToDelete();
    };
    render() {
        const { articleStory } = this.props;

        return (
            <React.Fragment>
            <div className='modal_to_dlt'>
                    <h5>Вы уверены, что хотите удалить новость: <br/> {articleStory} ?</h5>
                    <div>
                        <button
                            onClick={this.deleteNews}
                        >ДА</button>
                        <button
                            onClick={this.declineDeleteNews}
                        >НЕТ</button>
                    </div>
                 </div>
                 <div
                     className='bg'
                     onClick={this.declineDeleteNews}
                 > </div>
            </React.Fragment>
        )
    }
}

export default ModalToDlt;