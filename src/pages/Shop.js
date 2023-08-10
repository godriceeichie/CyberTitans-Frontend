import React from 'react'
import '../styles/Product.css'
import plantI from '../images/8_6c01a03e-e99d-43b2-aa28-e6446b10ae6f_600x800_crop_center.webp'

const Products = () => {
  return (
    <div>
      <section className='productMain'>
        <h1>
          Our Product
        </h1>
        <div className='categories'>
         <div className='categoriesSelect'>
              <div>
              All
            </div>
            <div>
              Flowering
            </div>
            <div>
              Non-flowering
            </div>
            <div>
              Indoor
            </div>
            <div>
              Outdoor
            </div>
            <div>
              Succulents
            </div>
            <div>
              Medicinal
            </div>
         </div>
         <input />
        </div>
        <div className='productList'>
          <div className='productListCard'>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
          </div>
          <div className='productListCard'>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
            <div className='listedProduct'>
              <img src={plantI}/>
              <div className='description'>
                <h1>Alovera</h1>
                <p>
                  $20.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products