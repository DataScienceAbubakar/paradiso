import React from 'react';

const Services: React.FC = () => {
    const hairArtistry = [
        { id: 1, name: 'Wash and Set', desc: 'A classic treatment for a fresh, bouncy look using premium shampoos and conditioners.', price: 'From $45', img: '/assets/service_hair.png' },
        { id: 2, name: 'Steaming & Stretching', desc: 'Deep conditioning and professional lengthening techniques for healthy, vibrant hair.', price: 'From $60', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400' },
        { id: 3, name: 'Retouching & Braiding', desc: 'Expert root perfection and intricate braiding styles crafted by our master stylists.', price: 'From $80', img: 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?auto=format&fit=crop&q=80&w=400' }
    ];

    const skinBody = [
        { id: 4, name: 'Facial Treatments', desc: 'Customized facials using organic ingredients to rejuvenate and brighten your complexion.', price: 'From $90', img: '/assets/service_facial.png' },
        { id: 5, name: 'Body Spa', desc: 'Total relaxation experience with therapeutic massages and body scrubs in a serene setting.', price: 'From $120', img: 'https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=80&w=400' },
        { id: 6, name: 'Henna Artistry', desc: 'Traditional and contemporary henna designs applied with 100% natural, rich organic dye.', price: 'From $35', img: '/assets/service_henna.png' }
    ];

    const handFeet = [
        { id: 7, name: 'Luxe Manicure', desc: 'Shape, buff, and polish with premium lacquers for elegant and strong hands.', price: 'From $50', img: '/assets/service_nails.png' },
        { id: 8, name: 'Luxe Pedicure', desc: 'Complete foot rejuvenation including exfoliation and soothing massage.', price: 'From $65', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400' }
    ];

    return (
        <main>
            <section style={{ paddingTop: '150px' }}>
                <div className="section-title">
                    <h2>Bespoke Services</h2>
                    <p>Indulge in our wide range of professional beauty treatments tailored for you.</p>
                    <div className="divider"></div>
                </div>

                <ServiceCategory title="Hair Artistry" items={hairArtistry} />
                <ServiceCategory title="Skin & Body Wellness" items={skinBody} />
                <ServiceCategory title="Hand & Feet Care" items={handFeet} />
            </section>
        </main>
    );
};

const ServiceCategory: React.FC<{ title: string, items: any[] }> = ({ title, items }) => (
    <div className="service-category">
        <h2>{title}</h2>
        <div className="service-grid">
            {items.map(item => (
                <div className="service-card" key={item.id}>
                    <div className="service-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                    <div className="service-content">
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                        <span className="service-price">{item.price}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Services;
