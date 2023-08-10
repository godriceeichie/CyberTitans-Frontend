import React from 'react'
import { useState } from 'react';
import '../styles/Product.css'
import plantI from '../assets/plantI.jpeg'
import plantII from '../assets/plantII.webp'
import plantIII from '../assets/plantIII.jpeg'
import plantIV from '../assets/plantIV.jpeg'
import plantV from '../assets/plantV.webp'
import plantVI from '../assets/plantVI.jpeg'
import plantVII from '../assets/plantVII.jpeg'
import plantVIII from '../assets/plantVIII.jpeg'

import { AiOutlineSearch } from 'react-icons/ai'

const Products = () => {
   const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
  {
    id: 1,
    category: 'Flowering',
    name: 'Tulip',
    image: {plantI},
    price: 25.00,
  },
  {
    id: 2,
    category: 'Non-flowering',
    name: 'Ferns',
    image: {plantII},
    price: 34.00,
  },
  {
    id: 3,
    category: 'Indoor',
    name: 'Fiddle Leaf Fig',
    image: {plantIII},
    price: 22.00,
  },
  {
    id: 4,
    category: 'Outdoor',
    name: 'Fountain Grass',
    image: {plantIV},
    price: 20.00,
  },
  {
    id: 5,
    category: 'Succulents',
    name: 'Cactus',
    image: {plantV},
    price: 47.00,
  },
  {
    id: 6,
    category: 'Medicinal',
    name: 'Aloe Vera',
    image: {plantVI},
    price: 50.00,
  },
  {
    id: 7,
    category: 'Flowering',
    name: 'Daisy',
    image: {plantVII},
    price: 41.00,
  },
  {
    id: 8,
    category: 'Non-flowering',
    name: 'Chamomile',
    image: {plantVIII},
    price: 36.00,
  },
  // Add more products as needed
];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
  return (
    <div>
      <section className='productMain'>
        <h1>
          Our Product
        </h1>
        <div className='categories'>
         <div className='categoriesSelect'>
              <div onClick={() => handleCategoryClick('All')}>
              All
            </div>
            <div onClick={() => handleCategoryClick('Flowering')}>
              Flowering
            </div>
            <div onClick={() => handleCategoryClick('Non-flowering')}>
              Non-flowering
            </div>
            <div onClick={() => handleCategoryClick('Indoor')}>
              Indoor
            </div>
            <div onClick={() => handleCategoryClick('Outdoor')}>
              Outdoor
            </div>
            <div onClick={() => handleCategoryClick('Succulents')}>
              Succulents
            </div>
            <div onClick={() => handleCategoryClick('Medicinal')}>
              Medicinal
            </div>
         </div>
         <AiOutlineSearch />
         <input />
        </div>
        <div className='productList'>
          <div className='productListCard'>
            {filteredProducts.map(product => (
              <div className='listedProduct' key={product.id} id={product.category}>
                <img src={product.image} alt='' />
                <div className='description'>
                  <h1>{product.name}</h1>
                  <p>
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products