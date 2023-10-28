import React from 'react'

function CakeContainer() {
  return (
    <div>
        <h2>Number of cakes</h2>
        <button>Buy Cake</button>
    </div>
  )
}

const mapStatetoProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default CakeContainer