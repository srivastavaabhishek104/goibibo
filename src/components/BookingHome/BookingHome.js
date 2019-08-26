import React, { Component } from 'react';
import Aux from '../hoc/Aux'
import Background from '../../assets/images/background.jpg'
import FormComponent from '../FormComponent/FormComponent'
import '../Home/Home.css'
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
class BookingHome extends Component {
    createChildren = (n) => {
        return (range(n).map(
            i => <div key={i} 
                    style={{ height: 200, background: '#333' }}
                >{i}
            </div>));
        }

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
    componentWillMount() {
        this.setState({
          children: [],
          activeItemIndex: 0,
        });
    
        setTimeout(() => {
          this.setState({
            children: this.createChildren(20),
          })
        }, 100);
    }
    render() {
        const {
            activeItemIndex,
          } = this.state;

          console.log(this.props.loginStatus);

        return (
            !this.props.loginStatus ? <div>{this.props.history.push('/')}</div>:
            <Aux>
                <img src={Background} height="430" alt = "goibibo.com" style={{top: "25px",position:"absolute",width:"100%"}}></img>
                <FormComponent loginStatus="true" />
                <p className="textPara">Our Services</p>
                <div className="stripedBorder">
                    <hr />
                    <span className="dot"></span>
                </div>
                
                <ItemsCarousel
                    className="carousel"
                    // Placeholder configurations
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{ height: 200, background: '#900' }}></div>}

                    // Carousel configurations
                    numberOfCards={5}
                    gutter={0}
                    showSlither={true}
                    firstAndLastGutter={true}
                    freeScrolling={false}

                    // Active item configurations
                    requestToChangeActive={this.changeActiveItem}
                    activeItemIndex={activeItemIndex}
                    activePosition={'center'}

                    chevronWidth={24}
                    rightChevron={<Link to="#" className="next">&#10095;</Link>}
                    leftChevron={<Link to="#" className="prev">&#10094;</Link>}
                    outsideChevron={false}>
                    {Array.from(new Array(7)).map((_, i) =>
                        <div
                            key={i}
                            style={{
                            height:"150px",
                            width:"200px",
                            borderRadius:"20px",
                            marginLeft:"50px",
                            marginRight:"50px",
                            background: 'url(https://placeimg.com/380/200/nature)'
                            }}
                        />
                    )}
                </ItemsCarousel>
                
            </Aux>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus
    } 
}

export default connect(mapStateToProps)(withRouter(BookingHome));
