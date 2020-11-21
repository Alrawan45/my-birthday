import React from 'react'

 function List({one,remove}) {
    return (
        <>
        {one.map((person)=>{
            const{id,name,age,image}=person;
            return(
                <article key={id} className="person">
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age} years old.</p>
                    < button  onClick={()=>remove(id)}> remove </button>

                </div>
                </article>
            )
        })}
           
        </>
    )
}
export default List;
