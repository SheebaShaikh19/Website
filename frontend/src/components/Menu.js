import React from 'react';
import './Menu.css'; // Ensure the path is correct
import veg from './veg.jpg'
import nonveg from './nonveg.jfif'
import cake from './cake.jpg'
import ice from './icecream.webp'
import start from './starter.jfif'
export default function Menu() {
  return (
    <div className="menu-section">
      <h1>Our Menu</h1>
      <div className="menu-card-container">
        <div className="menu-card menu-card--veg">
          <img src={veg} alt="Vegetarian Dishes" />
          <h2>Vegetarian</h2>
          <ul>
            <li>Vegetable Stir-Fry</li>
            <li>Stuffed Bell Peppers</li>
            <li>Grilled Vegetable Skewers</li>
          </ul>
        </div>

        <div className="menu-card menu-card--non-veg">
          <img src={nonveg} alt="Non-Vegetarian Dishes" />
          <h2>Non-Vegetarian</h2>
          <ul>
            <li>Grilled Chicken Breast</li>
            <li>Butter Chicken</li>
            <li>Spicy Shrimp Tacos</li>
          </ul>
        </div>

        <div className="menu-card menu-card--sweet-dish">
          <img src={cake} alt="Sweet Dishes" />
          <h2>Sweet Dishes</h2>
          <ul>
            <li>Chocolate Lava Cake</li>
            <li>Cheesecake</li>
            <li>Apple Pie</li>
          </ul>
        </div>

        <div className="menu-card menu-card--dessert">
          <img src={ice} alt="Desserts" />
          <h2>Desserts</h2>
          <ul>
            <li>Vanilla Ice Cream</li>
            <li>Fruit Sorbet</li>
            <li>Creme Brulee</li>
          </ul>
        </div>

        <div className="menu-card menu-card--starter">
          <img src={start} alt="Starters" />
          <h2>Starters</h2>
          <ul>
            <li>Spring Rolls</li>
            <li>Bruschetta</li>
            <li>Chicken Wings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
