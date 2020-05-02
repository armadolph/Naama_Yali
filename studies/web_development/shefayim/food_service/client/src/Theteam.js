import React, { Component} from 'react';
import './theteam.css';
import doron_pic from './image/doron.jpg';

class Theteam extends Component{
  toggle (element) {
    console.log((element.target))
    element.target.classList.toggle('hover');
  }

  render(){
    return(
      <div id="team"> 
            <div class="container">
              <h5 class="section-title h1">הצוות שלנו</h5>
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4"></div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src={doron_pic}  alt="card_image"></img></p>
                                        <h4 class="card-title">דורון צופים</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">דורן צופים</h4>
                                        <p class="card-text">דורון מנהל את אגף המזון של שפיים בחמש השנים האחרונות</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                <div class="col-xs-12 col-sm-6 col-md-4"></div>
              </div>
            </div>
            <div class="container">
              <h5 class="section-title h1">צוות המרכול</h5>
              <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"  alt="card_image"></img></p>
                                        <h4 class="card-title"> ורד מנהלת</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">ורד מנהלת</h4>
                                        <p class="card-text">ורד מנהלת את המרכול בשנתיים האחרונות. מכניסה הרבה אהבה ואכפתיות במרכול</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"  alt="card_image"></img></p>
                                        <h4 class="card-title">אורה </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">אורה</h4>
                                        <p class="card-text">אורה מאד ומעולם במרכול</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"  alt="card_image"></img></p>
                                        <h4 class="card-title">יגאל מאפים </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">יגאל מאפים</h4>
                                        <p class="card-text">יגאל דואג למאפים חמים בכל יום, בכל שעה</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="container">
              <h5 class="section-title h1">צוות חדר האוכל</h5>
              <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"  alt="card_image"></img></p>
                                        <h4 class="card-title"> חזי </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">חזי </h4>
                                        <p class="card-text">חזי אוהב את יהלי יותר מהכול ותיד דואג להביא לו אוכל הכי טוב</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png" alt="card_image"></img></p>
                                        <h4 class="card-title">פיראס </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">פיראס</h4>
                                        <p class="card-text">בלה בלה בלה בלה בלה בלה</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" id="flip_toggle" onMouseEnter={this.toggle.bind(this)} >
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png" alt="card_image"></img></p>
                                        <h4 class="card-title">יצחק </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">יצחק</h4>
                                        <p class="card-text">יצחק בקופה נחמד לכולם</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>

    );
  }
}
  export default Theteam;

  
