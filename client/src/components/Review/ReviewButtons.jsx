import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { connect } from "react-redux";



import ReviewModal from './ReviewModal.jsx';


function ReviewButtons ({productId}) {
    let [showModal, setShowModal] = useState(false)


    let moreHandler = () => {
        console.log("More Reviews Please!");
    }

    let showHideModal = () => {
        // console.log("show me the modal!");
        setShowModal(current => !current);
    }

    // useEffect(() => {
    //     console.log(showModal);
    //   }, [showModal])

    return (
        <div>
            <button
                title="More"
                onClick={moreHandler}
                type='button'
                style={indvButton}
                element="More Reviews Button"
                widget='Reviews'
            >
                MORE
            </button>
            <button
                title="Add"
                onClick={showHideModal}
                type='button'
                style={indvButton}
                element="Add Review Button"
                widget='Reviews'
            >
                ADD A Review +
            </button>

            {showModal ?
                <ReviewModal
                productID={productId}
                closeModal={showHideModal}
                /> : null
            }
        </div>
    )
}


function mapStateToProps(state) {
    let productId = state.addProduct.id;
    return {productId: productId};
}

const buttons = {
    display: "flex",
    textAlign: "left",
    left: "18.5vw",
    width: "60vw",
    height: "75px",
    flexDirection: "row",
    marginLeft: "19vw",
    marginBottom: "40px"
  }
  
  const indvButton = {
    fontWeight: "bold",
    maxWidth: "250px",
    margin: "10px",
    maxHeight: "75px",
    backgroundColor: "#F0EAD6",
    //border: "1px solid black",
    padding: "10px",
    boxShadow: "1px 1px 5px black",
    marginTop: "25px",

  }
  
  export default connect(mapStateToProps)(ReviewButtons);
