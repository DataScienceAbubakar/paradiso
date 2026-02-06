import React from 'react';

const Products: React.FC = () => {
    const products = [
        {
            id: 1,
            name: 'Premium Handbags',
            price: '$120.00',
            img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?'
        },
        {
            id: 2,
            name: 'Designer Footwear',
            price: '$150.00',
            img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?'
        },
        {
            id: 3,
            name: 'Golden Accessories',
            price: '$45.00',
            img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce33a?'
        },
        {
            id: 4,
            name: 'Male Ready-to-Wear',
            price: '$85.00',
            img: 'https://images.unsplash.com/photo-1507679799987-c712812450c2?'
        },
        {
            id: 5,
            name: 'Female Boutique',
            price: '$95.00',
            img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?'
        }
    ];

    return (
        <main>
            <section className="product-hero">
                <h1>Exclusive Collection</h1>
            </section>

            <section>
                <div className="section-title">
                    <h2>Curation of Style</h2>
                    <div className="divider"></div>
                </div>

                <div className="grid">
                    {products.map(product => (
                        <div className="card" key={product.id}>
                            <div
                                className="card-img"
                                style={{ backgroundImage: `url('${product.img}auto=format&fit=crop&q=80&w=400')` }}
                            ></div>
                            <div className="card-content">
                                <h3>{product.name}</h3>
                                <p className="price">{product.price}</p>
                                <a
                                    href={`https://wa.me/2347033330327?text=Hi%20Paradiso%20Beauty,%20I'm%20interested%20in%20the%20${product.name}`}
                                    className="btn"
                                >Buy Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Products;
