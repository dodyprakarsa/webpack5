import '../style/index.scss';
import pict from '../images/dicoding.jpeg';
// import React from 'react';

const App = () => {
    return (
    <>
        <section className='hero'></section>
            <main>
                <section className='images'>
                    <img src={pict} alt='g' width='100'/>
                </section>
                <h1>React from App.jsx</h1>
            </main>        
    </>
    );
}

export default App;