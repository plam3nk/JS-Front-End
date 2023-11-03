function fruit(fruit_name, weight_g, price_per_kg) {

    let weight_kg = weight_g / 1000;
    let price = price_per_kg * weight_kg

    console.log(`I need $${price.toFixed(2)} to buy ${weight_kg.toFixed(2)} kilograms ${fruit_name}.`)

}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)