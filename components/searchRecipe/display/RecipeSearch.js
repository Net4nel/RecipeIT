import React, {PropTypes} from "react";

const RecipeSearch = (props) => {
    // let { steps, ingredients, keyWords} = props;
    let {ingredients} = props;
    return(
        <form>
            <div className="row">
                <fieldset className="col-md-10">
                    <legend>Search for Recipe</legend>

                    <div className="input-wrapper row">
                        <label>Ingredientes:</label>
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
                </fieldset>

            </div>
            <div className="row">
                <input className="btn btn-success" type="button" onClick={props.submitHandler} value="Search For Recipe" />
            </div>
        </form>
    );
};

RecipeSearch.propTypes = {
    ingredients: PropTypes.array,
    addIngredient: PropTypes.func,
    onChange: PropTypes.func,
    tempIngredient: PropTypes.string,
    title: PropTypes.string,
    removeByName: PropTypes.func,
    submitHandler: PropTypes.func.isRequired
};

export default RecipeSearch;
