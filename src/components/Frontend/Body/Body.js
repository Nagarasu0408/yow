import About from './About/About';
import './Body.scss';
import Footer from '../Footer/Footer';


function BodyOfContent() {
    return (
        <>
            <section>

                <div class="card">
                    <div class="card__img">
                        <img src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Big Ben" />

                    </div>
                </div>
                <div class="card">
                    <div class="card__img">
                        <img src="https://images.unsplash.com/photo-1581010864468-c972b8705439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Eiffel Tower" />

                    </div>
                </div>
                <div class="card">
                    <div class="card__img">
                        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80" alt="Colosseum" />

                    </div>
                </div>
                <div class="card">
                    <div class="card__img">
                        <img src="https://images.unsplash.com/photo-1581473483413-313a5afffb08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" alt="Pisa Tower" />

                    </div>
                </div>
                <div class="card">
                    <div class="card__img">
                        <img src="https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />

                    </div>
                </div>
                <div class="card">
                    <div class="card__img">
                        <img src="https://images.unsplash.com/photo-1527915676329-fd5ec8a12d4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Sydney Opera House" />
                    </div>
                </div>

            </section>

            <div className='Container'>
                <div className='Container1'>
                    <p className='Name'>YOW Restaurant</p>
                    <p className='P'>Restaurant,Hotel</p>
                    <p className='P'>Coimbatore,Othakkalmandapam</p>
                    <p className='Status'><span>Close Now </span>:10:00 AM - 9:00 PM</p>
                </div>
                <div className='Container2'>
                    <button>Direction</button>
                    <button>Call</button>
                    <button>Share</button>
                </div>
                <div className='Ratting'>
                    <p className='count'>4.5</p>
                    <span>Ratting</span>
                </div>
                <div className='BodyNav'>
                    <button>About</button>
                    <button>Food</button>
                    <button>Offers</button>
                    <button>Review</button>
                    <button>Gallery</button>
                </div>
            </div>
            <About />
            <Footer />
        </>
    );
}

export default BodyOfContent;