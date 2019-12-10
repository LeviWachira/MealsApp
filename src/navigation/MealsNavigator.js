import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator  = createStackNavigator({
   Categories : CategoriesScreen,
   CategoryMeals : {
       screen : CategoryMealsScreen
   },
   MealDetail : MealDetailScreen
});

export default createAppContainer(MealsNavigator);