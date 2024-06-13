import Title from "../../components/title/Title";
import About from "../../components/about/About";
import React from "react";



function MainPage (props) {
    return (
        <>
            <About info = {{title:'Some Title', body:'Some body'}}/>
            <Title massage = {"Hello world !!!"}/>
        </>

    )
}




export default MainPage