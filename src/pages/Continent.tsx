import React from 'react';

/**
 * Компонент главной страницы.
 */
class Continent extends React.Component {

    /**
     * Отрисовка витрины.
     */
    renderShowcase = () => {
        return (
            <section className="showcase">
                <div className="quote">
                    <q>You can never cross the ocean unless you have the courage to lose sight of the shore.</q>
                    <cite>- Christopher Columbus</cite>
                </div>
            </section>
        );
    };

    /**
     * Отрисовка секции информации.
     */
    renderInfo = () => {
        return (
            <section className="info">
                
            </section>
        );
    };

    /**
     * Отрисовка пустого блока.
     */
    renderEmpty = () => <section className="empty"></section>;

    render() {
        return (
            <main className="main continent background-image">
                <div className="container">
                    {this.renderShowcase()}
                    {this.renderInfo()}
                    {this.renderEmpty()}
                </div>
            </main>
        );
    }
};

export default Continent;
