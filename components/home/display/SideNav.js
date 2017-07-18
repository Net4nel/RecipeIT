import React from "react";
import {Col, Nav, NavItem, Row, Tab} from "react-bootstrap";
import Link from 'react-router';

const sideNav = ({ }) => {
    return(
        <div className="sidenav">


          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={4}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first">
                    המתכונים שלנו
                  </NavItem>
                  <NavItem eventKey="second">
                    חבילות מתכונים מותאמות
                  </NavItem>
                  <NavItem eventKey="third">
                    מתכונים לפי בחירה
                  </NavItem>
                  <NavItem eventKey="forth">
                    התחל עם RecipeIT!
                  </NavItem>
                  <NavItem eventKey="fifth">
                    טיפים
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">
                    גלה עשרות מתכונים ממבחר הגדול שקיים באתר
                    <br/>
                    <a href="recipes"><button className="btn btn-info">עבור לדף</button></a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    תן לנו להציע לך חבילות מותאמות אישית לערבים על פי בחירה
                    <br/>
                    <a href="packs"><button className="btn btn-info">עבור לדף</button></a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    ספר לנו מהו האירוע שלך, ואנו נרכיב לך תפריט מגוון שיתאים לכל סועד!
                    <br/>
                    <a href="404"><button className="btn btn-info">עבור לדף</button></a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    העתיד כבר כאן! הזן את המוצרים הזמינים אצלך בבית, ואנו נרכיב לך מהם מתכונים! כל פרט חשוב!
                    <br/>
                    <a href="sp"><button className="btn btn-info">עבור לדף</button></a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    רוצים שולחן מעוצב כמו בסרטים?
                    רוצים לשמוע על טיפים שיעזרו לכם לבנות ארוחה נפלאה?
                    יש לכם משהו להציע לנו?
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="404"><button className="btn btn-info">עבור לדף</button></a>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>


        </div>
    );
};

sideNav.propTypes = {

};

export default sideNav;
