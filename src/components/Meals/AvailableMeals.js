import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailabelMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Iced Americano",
    description: "It's coffee with savory coffee beans",
    price: 2.99,
  },
  {
    id: "m2",
    name: "Dolce Latte",
    description: "Latte with sweet condensed milk!",
    price: 3.5,
  },
  {
    id: "m3",
    name: "Banana Latte",
    description: "Latte with sweet banana syrup",
    price: 3.99,
  },
  {
    id: "m4",
    name: "Strawberry Smoothie",
    description: "a smoothie made with fresh strawberries",
    price: 5.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
