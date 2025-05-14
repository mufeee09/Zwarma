import { useState } from 'react';
import '../styles/Menu.css';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Shawarma');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Veg Shawarma', price: 120, description: 'Fresh vegetables wrapped in pita bread with our special sauce', category: 'Shawarma' },
    { id: 2, name: 'Spicy Shawarma', price: 160, description: 'Spiced to perfection with our signature blend', category: 'Shawarma' },
    { id: 3, name: 'Chicken Shawarma', price: 180, description: 'Tender marinated chicken with fresh vegetables', category: 'Shawarma' },
    { id: 12, name: 'Chicken Shawarma', price: 180, description: 'Tender marinated chicken with fresh vegetables', category: 'Shawarma' },
    { id: 13, name: 'Chicken Shawarma', price: 180, description: 'Tender marinated chicken with fresh vegetables', category: 'Shawarma' },
    { id: 4, name: 'Falafel Wrap', price: 150, description: 'Crispy falafel with tahini sauce and pickles', category: 'Shawarma' },
    { id: 5, name: 'Chicken Faham', price: 280, description: 'Grilled to perfection with Arabic spices', category: 'Faham' },
    { id: 6, name: 'Mutton Faham', price: 350, description: 'Tender mutton pieces marinated in special herbs', category: 'Faham' },
    { id: 7, name: 'Chocolate Milkshake', price: 130, description: 'Rich chocolate blended with premium ice cream', category: 'Milkshake' },
    { id: 8, name: 'Vanilla Milkshake', price: 120, description: 'Smooth vanilla flavor with a creamy texture', category: 'Milkshake' },
    { id: 9, name: 'Strawberry Milkshake', price: 130, description: 'Fresh strawberry flavor that delights', category: 'Milkshake' },
    { id: 10, name: 'Sizzling Brownie', price: 180, description: 'Hot brownie with ice cream and chocolate sauce', category: 'Sizzlers' },
    { id: 11, name: 'Vegetable Sizzler', price: 240, description: 'Assorted vegetables on a hot plate', category: 'Sizzlers' },
  ];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);
  const categories = ['Shawarma', 'Faham', 'Milkshake', 'Sizzlers'];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore our delicious menu featuring authentic Middle Eastern flavors, more—crafted with passion to satisfy every craving!</p>
      </div>

      <div className="menu-container">
        <div className="category-selector">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mobile-category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <div className="desktop-category-list">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-items">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="item-price">₹{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;