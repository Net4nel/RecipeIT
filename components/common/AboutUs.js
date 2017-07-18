import React, {Component, PropTypes} from 'react';


class AboutUs extends Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }


    render () {
        return (
            <div className="about-us">
                <h2>מי אנחנו?</h2>
                <p>אפליקציה זו הינה חלק מפרוייקט במכללת עזריאלי להנדסה בירושלים</p>
                <p>אפליקציה זו עדיין בשלב ההתחלתי שלה אך במטרתה העיקרית להפוך את רעיון הבישול למבטיח</p>
                <p>כמו כן, היינו שמחים מאוד לקבל פידפקים והערות לשיפור או לשימור</p>
                <p>נשמח לעמוד לשירותים בכל שלב ולכל מענה</p>
                <p>במייל: </p>
                <p>RecipeIT789@gmail.com</p>
            </div>
        );
    }
};

AboutUs.propTypes = {
    //
};

export default AboutUs;
