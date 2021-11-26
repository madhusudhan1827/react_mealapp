import React, {useEffect,useState} from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

function Body() {
    const[items,setitems] =useState([])

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
            console.log(res.data);
            setitems(res.data.meals);
        }).catch(err=>{
            console.log('err')
        })
    },[])

    const itemlist = items.map((obj)=>{
        return<div className='col-md-4' id="mad18">
            <p>{obj.strMeal}</p>
            <img src={obj.strMealThumb} className="img-fluid"></img>
            <p>{obj.idMeal}</p>
        </div>
    })




    return (
        <div>
            {itemlist}
        </div>
    )
}

export default Body
