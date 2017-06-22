import React, {PropTypes} from "react";
import ImageLoader from './ImageLoader';

const RecipeForm = (props) => {
    let { steps, ingredients, keyWords} = props;
    return(
        <form>
            <div className="row">
                <fieldset className="col-md-10">
                    <legend>New Recipe</legend>
                    <div className="input-wrapper row">
                        <ImageLoader 
                            name={props.title} 
                            addImageData={props.addImageData} />
                        <div className="col-md-2">
                            <label>Recipe Name:</label>
                        </div>
                        <div className="col-md-10">
                            <input name="title" value={props.title} onChange={props.onChange} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="input-wrapper row">
                        <div className="col-md-2">
                            <label>Recipe Tags</label>
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
                        <label>Ingredientes:</label>
                        <input name="tempIngredient" value={props.tempIngredient} onChange={props.onChange}  type="text" className="form-control" />
                        <input name="tempIngredientAmount" value={props.tempIngredient} onChange={props.onChange}  type="text" className="form-control" />
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
                        <label>Recipe Steps:</label>
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

                    <div className="input-wrapper row">
                        <div className="col-md-3">
                            Spicy <input type="checkbox" onChange={props.propertiesHandler} value="Spicy"/>
                        </div>
                        <div className="col-md-3">
                            !Hot <input type="checkbox" onChange={props.propertiesHandler} value="Hot"/>
                        </div>
                        <div className="col-md-3">
                            Veggie <input type="checkbox" onChange={props.propertiesHandler} value="Veggie"/>
                        </div>
                        <div className="col-md-3">
                            Healthy <input type="checkbox" onChange={props.propertiesHandler} value="Healthy"/>
                        </div>
                    </div>
                </fieldset>

            </div>
            <div className="row">
                <input className="btn btn-success" type="button" onClick={props.submitHandler} value="Send Recipe" />
            </div>
        </form>
    );
};

RecipeForm.propTypes = {
    steps: PropTypes.array,
    ingredients: PropTypes.array,
    keyWords: PropTypes.array,
    addKeyWord: PropTypes.func,
    addIngredient: PropTypes.func,
    addStep: PropTypes.func,
    onChange: PropTypes.func,
    tempStep: PropTypes.string,
    tempKeyWord: PropTypes.string,
    tempIngredient: PropTypes.string,
    title: PropTypes.string,
    removeByName: PropTypes.func,
    addImageData: PropTypes.func.isRequired
    //highlightString: PropTypes.func
};

export default RecipeForm;
