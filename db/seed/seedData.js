import { createUser } from "../users.js";
import { createOrder } from "../orders.js";
import {
  createItem,
  attachItemToOrder,
  attachItemToCategory,
} from "../items.js";
import { createCategory } from "../categories.js";
async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const usersToCreate = [
      {
        username: "albert",
        password: "soxAreGreat",
        email: "albert@myurl.com",
        first_name: "albert",
        last_name: "soxs",
        address_1: "353 My Street",
        address_2: "apt. 2",
        city: "Hit",
        state: "IA",
        zip_code: 50613,
        country: "USA",
        shipping_address_1: "250 Yourstreet",
        shipping_address_2: null,
        shipping_city: "Mantua",
        shipping_state: "UT",
        shipping_zip_code: 84324,
        shipping_counry: "USA",
      },
      {
        username: "billybob",
        password: "funkyfrogs$5",
        email: "billy@myurl.com",
        first_name: "billy",
        last_name: "bob",
        address_1: "233 My Street",
        address_2: "apt. 27",
        city: "Ames",
        state: "IA",
        zip_code: 50613,
        country: "USA",
        shipping_address_1: "250 Thatstreet",
        shipping_address_2: null,
        shipping_city: "Omaha",
        shipping_state: "NE",
        shipping_zip_code: 84324,
        shipping_counry: "USA"
      }
    ];

    await Promise.all(usersToCreate.map(createUser));

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialOrders() {
  console.log("Starting to create Orders...");
  try {
    const ordersToCreate = [
      {
        user_id: 1,
        billing_address_1: "353 My Street",
        billing_address_2: "apt. 2",
        billing_city: "Hit",
        billing_state: "IA",
        billing_zip_code: 50613,
        email: "albert@myurl.com",
        shipping_address_1: "353 My Street",
        shipping_address_2: "apt. 2",
        shipping_city: "Hit",
        shipping_state: "IA",
        shipping_zip_code: 50613,
        shipping_country: "USA",
        order_total: 2525.25,
      },
      {
        user_id: 1,
        billing_address_1: "353 My Street",
        billing_address_2: "apt. 2",
        billing_city: "Hit",
        billing_state: "IA",
        billing_zip_code: 50613,
        email: "albert@myurl.com",
        shipping_address_1: "353 My Street",
        shipping_address_2: "apt. 2",
        shipping_city: "Hit",
        shipping_state: "IA",
        shipping_zip_code: 50613,
        shipping_country: "USA",
        order_total: 100.25,
      },
      {
        user_id: 2,
        billing_address_1: "233 My Street",
        billing_address_2: "apt. 27",
        billing_city: "Ames",
        billing_state: "IA",
        billing_zip_code: 50613,
        email: "billy@myurl.com",
        shipping_address_1: "250 Thatstreet",
        shipping_address_2: null,
        shipping_city: "Omaha",
        shipping_state: "NE",
        shipping_zip_code: 84324,
        shipping_country: "USA",
        order_total: 2500.36
      }
    ]
    await Promise.all(ordersToCreate.map(createOrder));

    console.log("Finished creating initial orders!");
  } catch (error) {
    console.error("Error creating initial orders!");
    throw error;
  }
}

async function createInitialItems() {
  console.log("Starting to create items...");
  try {
    const ordersToCreate = [
      {
        title: "Power paint & HVLP sprayers",
        price: 101.2,
        inventory: 5,
        image_name: "sprayer.jpg",
      },
      {
        title: "AMOLEN Wood Walnut PLA",
        price: 25.75,
        inventory: 10,
        image_name: "wood_filament.jpg",
      },
      {
        title: "Four outlet extension cord",
        price: 21.55,
        inventory: 51,
        image_name: "extension_plugs.jpg",
      },
      {
        title: "Green Shield, Shade Clot Plastic Clips",
        price: 12.75,
        inventory: 300,
        image_name: "extension_plugs.jpg",
      },
    ];
    await Promise.all(ordersToCreate.map(createItem));

    console.log("Finished creating initial items!");
  } catch (error) {
    console.error("Error creating initial items!");
    throw error;
  }
}

async function createInitialOrderItem() {
  console.log("Starting to create items...");
  try {
    const ordersToCreate = [
      {
        itemId: 1,
        orderId: 1,
        orderPrice: 101.2,
        qty: 2,
      },
      {
        itemId: 2,
        orderId: 1,
        orderPrice: 25.75,
        qty: 3,
      },
      {
        itemId: 3,
        orderId: 3,
        orderPrice: 21.55,
        qty: 1,
      },
      {
        itemId: 4,
        orderId: 2,
        orderPrice: 12.75,
        qty: 10,
      },
      {
        itemId: 2,
        orderId: 2,
        orderPrice: 152.75,
        qty: 1,
      },
      {
        itemId: 1,
        orderId: 3,
        orderPrice: 10.75,
        qty: 5,
      },
    ];
    await Promise.all(ordersToCreate.map(attachItemToOrder));

    console.log("Finished creating initial order_item!");
  } catch (error) {
    console.error("Error creating initial order_item");
    throw error;
  }
}


async function createInitialCategories() {
  console.log("Starting to create categories!");
  try {
    const ordersToCreate = [
      {
        name: "3D Printing",
      },
      {
        name: "Paint Guns",
      },
      {
        name: "Home Electronics"
      },
      {
        name: "Out Door Equipment"
      },
    ];
    await Promise.all(ordersToCreate.map(createCategory));

    console.log("Finished creating initial Categories!");
  } catch (error) {
    console.error("Error creating initial Categories");
    throw error;
  }
}

async function createItemCategoryLinks() {
  console.log("Starting to create categories!");
  try {
    const ordersToCreate = [
      {
        itemId: 1,
        categoryId: 2, 
      },
      {
        itemId: 2,
        categoryId: 3, 
      },
      {
        itemId: 3,
        categoryId: 1, 
      },
      {
        itemId: 4,
        categoryId: 4 
      },
    ];
    await Promise.all(ordersToCreate.map(attachItemToCategory));

    console.log("Finished creating item_category lines!");
  } catch (error) {
    console.error("Error creating item_category link");
    throw error;
  }
}
async function populateDB() {
  try {
    await createInitialUsers();
    await createInitialOrders();
    await createInitialItems();
    await createInitialOrderItem();
    await createInitialCategories();
    await createItemCategoryLinks();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

export { populateDB };
