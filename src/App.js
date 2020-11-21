import React,{useState} from 'react';
import data from './data';
import List from './List';



 export default function App() {
     const [people, setpeople] = useState(data);

     const removefun=(id)=>{
         const newpeople=people.filter((two)=>two.id !==id);
        setpeople(newpeople);
                   
    }

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List one={people} remove={removefun} />
                <button onClick={()=>setpeople([])}>clear all</button>
            </section>
            
        </main>
    )
}
