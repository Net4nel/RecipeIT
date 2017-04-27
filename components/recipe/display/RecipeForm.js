import React, {PropTypes} from "react";

const RecipeForm = (props) => {
    let { steps, ingredients, keyWords} = props;
    return(
        <form>
            <div className="row">
                <fieldset className="col-md-10">
                    <legend>הזנת מתכון חדש</legend>
                    <div className="input-wrapper row">
                        <div className="col-md-2">
                            <label>שם המתכון</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="input-wrapper row">
                        <div className="col-md-2">
                            <label>הזן מילות מפתח</label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                            <input type="button" value="+" />
                        </div>
                    </div>
                    <div className="key-words-wrapper row">
                        <ul className="key-words-list">
                            {keyWords.map((keyword,i)=>{
                                return <li key={i}>{keyword}</li>
                            })}
                        </ul>
                    </div>
                    <div className="input-wrapper row">
                        <label>הזן מצרכים</label>
                        <input type="text" className="form-control" />
                        <input type="button" value="+" />
                    </div>
                    <div className="ingredients-wrapper row">
                        <ul className="ingredients-list">
                            {ingredients.map((ingredient,i)=>{
                                return <li key={i}>{ingredient}</li>
                            })}
                        </ul>
                    </div>
                    <div className="input-wrapper row">
                        <label>הזן את שלבי המתכון</label>
                        <input type="text" className="form-control" />
                        <input type="button" value="+" />
                    </div>
                    <div className="steps-wrapper row">
                        <ol className="steps-list">
                            {steps.map((step,i)=>{
                                return <li key={i}>{step}</li>
                            })}
                        </ol>
                    </div>
                </fieldset>
            </div>
            <div className="row">
                <input className="btn btn-success" type="button" value="שלח מתכון" />
            </div>
        </form>
    );
};

RecipeForm.propTypes = {
    steps: PropTypes.Array,
    ingredients: PropTypes.Array,
    keyWords: PropTypes.Array,
    addKeyWord: PropTypes.Function,
    addIngredient: PropTypes.Function,
    addStep: PropTypes.Function

};

export default RecipeForm;
