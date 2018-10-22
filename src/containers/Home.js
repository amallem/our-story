import React, { Component } from "react";
import PhotoCard from "../components/PhotoCard";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styled from "styled-components";
const Header = styled.h1`
  text-align: center;
  font-size: 80px;
`;
class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header>Our Story</Header>
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
              #Rafting #SaveRamya #Coonor #RudraIWillKillYou
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
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="anirudh_grad.jpeg" />
            <p>
              #AnirudhGrad #GatorCouple #MastersDone
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="death_valley.jpeg" />
            <p>
              #MemorableTrip #ICareForYou #Cute
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="detroit.JPG" />
            <p>
              #MackinackIsland #Beard #PowerCouple #MadeForEachOther
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="extended_mallem_family.JPG" />
            <p>
              #ExtendedFamily #AllGators #GatorFamily
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="face_pack.JPG" />
            <p>
              #FacePack #ThingsIDoForLove #ExperimentsByRamya #ItFeltGood
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="golden_gate.JPG" />
            <p>
              #GoldenGate #SFTrip #Fog #ILoveOurPose
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="macys.JPG" />
            <p>
              #Macys #500DollarJacket #FacePalmMoment #SomeDayYouWillGetIt
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="new_years.JPG" />
            <p>
              #2018 #NewYear #Dancing #FullMasti #PartyLook
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="paint_nite.JPG" />
            <p>
              #1stPainting #PaintNite #MyLadyWasBetter #LovedIt
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="ramya_dog.JPG" />
            <p>
              #NewJersey #DogMoment #HistoryInTheMaking #Hope #CantBelieveIt
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="srujana_function.jpg" />
            <p>
              #NewJersey #FamilyFunction #MetMyFamily #CrazyMemories #NewLooks
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="ramya_lab_outing.JPG" />
            <p>
              #Gainesville #LabSneaking #PartnersInCrime 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="that_rock.jpg" />
            <p>
              #NeedISayMore #PDA #MakingOutInSun #Siggu #ThatRock 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="windmills1.jpg" />
            <p>
              #WindMills #WeLookCute #DrunkTimes #1stCoupleDate
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="windmills2.jpg" />
            <p>
              #WindMills #CaptionThis #WhatWasIThinking #ZooooooeeeeeeeeyyyyyyyMoment
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="engagement.jpg" />
            <p>
              #WeddingLook #Saree #Blushing #CantWaitToMaryThisWoman
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="engagement_rings.jpeg" />
            <p>
              #Engaged #RingShopping #YouAreMine #SoonToBeMrsMallem
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<PhotoCard imgSrc="summer-12.png" />}
          >
            <PhotoCard imgSrc="us_gator.jpg" />
            <p>
              #AndTheyLivedHappilyEverAfter
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </MuiThemeProvider>
    );
  }
}

export default Home;
