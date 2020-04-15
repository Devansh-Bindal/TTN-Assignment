import React,{Component,Fragment} from 'react';
import './Layout.css';
import virus from '../../images/virus.png';
import BG from '../../images/BG.svg';
import Up from '../../images/Up.svg';
import Graph from '../../images/Graph.svg';
import Graph1 from '../../images/Graph(1).svg';
import Graph2 from '../../images/Graph (2).svg';
import Graph3 from '../../images/Graph (3).svg';
import Down from '../../images/Down.svg';
// import US from '../../images/US.jpg';
// import Italy from '../../images/Italy.png';
// import China from '../../images/China.png';
// import Germany from '../../images/Germany.png';
// import Russia from '../../images/Russia.png';
import Fever from '../../images/fever.svg';
import Twitter from '../../images/Twitter.svg';
import WHO from '../../images/WHO.png';
import Modi from '../../images/MODI.png';
import Donald from '../../images/DONALD.png'
import like from '../../images/like.svg';
import share from '../../images/share.svg';
import WorldCountries from '../Layout/WorldCountries/WorldCountries';
import NavigationItems from '../Layout/NavigationItems/NavigationItems';
class Layout extends Component {  
    // async componentDidMount()
    // {
    //     const response =await fetch("https://api.covid19api.com/summary");
    //     console.log("hi"+Object.keys(response).join(''));
    // }
    state={
        totalCases:'',
        recovered:'',
        active:'',
        deaths:'',
        flag:'',
        countries:''
    }
    async componentDidMount() {
        const response = await fetch("https://corona.lmao.ninja/all");  
        const data = await response.json();
        const totalCases =JSON.stringify(data.cases);
        const recovered=JSON.stringify(data.recovered);
        const active=JSON.stringify(data.active);
        const deaths=JSON.stringify(data.deaths);
        this.setState({totalCases:totalCases,recovered:recovered,active:active,deaths:deaths});

        const Country = await fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search");        
        const dataCountry = await Country.json();
        const countries=JSON.stringify(dataCountry.data.rows[1].country);
        const flag=JSON.stringify(dataCountry.data.rows[1].flag);
        this.setState({countries:countries,flag:flag});
        // console.log(JSON.stringify(dataCountry.data.rows[0]));
        // setTimeout(function abc() {
        //     location.reload();
        //         }, 60000);
        
            }
    
    render() {
        return (
            <Fragment>
            
               <div className="Header">
                    <div className='Layout'> <img src={virus} alt="" /></div>
                    <div className="Heading"><h3>COVID'19</h3></div>
                    <nav><NavigationItems /></nav>
                </div>
                <div className="container">
                    <div className="Main-Section">
                        <div className="main">
                            <div className="img1">
                                <img src={BG} width="100%" height="100%"  alt=""/>
                                <div className="totalCase">Total Cases
                                <img src={Up} width="8%" alt=""/>
                                </div>
                                <div className="count">{this.state.totalCases}</div>
                                <img src={Graph} alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>

                            <div className="img2"><img src={BG} alt=""  width="100%" height="100%" />
                                <div className="totalCase">Recovered<img src={Down} alt="" width="8%"></img></div>
                                <div className="count">{this.state.recovered}</div>
                                <img src={Graph3} alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>
                            <div className="img3"><img src={BG} alt="" width="100%" height="100%" />
                                <div className="totalCase">Active Cases<img src={Up} alt="" width="8%"></img></div>
                                <div className="count">{this.state.active}</div>
                                <img src={Graph1} alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>

                            <div className="img4"><img src={BG} alt="" width="100%" height="100%" />
                                <div className="totalCase">Total Death<img src={Up} alt="" width="8%"></img></div>
                                <div className="count">{this.state.deaths}</div>
                                <img src={Graph2} alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>
                        </div>

                        <div className="section">
                            <div className="LeftSection">

                                <div class="search-container">
                                    <input class="input-field" type="text" placeholder="Search Location" />
                                </div>
                                < WorldCountries 
                                countries={this.state.countries}
                                />
                            <div className="Right-Section">
                                <div className="Map-Section">
                                    Map
                                 </div>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article-left">
                                Spread Trends
                        </div>
                            <div className="article-right">
                                <div className="article-right-img">
                                    <div className="article-right-box">
                                        <img src={Fever} alt="" style={{ height: "80%", width: "" }} />
                                    </div>
                                </div>
                                <div className="article-right-feed">
                                    <div className="top">
                                        <button className="btnNews">News & Updates</button>
                                    </div>
                                    <div className="between">
                                        <p>5 Symptoms of Corona Virus that you should know </p>
                                    </div>
                                    <div className="down">
                                        <p className="down-para">Read More</p>

                                    </div>
                                    <div className="dots">
                                        <div className="white-dot"></div>
                                        <div className="red-dot"></div>
                                        <div className="white-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="aside">
                        <div className="Recovery-ratio">Recovery Ratio Chart</div>
                        <div className="twitter">
                            <div className="twitter-top">
                                <div className="twitter-heading">Latest Tweets</div>
                                <div className="twitter-img"> <img src={Twitter} alt="" /></div>
                            </div>
                            <div class="twitter-info">
                                <div className="twitter-info-img">
                                    <img src={WHO} alt="" className="twitter-info-img-left" />
                                </div>
                                <div className="twitter-info-right">
                                    <div className="LogoName">World Health Organization</div>
                                    <div className="Logo-Subscript">@WHO</div>
                                </div>

                            </div>
                            <div className="twitter-para">
                                We are the #UnitedNations health agency.We are committed to achieving better health for everyone,everywhere -#HealthForAll
                            </div>
                            <div className="twitter-footer">
                                <img src={like} alt="" className="twitter-footer-like" />
                                <h5 className="likes">4.6k</h5>
                                <img src={share} alt="" className="twitter-footer-share" />
                                <h5 className="shares">247</h5>
                                <h5 className="date">27th Mar</h5>
                            </div>
                            
                            <div class="twitter-info">
                                <div className="twitter-info-img">
                                    <img src={Modi} alt="" className="twitter-info-img-left" />
                                </div>
                                <div className="twitter-info-right">
                                    <div className="LogoName">PMO India</div>
                                    <div className="Logo-Subscript">@PMOIndia</div>
                                </div>
                            </div>
                            <div className="twitter-para">
                                PM@narendramodi loads spirit of COVID-19 survivors,urges them to share their success with people.#MannKibaat
                            </div>
                            <div className="twitter-footer">
                                <img src={like} alt="" className="twitter-footer-like-modi" />
                                <h5 className="likes">10k</h5>
                                <img src={share} alt="" className="twitter-footer-share-modi" />
                                <h5 className="shares">1.67k</h5>
                                <h5 className="date-modi">13th Mar</h5>
                            </div>


                            <div class="twitter-info">
                                <div className="twitter-info-img">
                                    <img src={Donald} alt="" className="twitter-info-img-left" />
                                </div>
                                <div className="twitter-info-right">
                                    <div className="LogoName">Donald J. Trump</div>
                                    <div className="Logo-Subscript">@realDonaldTrump</div>
                                </div>
                            </div>
                            <div className="twitter-para">
                                We are fighting the coronavirus on every possible front-and we will achieve total victory with the help
                            </div>
                        </div>
                    </div>{/*aside*/}
                </div>
                </div>
            </Fragment>
        );
    }
}
export default Layout;