import React, {Component} from 'react';

class Home extends Component {
    render(){
        return(
            <fragment>
            <div ClassName="slider">
                <div ClassName="container sliderimage">
                    <div ClassName="row">
                        <img ClassName="img-fluid rounded slide" alt="Responsive image" src={require('../../gambar/edukids-home.jpg')}/>
                    </div>
                </div>
                <div ClassName="container notive">
                    <div ClassName="row">
                        <div ClassName="col-md-12">
                            <div ClassName="alert alert-danger danger" role="alert">
                                <p ClassName="text-white text-center"> A simple success alert-check it out!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container slider">
                <div className="row">
                        <div className="col-md-8">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                <img className="img-fluid d-block w-100" src={require('../../gambar/hinata1.jpg')} />
                                </div>

                                <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={require('../../gambar/hinata.jpg')} />
                                </div>
                            
                                <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={require('../../gambar/itachi.jpg')} />
                                </div>

                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previouse</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previouse</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <img className="img-fluid rounded slide" alt="Responsive image" src={require('../../gambar/mini-banner-1-raw.png')}/>

                    <img className="img-fluid rounded slide" alt="Responsive image" src={require('../../gambar/desktop.png')}/>
                    </div>
                </div>
            </div>
            </fragment>
        );

    }
}
export default Home;