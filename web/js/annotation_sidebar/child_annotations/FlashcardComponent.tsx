import * as React from 'react';
import Moment from 'react-moment';
import {DocAnnotation} from '../DocAnnotation';
import {CommentDropdown} from './CommentDropdown';
import {FlashcardDropdown} from './FlashcardDropdown';

/**
 * A generic wrapper that determines which sub-component to render.
 */
export class FlashcardComponent extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);

        this.onDelete = this.onDelete.bind(this);
        this.state = {};

    }

    public render() {
        const { flashcard } = this.props;

        const key = 'comment-' + flashcard.id;

        return (

            <div key={key}>

                <div className="flashcard card shadow-sm mb-3">

                    <div className="card-body p-1">

                        <div className="pb-1 pt-1">

                            <span dangerouslySetInnerHTML={{__html: flashcard.fields!.front}}>

                            </span>

                        </div>

                        <div className="pb-1 pt-1 border-top">

                            <span dangerouslySetInnerHTML={{__html: flashcard.fields!.back}}>

                            </span>

                        </div>

                    </div>

                </div>

                <div className="flexbar comment-bar border-top pt-1">

                    <div className="text-muted">
                        {/*TODO: make this into its own component... */}
                        <Moment withTitle={true} titleFormat="D MMM YYYY hh:MM A" fromNow>
                            {flashcard.created}
                        </Moment>
                    </div>

                    <div className="flexbar-right">
                        <FlashcardDropdown id={'comment-dropdown-' + flashcard.id}
                                           flashcard={flashcard}
                                           onDelete={(flashcard) => this.onDelete(flashcard)}/>
                    </div>

                </div>

            </div>
        );
    }

    private onDelete(flashcard: DocAnnotation) {
        delete flashcard.pageMeta.flashcards[flashcard.id];
    }


}
interface IProps {
    flashcard: DocAnnotation;
}

interface IState {

}


