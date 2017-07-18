import React, {PropTypes} from "react";
import ImageLoader from './ImageLoader';
import Autocomplete from 'react-autocomplete';

const RecipeForm = (props) => {
    let { steps, ingredients, keyWords, tagsList, onAutocompleteChange} = props;
    let textValues = {
        newRecipe: 'יצירת מתכון חדש:',
        name: 'שם המתכון:',
        tags: 'תגיות:',
        ingredients: 'הזן מצרכים:',
        steps: 'שלבי ההכנה:',
        vegetarian:'צמחוני' ,
        diet: 'דיאטטי',
        gluten: 'ללא גלוטן',
        hot: 'חריף אש!',
        vegan: 'טבעוני',
        pikanti:'פינקט',
        sendRecipe: 'שלח מתכון'

    }
    return(
        <form>
            <div className="row">
                <fieldset className="col-md-10">
                    <legend>{textValues.newRecipe}</legend>
                    <div className="input-wrapper row">
                        <ImageLoader 
                            name={props.title} 
                            addImageData={props.addImageData} />
                        <div className="col-md-2">
                            <label>{textValues.name}</label>
                        </div>
                        <div className="col-md-10">
                            <input name="title" value={props.title} onChange={props.onChange} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="input-wrapper row">
                        <div className="col-md-2">
                            <label>{textValues.tags}</label>
                        </div>
                        <div className="col-md-2">
                            <Autocomplete
                                value={props.tempKeyWord}
                                items={tagsList}
                                getItemValue={(item) => item.label}
                                onChange={(e) => onAutocompleteChange(e.target.value, "tempKeyWord")}
                                onSelect={(val) => onAutocompleteChange(val, "tempKeyWord")}
                                renderItem={(item, isHighlighted) =>
                                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                        {item.label}
                                    </div>
                                }
                                shouldItemRender={(item,value) => item.label.includes(value)}
                            />
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
                        <label>{textValues.ingredients}</label>
                        <input name="tempIngredient" value={props.tempIngredient} onChange={props.onChange}  type="text" className="ol-md-8" />
                        <input type="button" value="+" onClick={props.addIngredient} className="ol-md-8"/>
                    </div>
                    <div className="ingredients-wrapper row">
                        <ul className="ingredients-list">
                            {ingredients.map((ingredient,i)=>{
                                return <li key={i}>{ingredient} <a onClick={()=>{props.removeByName('ingredients',i)}}>x</a></li>
                            })}
                        </ul>
                    </div>
                    <div className="input-wrapper row">
                        <label>{textValues.steps}</label>
                        <input name="tempStep" value={props.tempStep} onChange={props.onChange}  type="text" className="ol-md-10" />
                        <input type="button" value="+" onClick={props.addStep} className="ol-md-10" />
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
                             <input type="checkbox" className="checkbox-test" onChange={props.propertiesHandler} value="Vegetarian"/> {textValues.vegetarian}
                        </div>
                        <div className="col-md-3">
                             <input type="checkbox" onChange={props.propertiesHandler} value="Pikanti"/> {textValues.pikanti}
                        </div>
                    </div>

                    <div className="input-wrapper row">
                        <div className="col-md-3">
                             <input type="checkbox" onChange={props.propertiesHandler} value="Vegan"/> {textValues.vegan}
                        </div>
                        <div className="col-md-3">
                             <input type="checkbox" onChange={props.propertiesHandler} value="HOT"/> {textValues.hot}
                        </div>
                    </div>

                    <div className="input-wrapper row">
                        <div className="col-md-3">
                             <input type="checkbox" onChange={props.propertiesHandler} value="Gluten"/> {textValues.gluten}
                        </div>
                        <div className="col-md-3">
                             <input type="checkbox" onChange={props.propertiesHandler} value="Diet"/> {textValues.diet}
                        </div>
                    </div>
                </fieldset>

            </div>
            <div className="row">
                <input className="btn btn-success" type="button" onClick={props.submitHandler} value={textValues.sendRecipe} />
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
    addImageData: PropTypes.func.isRequired,
    tagsList: PropTypes.array,
    onAutocompleteChange: PropTypes.func
    //highlightString: PropTypes.func
};

export default RecipeForm;
