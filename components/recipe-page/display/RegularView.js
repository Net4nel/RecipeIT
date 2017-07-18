import React, {PropTypes} from "react";

const RegularView = ({recipe, image, onStateViewClick}) => {
    let textValues = {
        kitchenView: 'עבור לתצוגת מטבח',
        tags: 'תגיות',
        ingredients: 'מצרכים',
        steps: 'שלבי ההכנה'
    }
    return(
        <div className="regular-view">
            <div className="regular-view-header">
                <div className="regular-view-header-right">
                    <div className="regular-view-recipe-name">{recipe.name}</div>
                    <div className="regular-view-tags">
                        <div className="regular-view-sub-title">{textValues.tags}</div>
                        <div className="regular-view-tag-list">
                            {recipe.tags.map((tag, i) =>
                                <span key={i} className="regular-view-tag">{tag}</span>
                            )}
                        </div>
                    </div>
                    <div className="regular-view-ingredients">
                        <div className="regular-view-sub-title">{textValues.ingredients}</div>
                        <div className="regular-view-ingredient-list">
                            {recipe.ingredients.map((ingredient, i) =>
                                <div key={i} className="regular-view-ingredient">{ingredient}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="regular-view-header-left">
                    <img className="regular-view-img" src={image} />
                    <div className="regular-view-kitchen-view" onClick={onStateViewClick}>{textValues.kitchenView}</div>
                </div>
                <div className="clear"></div>
            </div>
            <div className="regular-view-steps">
                <div className="regular-view-sub-title">{textValues.steps}</div>
                {recipe.steps.map((step, i) =>
                    <div key={i} className="regular-view-step">{step}</div>
                )}
                {/*<div className="regular-view-step">{recipe.steps}</div>*/}
            </div>
        </div>
    );
};

RegularView.propTypes = {
    recipe: PropTypes.object,
    image: PropTypes.string,
    onStateViewClick: PropTypes.func
};

export default RegularView;
