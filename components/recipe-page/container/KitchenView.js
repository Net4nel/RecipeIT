import React, {PropTypes, Component} from "react";

export default class KitchenView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0
        }

        this.onBackClick = this.onBackClick.bind(this);
        this.onForwardClick = this.onForwardClick.bind(this);
    }

    onBackClick() {
        let step = this.state.step - 1;
        if (step < 0)
            step = this.props.recipe.steps.length - 1;
        this.setState({step});
    }

    onForwardClick() {
        let step = this.state.step + 1;
        if (step == this.props.recipe.steps.length)
            step = 0;
        this.setState({step});
    }


    render() {
        let textValues = {
            tags: 'תגיות',
            ingredients: 'מצרכים'
        };
        let recipe = this.props.recipe;

        return (
            <div className="kitchen-view">
                <div className="kitchen-view-regular-view" onClick={this.props.onStateViewClick}>X</div>
                <div className="kitchen-view-header">
                    <div className="kitchen-view-header-right">
                        <div className="kitchen-view-recipe-name">{recipe.name}</div>
                        {/*<div className="kitchen-view-tags">*/}
                            {/*<div className="kitchen-view-sub-title">{textValues.tags}</div>*/}
                            {/*<div className="kitchen-view-tag-list">*/}
                                {/*{recipe.tags.map((tag, i) =>*/}
                                    {/*<span key={i} className="kitchen-view-tag">{tag}</span>*/}
                                {/*)}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <img className="kitchen-view-img" src={this.props.image} />
                            <div className="kitchen-view-ingredients">
                                <div className="kitchen-view-sub-title">{textValues.ingredients}</div>
                                <div className="kitchen-view-ingredient-list">
                                    {recipe.ingredients.map((ingredient, i) =>
                                        <div key={i} className="kitchen-view-ingredient">{ingredient}</div>
                                    )}
                                </div>
                            </div>
                    </div>
                    <div className="kitchen-view-header-left">

                    </div>
                    <div className="clear"></div>
                </div>
                <div className="kitchen-view-step-status">שלב {this.state.step+1} מתוך {this.props.recipe.steps.length}</div>
                <div className="kitchen-view-step">{recipe.steps[this.state.step]}</div>
                <div className="kitchen-view-move-step">
                    <div className="kitchen-view-move-step-forward" onClick={this.onForwardClick}>לשלב <br/> הבא </div>
                    <div className="kitchen-view-move-step-back" onClick={this.onBackClick}>לשלב <br/> הקודם </div>
                </div>
            </div>
        )

    }
}

KitchenView.propTypes = {
    recipe: PropTypes.object,
    image: PropTypes.string,
    onStateViewClick: PropTypes.func
};