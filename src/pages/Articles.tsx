import React from 'react';

const Articles: React.FC = () => {
    const articles = [
        {
            id: 1,
            title: '5 Expert Tips for Radiant Skin',
            date: 'January 4, 2026',
            category: 'Wellness',
            content: 'Maintaining a glowing complexion requires more than just high-end products; it starts with a consistent routine. First, never skip the double-cleanse at night to remove pollutants. Second, hydration is key—both inside and out. Third, always wear broad-spectrum SPF, even on cloudy days. Fourth, incorporate a gentle exfoliant twice a week. Finally, get enough sleep to allow your skin cells to regenerate naturally. Experience our signature facial treatments at Paradiso for an extra boost!'
        },
        {
            id: 2,
            title: 'The Art of Protective Styling',
            date: 'December 28, 2025',
            category: 'Hair Care',
            content: 'Protective styles like braids and twists aren\'t just fashionable—they\'re essential for maintaining hair health. By tucking away your ends, you reduce breakage and moisture loss. However, the key lies in the tension. At Paradiso Beauty, we emphasize "low-tension" braiding to protect your edges while giving you a stunning new look. Learn how to maintain your braids with our premium scalp oils available in the products gallery.'
        },
        {
            id: 3,
            title: 'Henna: A Timeless Tradition',
            date: 'December 15, 2025',
            category: 'Culture & Beauty',
            content: 'Henna has been used for centuries across cultures to celebrate milestones and enhance beauty. Our organic henna treatments at Paradiso are crafted from the finest leaves, ensuring a rich, long-lasting stain without harsh chemicals. Whether it\'s for a wedding or just a personal treat, our artists create intricate patterns that tell a story on your skin. Discover the cooling and restorative properties of natural henna during your next visit.'
        }
    ];

    return (
        <main>
            <section style={{ paddingTop: '150px' }}>
                <div className="section-title">
                    <h2>The Beauty Journal</h2>
                    <div className="divider"></div>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {articles.map(article => (
                        <article style={{ marginBottom: '4rem' }} key={article.id}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>{article.title}</h3>
                            <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                                {article.date} | {article.category}
                            </p>
                            <p>{article.content}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Articles;
