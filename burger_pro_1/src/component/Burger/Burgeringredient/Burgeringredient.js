import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Burgeringredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;
        
        switch ( this.props.type ) {
            case ( 'bread-bottom' ):{
                ingredient = <div className={classes.BreadBottom}>bread-bottom</div>;
            }
                break;
            case ( 'bread-top' ): {
                ingredient = (
                    <div className={classes.BreadTop}>
                        bread-top
                        <div className={classes.Seeds1}>seeds1</div>
                        <div className={classes.Seeds2}>seeds2</div>
                    </div>
                );
            }
               
                break;
            case ( 'meat' ):
                ingredient = <div className="Meat">meat</div>;
                break;
            case ( 'cheese' ):{
                ingredient = <div className={classes.Cheese}>cheese</div>;
            }
              
                break;
            case ( 'bacon' ):{
                ingredient = <div className={classes.Bacon}>bacon</div>;
            }
              
                break;
            case ( 'salad' ):{
                ingredient = <div className={classes.Salad}>salad</div>;
            }
               
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

// BurgerIngredient.propTypes = {
//     type: PropTypes.string.isRequired
// };

export default BurgerIngredient;