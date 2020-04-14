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
import US from '../../images/US.jpg';
import Italy from '../../images/Italy.png';
import China from '../../images/China.png';
import Germany from '../../images/Germany.png';
import Russia from '../../images/Russia.png';
import Fever from '../../images/fever.svg';
import Twitter from '../../images/Twitter.svg';
import WHO from '../../images/WHO.png';
import Modi from '../../images/MODI.png';
import Donald from '../../images/DONALD.png'
import like from '../../images/like.svg';
import share from '../../images/share.svg';
import NavigationItems from '../Layout/NavigationItems/NavigationItems';
class Layout extends Component {
    
    async componentDidMount()
    {
        const response =await fetch("https://api.covid19api.com/summary");
        console.log("hi"+Object.keys(response).join(''));
    }
    
    render() {
        return (
            <Fragment>
               <div className="Header">
                    <div className='Layout'> <img src={virus} /></div>
                    <div className="Heading"><h3>COVID'19</h3></div>
                    <nav><NavigationItems /></nav>
                </div>
                <div className="container">
                    <div className="Main-Section">
                        <div className="main">
                            <div className="img1">
                                <img src={BG} width="100%" height="100%" />
                                <div className="totalCase">Total Cases
                                <img src={Up} width="8%"/>
                                </div>
                                <div className="count">878,679</div>
                                <img src={Graph} style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>

                            <div className="img2"><img src={BG} width="100%" height="100%" />
                                <div className="totalCase">Recovered<img src={Down} width="8%"></img></div>
                                <div className="count">147,358</div>
                                <img src={Graph3} style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>
                            <div className="img3"><img src={BG} width="100%" height="100%" />
                                <div className="totalCase">Active Cases<img src={Up} width="8%"></img></div>
                                <div className="count">731,321</div>
                                <img src={Graph1} style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>

                            <div className="img4"><img src={BG} width="100%" height="100%" />
                                <div className="totalCase">Total Death<img src={Up} width="8%"></img></div>
                                <div className="count">47,097</div>
                                <img src={Graph2} style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
                            </div>
                        </div>
                        <div className="section">
                            <div className="LeftSection">

                                <div class="search-container">
                                    <input class="input-field" type="text" placeholder="Search Location" />
                                </div>

                                <div className="box">
                                    <img src={US} style={{ width: "10%", height: "30%", position: "absolute", top: "20%", left: "3%" }} />
                                    <div className="countryName">United States</div>
                                    <div className="affected">158.5k Affected | 47.8k Recovered</div>
                                    <img src={Up} width="8%" style={{ position: "absolute", top: "45%", left: "85%" }} />
                                </div>
                                <div className="box">
                                    <img src={Italy} style={{ width: "10%", height: "30%", position: "absolute", top: "20%", left: "3%" }} />
                                    <div className="countryName">Italy</div>
                                    <div className="affected">78.5k Affected | 7.1k Recovered</div>
                                    <img src={Up} width="8%" style={{ position: "absolute", top: "45%", left: "85%" }} />
                                </div>
                                <div className="box">
                                    <img src={Russia} style={{ width: "10%", height: "30%", position: "absolute", top: "20%", left: "3%" }} />
                                    <div className="countryName">Russia</div>
                                    <div className="affected">88.6k Affected | 6.3k Recovered</div>
                                    <img src={Up} width="8%" style={{ position: "absolute", top: "45%", left: "85%" }} />
                                </div>
                                <div className="box">
                                    <img src={China} style={{ width: "10%", height: "30%", position: "absolute", top: "20%", left: "3%" }} />
                                    <div className="countryName">China</div>
                                    <div className="affected">81.6k Affected | 8.32k Recovered</div>
                                    <img src={Down} width="8%" style={{ position: "absolute", top: "45%", left: "85%" }} />
                                </div>
                                <div className="box">
                                    <img src={Germany} style={{ width: "10%", height: "30%", position: "absolute", top: "20%", left: "3%" }} />
                                    <div className="countryName">Germany</div>
                                    <div className="affected">56.6k Affected | 5.39k Recovered</div>
                                    <img src={Up} width="8%" style={{ position: "absolute", top: "45%", left: "85%" }} />
                                </div>
                            </div>
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
                                        <img src={Fever} style={{ height: "80%", width: "" }} />
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
                                <div className="twitter-img"> <img src={Twitter} /></div>
                            </div>
                            <div class="twitter-info">
                                <div className="twitter-info-img">
                                    <img src={WHO} className="twitter-info-img-left" />
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
                                <img src={like} className="twitter-footer-like" />
                                <h5 className="likes">4.6k</h5>
                                <img src={share} className="twitter-footer-share" />
                                <h5 className="shares">247</h5>
                                <h5 className="date">27th Mar</h5>
                            </div>

                            <div class="twitter-info">
                                <div className="twitter-info-img">
                                    <img src={Modi} className="twitter-info-img-left" />
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
                                <img src={like} className="twitter-footer-like-modi" />
                                <h5 className="likes">10k</h5>
                                <img src={share} className="twitter-footer-share-modi" />
                                <h5 className="shares">1.67k</h5>
                                <h5 className="date-modi">13th Mar</h5>
                            </div>


                            <div class="twitter-info">
                                <div className="twitter-info-img">
                                    <img src={Donald} className="twitter-info-img-left" />
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
            </Fragment>
        );
    }
}
export default Layout;