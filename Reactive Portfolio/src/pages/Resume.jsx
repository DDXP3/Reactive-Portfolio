import SoftwareEXP from '../assets/SoftwareEXP.png'
import LanguageEXP from '../assets/LanguageEXP.png'

export default function Resume() {
    return (
      <div className="contentCard">
        <h2 className="title" >Resume Page</h2>
        <h3 className="subTitle">Education Experience</h3>
        <p className="discript">
            <div>
                University of Minnesota, Coding and Web Development Bootcamp
            </div>
            <div>
                2023
            </div>
        </p>
        <p className="discript">
            <div>
                Dunwoody College of Technology, Architecture Drafting and Design
            </div>
            <div>
                818 Dunwoody Blvd, Minneapolis, MN 55403
            </div>
            <div>
                2021 - 2022
            </div>
        </p>
        <p className="discript">
            <div>
                Patrick Henry High School
            </div>
            <div>
                4320 N Newton Ave, Minneapolis, MN 55412
            </div>
            <div>
                9th - 12th grade, from 2016 - 2020
            </div>
        </p>
        {/* <p className="discript">
            <div>
                Noble Academy,
            </div>
            <div>
                9477 Decatur Dr N, Brooklyn Park, MN 55445,
            </div>
            <div>
                2nd grade - 8th grade from 2010 to 2016
            </div>
        </p>
        <p className="discript">
            <div>
                Hmong International Academy
            </div>
            <div>
                kindergarten - 1st grade from 2007 to 2009
            </div>
        </p>
        <p className="discript">
            <div>
                R.L. Stevenson Elementary School
            </div>
            <div>
                kindergarten from 2006-2007
            </div>
        </p> */}
        <h3 className="subTitle">Work Experience</h3>
        <p className="discript">
            <div>
                Caribou Coffee, Team Member
            </div>
            <div>
                272 57th Ave NE, Fridley, MN 55432
            </div>
            <div>
                2023 - Present
            </div>
        </p>
        <p className="discript">
            <div>
                Chipotle Mexican Grill, Crew
            </div>
            <div>
                2170 Northdale Blvd NW, Coon Rapids, MN 55433
            </div>
            <div>
                2022 - 2023
            </div>
        </p>
        <p className="discript">
            <div>
                Step-Up Internship, Damon Farber, Office Assistant
            </div>
            <div>
                5/6/2019 - 8/30/2019
            </div>
        </p>
        <p className="discript">
            <div>
                Step-Up Internship, Stantec, Office Assistant
            </div>
            <div>
                5/7/2018 - 8/31/2018
            </div>
        </p>
        <p className="discript">
            <div>
                Step-Up Internship, Teen Teamwork, Team Member
            </div>
            <div>
                5/8/2017 - 9/1/2017
            </div>
        </p>
        <p className="discript">
            <div>
                Step-Up Internship, Teen Teamwork, Team Member
            </div>
            <div>
                5/9/2016 - 8/26/2016
            </div>
        </p>
        <img className="image" src={SoftwareEXP} alt='softwareEXP'></img>
        <img className="image" src={LanguageEXP} alt='languageEXP'></img>
      </div>
    );
  }
  