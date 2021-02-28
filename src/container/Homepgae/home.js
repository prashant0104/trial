import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Constant from '../../Constant/constant';
import Classes from '../Homepgae/style.module.css'



const Home = (props) => {

    const [inputValue, setInputValue] = useState('dog');
    useEffect(() => {
        props.changeSateDetails(inputValue);
    }, [inputValue])
    useEffect(() => {
        if (props.images.length > 0) {
            alert('update');
        }
    }, [props.images])



    const images = props.images;

    images.map = (ele) => {


    }

    const handleChange = (eve) => {
        setInputValue(eve.target.value)
    }

    const changeState = () => {
        props.changeSateDetails(inputValue);
    }

    return (
        <div>
            <h1>Home page</h1>
            <input onChange={handleChange}></input>
            <button onClick={changeState} className={Classes.buttonChange}>Click to change state</button>
            <p>{props.name}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { name: state.name, images: state.images }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeSateDetails: (val) => {
            dispatch({
                type: Constant.GET_ALL_IMG, payload: val
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);