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
                            <input name="title" value={props.title} onChange={props.onChange} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="input-wrapper row">
                        <div className="col-md-2">
                            <label>הזן מילות מפתח</label>
                        </div>
                        <div className="col-md-9">
                            <input name="tempKeyWord" value={props.tempKeyWord} onChange={props.onChange}  type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                            <input type="button" value="+" onClick={props.addKeyWord}/>
                        </div>
                    </div>
                    <div className="key-words-wrapper row">
                        <ul className="key-words-list">
                            {keyWords.map((keyword,i)=>{
                                return <li key={i}>{keyword} <a onClick={()=>{props.removeByName('keywords',i)}}>x</a></li>
                            })}
                        </ul>
                    </div>
                    <div className="input-wrapper row">
                        <label>הזן מצרכים</label>
                        <input name="tempIngredient" value={props.tempIngredient} onChange={props.onChange}  type="text" className="form-control" />
                        <input type="button" value="+" onClick={props.addIngredient}/>
                    </div>
                    <div className="ingredients-wrapper row">
                        <ul className="ingredients-list">
                            {ingredients.map((ingredient,i)=>{
                                return <li key={i}>{ingredient} <a onClick={()=>{props.removeByName('ingredients',i)}}>x</a></li>
                            })}
                        </ul>
                    </div>
                    <div className="input-wrapper row">
                        <label>הזן את שלבי המתכון</label>
                        <input name="tempStep" value={props.tempStep} onChange={props.onChange}  type="text" className="form-control" />
                        <input type="button" value="+" onClick={props.addStep} />
                    </div>
                    <div className="steps-wrapper row">
                        <ol className="steps-list">
                            {steps.map((step,i)=>{
                                return <li key={i}>{step} <a onClick={()=>{props.removeByName('steps',i)}}>x</a></li>
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
    addStep: PropTypes.Function,
    onChange: PropTypes.Function,
    tempStep: PropTypes.String,
    tempKeyWord: PropTypes.String,
    tempIngredient: PropTypes.String,
    title: PropTypes.String,
    removeByName: PropTypes.Function
};

export default RecipeForm;
