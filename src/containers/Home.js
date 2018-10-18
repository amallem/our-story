import React, { Component } from "react";
import PhotoCard from "../components/PhotoCard";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - The Beginning"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="cofee-day.jpg" />
            <p>
              #Habsiguda #FirstMeet #Shy #Amazing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - The Beginning"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="harry_potter.jpg" />
            <p>
              #HarryPotter #1stMovie #2ndMeeting #Legendary
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="fav.jpg" />
            <p>
              #fav-pic #adhya-event #gachibowli
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="warangal.jpeg" />
            <p>
              #Warangal #1stOuting_outside_hyd #famous_sabudana_khichdi
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="kindle.jpg" />
            <p>
              #Kindle #1stBigGift #BombayAirport #NewBeginnnings
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="skype3.jpg" />
            <p>
              #GRE #MegaFight #HappyBirthdayRamya
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="skype_match.jpg" />
            <p>
              #Skype #FireCouple
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="dopamine.jpeg" />
            <p>
              #1stValentine #ValentinesDayGift #DopamineRing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="ramya_lab_greeting.jpg" />
            <p>
              #RudraBirthdaySurprise #RamyaUFStudents #Unexpected #BlownAway
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="coonor.jpg" />
            <p>
              #CoonorTrip #ThatRoad #Spooky #FirstRoadTrip
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="rafting.jpeg" />
            <p>
              #Rafting #SaveRamya #Coonor
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="kerala_saree.jpg" />
            <p>
              #Temple #KeralaSaree #Traditional #Cute
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="ramya_grad.jpg" />
            <p>
              #RamyaGrad #UFGrad #IstMentionOnFacebook #DebtFree
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="ny_central_park.jpg" />
            <p>
              #NYC #ReUnited #USADiaryBegins #CentralPark
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="cook.jpg" />
            <p>
              #Gainesville #HomeCook #HakkaNoodles #CoupleWork
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="ramya_parents_me.jpg" />
            <p>
              #LoveStoryRevealed #Parents
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="alaska.jpg" />
            <p>
              #Alaska #bestTripEver #dancingSky
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="takkari.jpg" />
            <p>
              #Alaska #DressUp #Rain #Serious
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </MuiThemeProvider>
    );
  }
}

export default Home;
