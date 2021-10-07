import React,{useEffect,useState} from 'react'
import "./shopping.css"
import shoppingData from './shoppingData'
import { connect } from 'react-redux'
import { addFruitStart } from './actions'
const Shopping = ({addFruitStart,fruits}) => {

const [price,setPrice] = useState(0)
    const handleFruitStart=(name,price)=>{
        console.log(name,price)
        addFruitStart({name,price})
      
    }
console.log(fruits,"fruits...")

useEffect(()=>{
    let totalPrice = 0
    fruits && fruits.length > 0 && fruits.map((value)=>{
        totalPrice+=value.price
        console.log(totalPrice,value.price,"...")
    })
    setPrice(totalPrice)
    console.log(totalPrice,"totalPrice...")
},[fruits])

    return (
        <div style={{display:"flex"}}>
            <div className="leftside">
                <div style={{display:"flex"}}>
<p style={{marginLeft:"10px"}}>Name</p>
<p style={{marginLeft:"30px"}}>Price</p>
</div>
{shoppingData.map((value)=>{
    return(
<div style={{display:"flex"}}>
    <p style={{marginLeft:"10px"}}>{value.fruitName}</p>
    <p style={{marginLeft:"30px"}}>{value.price}</p>
    <button style={{color:"white",backgroundColor:"blue",marginLeft:"30px",marginTop:"10px",height:"30px",width:"50px"}} onClick={()=>{handleFruitStart(value.fruitName,value.price)}}>Add</button>
</div>
    )
})
}
            </div>
<div className="rightside">
   
<p style={{marginLeft:"10px"}}>Quantity: {fruits.length} </p>
<p style={{marginLeft:"10px"}}>total price : {price}</p>
</div>
        </div>
    )
}

const mapStateToProps= state => ({
fruits:state.shopping.fruit
})

const mapDispatchToProps = (dispatch) => ({
    addFruitStart:(value) => dispatch(addFruitStart(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Shopping)
