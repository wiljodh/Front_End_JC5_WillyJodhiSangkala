import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shop extends Component {

render() {

return (

<section className="section-content bg padding-y-sm">
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3-24"> <strong>Your are here:</strong> </div> {/* col.// */}
          <nav className="col-md-18-24"> 
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">HOME</a></li>
              <li className="breadcrumb-item"><a href="#">E-Juices / 30 ML / 50 - 60 ML / 120 - 130 ML</a></li>
              <li className="breadcrumb-item"><a href="#">ITEMS</a></li>
            </ol>  
          </nav> {/* col.// */}
          <div className="col-md-3-24 text-right"> 
            <a href="#" data-toggle="tooltip" title="List view"> <i className="fa fa-bars" /></a>
            <a href="#" data-toggle="tooltip" title="Grid view"> <i className="fa fa-th" /></a>
          </div> {/* col.// */}
        </div> {/* row.// */}
        <hr />
        <div className="row">
          <div className="col-md-3-24"> <strong>Filter by:</strong> </div> {/* col.// */}
          <div className="col-md-21-24"> 
            <ul className="list-inline">
              <li className="list-inline-item dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
                <div className="dropdown-menu p-3" style={{maxWidth: 400}}>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> Good supplier
                    </a>
                  </label>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> Best supplier
                    </a>
                  </label>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> New supplier
                    </a>
                  </label>
                </div> {/* dropdown-menu.// */}
              </li>
              <li className="list-inline-item dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">  Country </a>
                <div className="dropdown-menu p-3" style={{maxWidth: 400}}>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> China
                    </a>
                  </label>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> Japan
                    </a>
                  </label>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> Uzbekistan
                    </a>
                  </label>
                  <label className="form-check">
                    <a href="#">
                      <input className="form-check-input" type="checkbox" /> Russia
                    </a>
                  </label>
                </div> {/* dropdown-menu.// */}
              </li>
              <li className="list-inline-item"><a href="#">Product type</a></li>
              <li className="list-inline-item"><a href="#">Brand name</a></li>
              <li className="list-inline-item"><a href="#">Color</a></li>
              <li className="list-inline-item"><a href="#">Size</a></li>
              <li className="list-inline-item">
                <div className="form-inline">
                  <label className="mr-2">Price</label>
                  <input className="form-control form-control-sm" placeholder="Min" type="number" />
                  <span className="px-2"> - </span>
                  <input className="form-control form-control-sm" placeholder="Max" type="number" />
                  <button type="submit" className="btn btn-sm ml-2">Ok</button>
                </div>
              </li>
            </ul>
          </div> {/* col.// */}
        </div> {/* row.// */}
      </div> {/* card-body .// */}
    </div> {/* card.// */}
    <div className="padding-y-sm">
      <span>3897 results for "Item"</span>	
    </div>
    <div className="row-sm">
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/1.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">Good item name</a>
            <div className="price-wrap">
              <span className="price-new">$1280</span>
              <del className="price-old">$1980</del>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/2.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/3.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">Good item name</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/4.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">Good item name</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/5.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">Good item name</a>
            <div className="price-wrap">
              <span className="price-new">$1280</span>
              <del className="price-old">$1980</del>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/6.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/7.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/1.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/2.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$1280</span>
              <del className="price-old">$1980</del>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/3.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/4.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> {/* price-wrap.// */}
          </figcaption>
        </figure> {/* card // */}
      </div> {/* col // */}
      <div className="col-md-3 col-sm-6">
        <figure className="card card-product">
          <div className="img-wrap"> <img src="images/items/6.jpg" /></div>
          <figcaption className="info-wrap">
            <a href="#" className="title">The name of product</a>
            <div className="price-wrap">
              <span className="price-new">$280</span>
            </div> 
          </figcaption>
        </figure>
      </div> 
    </div> 
  </div>
</section>

        );
    }
} 

export default Shop;