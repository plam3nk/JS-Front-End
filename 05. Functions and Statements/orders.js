function orderPrice(order, quantity) {
    const prices = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2.00
    };

    const price = prices[order];
    const total = price * quantity;
    console.log(total.toFixed(2));
}

orderPrice("water", 5)
orderPrice("coffee", 2)