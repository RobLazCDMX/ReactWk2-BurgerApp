import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
         <NavigationItem link="/" active>Burger Builder</NavigationItem>  {/*'active' is a boolean so it can just be passed as it is. It can also be passed like this: 'active='true'' */}
        <NavigationItem link="/">Checkout</NavigationItem>
        
    </ul>
);
 
export default navigationItems ;