import React,{Component,Fragment} from 'react';
// import Aux from '../../hoc/Aux';
import  './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
class Layout extends Component{
    state={
            showSideDrawer:false
    };
    showSidedrawerHandler=()=>{this.setState({ showSideDrawer:true})}
    render(){
        return(
            <Fragment>
                <Toolbar/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.showSidedrawerHandler}/>
        <main className="Content">{this.props.children} </main>
            </Fragment>
        )
    }
}
export default Layout;