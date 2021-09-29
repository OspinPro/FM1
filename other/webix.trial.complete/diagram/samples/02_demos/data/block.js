const data = [
	{ id: "store", value: "Web Store", x: 50, y: 50, type: "process" },
	{
		id: "inventory",
		value: "Product Inventory",
		x: 270,
		y: 50,
		type: "process",
	},
	{ id: "product", value: "Product", x: 490, y: 50, type: "process" },
	{ id: "cart", value: "Shopping Cart", x: 490, y: 170, type: "process" },
	{ id: "order", value: "Order", x: 710, y: 170, type: "process" },
	{
		id: "history",
		value: "User Order History",
		x: 600,
		y: 290,
		type: "process",
	},
	{
		id: "confirmation",
		value: "Order Confirmation",
		x: 820,
		y: 290,
		type: "process",
	},
];

const links = [
	{ source: "store", target: "inventory", mode: "direct" },
	{ source: "inventory", target: "product", mode: "direct" },
	{ source: "product", target: "cart", mode: "direct" },
	{ source: "cart", target: "order" },
	{ source: "order", target: "history" },
	{ source: "order", target: "confirmation" },
];
