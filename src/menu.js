const menu = [
    {
        group: "Almuerzo",
        name: "Tacos",
        price: {
            single: 12,
            combo: 60
        },
        main: ["maiz", "harina"],
        toppings: ["asada", "pollo", "chorizo"],
        qty: [1, 3, 5],
        description: "Deliciosos tacos con un toque especial de la casa"
    },
    {
        group: "Drinks",
        name: "Licuado Combo",
        price: {
            single: 30,
            combo: 60
        },
        main: ["Naranja"],
        toppings: ["zanaoria", "pina", "fresa", "sandia", "melon", "papaya"],
        qty: [1],
        description: "Jugos naturales con pulpa"
    },
    {
        group: "Desayuno",
        name: "Coctel de Frutas",
        price: {
            single: 30,
            combo: null
        },
        main: ["pina", "fresa", "sandia", "melon", "papaya"],
        toppings: ["miel", "queso cottage"],
        qty: [1],
        description: "Coctel natural con miel y queso cottage"
    }

]

module.exports = menu;
