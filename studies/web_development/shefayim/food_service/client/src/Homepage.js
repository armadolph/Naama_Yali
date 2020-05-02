
import React, { Component} from 'react';
import daining_room_pic from './image/daining_room2.jpg';
import marcol_pic from './image/marcol.jpg';
import './Homepage.css';

class Homepage extends Component{
  render(){
    return(
      <div>
        <div className="homepage_image" >
          <h1>ברוכים הבאים</h1>
          <h1> למזון שפיים</h1>
        </div>

        <div className="new_messages">

        <h1 className="new_messages_header">הודעות חדשות</h1>
        <ul className="new_messages_list">ֿ
        <li> עדכוני קורונה - בהתאם להוראות משרד הבריאות, הכניסה למרכול תאפשר רק אחרי מדידית חום ועם מסיכה</li>
          <li> עדיין ניתן לבצע משלוחים מהמרכול. להזמנות שלחו את הטופס הבא</li>
          <li> ביום שישי ה - 27.3 נערוך ארוחת שיש בחדר אוכל. מוזמנים להרשם כאן.</li>
        </ul>
        </div>

         <div className="dining_room" >
            <div className="dining_room_text" > 
              <h1>חדר האוכל </h1>
                  <p>חדר האוכל, פועל מאז הקמת הקיבוץ ומספק לחברי הקיבוץ ולאנשים העובדים בקיבוץ ארוחת צהריים במהלך כל השבוע. </p>
                  <p> פעם בחודש בשישי בערב, תוכלו להנות מארוחה משותפת של כל חברי הקיבוץ</p>
                  <p> בנוסף, תמיד ניתן להזמין אוכל </p>
                  <br></br>
                  <br></br>

                <h3>שעות פתיחה  </h3>
                  <p> ימי א׳-ה׳: 10:00-18:00</p>
                  <p> יום שישי: 10:00-18:00</p>
                  <p> יום שבת: 10:00-18:00</p>

            </div >
            <div className="dining_room_pic" >
            <img src={daining_room_pic} alt="Dining Room"/>
            </div>

        </div>
        <div className="clear"></div>
        <div className="marcol">

            <div className="marcol_pic">
            <img src={marcol_pic} alt="Marcol"/>

            </div >
            <div className="marcol_text">

            <h1>מרכול שפיים </h1>
                  <p>חדר האוכל, פועל מאז הקמת הקיבוץ ומספק לחברי הקיבוץ ולאנשים העובדים בקיבוץ ארוחת צהריים במהלך כל השבוע. </p>
                  <p> פעם בחודש בשישי בערב, תוכלו להנות מארוחה משותפת של כל חברי הקיבוץ</p>
                  <p> בנוסף, תמיד ניתן להזמין אוכל </p>  

                  <br></br>
                  <br></br>

                <h3>שעות פתיחה  </h3>
                  <p> ימי א׳-ה׳: 10:00-18:00</p>
                  <p> יום שישי: 10:00-18:00</p>
                  <p> יום שבת: 10:00-18:00</p>
                  </div>

         </div>

         <div className="clear"></div>

         <div className="contacts">
           <h2  className="contacts_text">שירותי מזון - קיבוץ שפיים</h2>
         </div>


      </div>

    );
    }
  }

  export default Homepage;

