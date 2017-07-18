import React, {PropTypes} from "react";

import RecipeListItem from './RecipeListItem';


const RecipeList = ({recipes}) => {
    return(
        <div className="recipe_list">
            {recipes.map(recipe =>
                <RecipeListItem key={recipe._id} recipe={recipe} />
            )}
            <div className="clear"></div>
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.array
};

RecipeList.defaultProps = {
    recipes: []
};

export default RecipeList;
