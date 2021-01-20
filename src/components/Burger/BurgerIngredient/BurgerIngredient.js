import React, {Component} from 'react';
import PropTypes from 'prop-types'; // Have to install 'npm install --save prop-type'. This serves for data validation

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

            switch (this.props.type) {
                case ('bread-bottom'):
                    ingredient = <div className={classes.BreadBottom}></div>;
                    break;
                case ('bread-top'):
                    ingredient = (
                        <div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                    );
                    break;
                case ('meat'):
                        ingredient = <div className={classes.Meat}></div>;
                    break;
                case ('cheese'):
                        ingredient = <div className={classes.Cheese}></div>;
                    break;
                case ('salad'):
                        ingredient = <div className={classes.Salad}></div>;
                    break;
                case ('bacon'):
                        ingredient = <div className={classes.Bacon}></div>;
                    break;
                default:
                    ingredient = null;
            }

                return ingredient;
    }
    
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired // this sets the data validation to a string and required
};

export default BurgerIngredient;