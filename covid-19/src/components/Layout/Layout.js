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
import NavigationItems from '../Layout/NavigationItems/NavigationItems';
class Layout extends Component
{
    render()
    {
        return(
            <Fragment>
            <div className="Header">
                <div className='Layout'> <img src={virus} /></div>
                <div className="Heading"><h3>COVID'19</h3></div>
                <nav><NavigationItems/></nav>
            </div>
            <div className="main">

            <div className="img1">
            <img src={BG} width="100%" height="100%"/>
            <div className="totalCase">Total Cases
            <img src={Up} width="8%"></img>
            </div>
            <div className="count">878,679</div>
            <img src={Graph} style={{width:"25%",height:"32%",position:'absolute',top:'35%',left:'60%'}}></img>
            </div>

            <div className="img2"><img src={BG} width="100%" height="100%"/>
            <div className="totalCase">Recovered<img src={Down} width="8%"></img></div>
            <div className="count">147,358</div>
            <img src={Graph3} style={{width:"25%",height:"32%",position:'absolute',top:'35%',left:'60%'}}></img>
            </div>
            <div className="img3"><img src={BG} width="100%" height="100%"/>
            <div className="totalCase">Active Cases<img src={Up} width="8%"></img></div>
            <div className="count">731,321</div>
            <img src={Graph1} style={{width:"25%",height:"32%",position:'absolute',top:'35%',left:'60%'}}></img>
            </div>

            <div className="img4"><img src={BG} width="100%" height="100%"/>
            <div className="totalCase">Total Death<img src={Up} width="8%"></img></div>
            <div className="count">47,097</div>
            <img src={Graph2} style={{width:"25%",height:"32%",position:'absolute',top:'35%',left:'60%'}}></img>
            </div>
            </div>
            <div className="section">
            <div className="LeftSection"> 

            <form className="search">
            <button ><i class="fa fa-search"></i></button>
            {/*<input type="text" placeholder="Search Location"/> */}
            </form> 
           
            <div className="box">
            <img src={US} style={{width:"10%",height:"30%",position:"absolute",top:"20%",left:"3%"}}/>
            <div className="countryName">United States</div>
            <div className="affected">158.5k Affected | 47.8k Recovered</div>
            <img src={Up} width="8%" style={{position:"absolute",top:"45%",left:"85%"}}/>
            </div> 
            <div className="box">
            <img src={Italy} style={{width:"10%",height:"30%",position:"absolute",top:"20%",left:"3%"}}/>
            <div className="countryName">Italy</div>
            <div className="affected">78.5k Affected | 7.1k Recovered</div>
            <img src={Up} width="8%" style={{position:"absolute",top:"45%",left:"85%"}}/>    
            </div> 
            <div className="box">
            <img src={Russia} style={{width:"10%",height:"30%",position:"absolute",top:"20%",left:"3%"}}/>
            <div className="countryName">Russia</div>
            <div className="affected">88.6k Affected | 6.3k Recovered</div>
            <img src={Up} width="8%" style={{position:"absolute",top:"45%",left:"85%"}}/>    
            </div> 
            <div className="box">
            <img src={China} style={{width:"10%",height:"30%",position:"absolute",top:"20%",left:"3%"}}/>
            <div className="countryName">China</div>
            <div className="affected">81.6k Affected | 8.32k Recovered</div>
            <img src={Down} width="8%" style={{position:"absolute",top:"45%",left:"85%"}}/>    
            </div> 
            <div className="box">
            <img src={Germany} style={{width:"10%",height:"30%",position:"absolute",top:"20%",left:"3%"}}/>
            <div className="countryName">Germany</div>
            <div className="affected">56.6k Affected | 5.39k Recovered</div>
            <img src={Up} width="8%" style={{position:"absolute",top:"45%",left:"85%"}}/>
            </div>
            </div> 
            </div>
            </Fragment>
        );
    }
}
export default Layout;