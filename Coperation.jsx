import React from 'react'
import { useState } from 'react';


const Coperation = () => {
    let[data,updatedata]=useState([]);
    let[user,updateuser]=useState({type:'',friend:'',name:'',date:'',currency:'',amount:''});

   
    function setData(e){
        // name=e.target.name;
        // value=e.target.value;
        updateuser({...user, [e.target.name]:e.target.value});
        //console.log(e.target.value)
       
    }

    const {name,email,mobile,address,message}=user;

    async function showData(e){
        e.preventDefault()
        
       const {type,friend,name,date,currency,amount}=user
          
        const res=await fetch('https://reactform-70ba2-default-rtdb.firebaseio.com/reactdata.json',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                type
                ,friend,name,date,currency,amount
            })
        })
        //console.log(type);

        updatedata([...data,{type,friend,name,date,currency,amount}])
        // console.log(user)
        updateuser({type:'',friend:'',name:'',date:'',currency:'',amount:''})
    }

    function deleteData(i){
        console.log(i,'this index deleted');
        let total=[...data]
        total.splice(i,1)
        updatedata(total)
    }

    function upData(i){
        let {type,friend,name,date,currency,amount}=data[i];
        updateuser({type,friend,name,date,currency,amount})
    }
// var n=1;
// var x=0
// var list1=[];
// var list2=[];
// var list3=[];
// var list4=[];
// var list5=[];
// var list6=[];
//     function showData(e){
//         e.preventDefault();
//        var AddRow=document.getElementById('table');
//        var NewRow=AddRow.insertRow(n);

//       list1[x]= document.getElementById('select').value;
//       list2[x]= document.getElementById('friend').value;
//       list3[x]= document.getElementById('name').value;
//       list4[x]= document.getElementById('date').value;
//       list5[x]= document.getElementById('currency').value;
//       list6[x]= document.getElementById('amount').value;

//       var cel1 = NewRow.insertCell(0);
//       var cel2= NewRow.insertCell(1);
//       var cel3= NewRow.insertCell(2);
//       var cel4= NewRow.insertCell(3);
//       var cel5= NewRow.insertCell(4);
//       var cel6= NewRow.insertCell(5);
//       cel1.innerHTML=list1[x];
//       cel2.innerHTML=list2[x];
//       cel3.innerHTML=list3[x];
//       cel4.innerHTML=list4[x];
//       cel5.innerHTML=list5[x];
//       cel6.innerHTML=list6[x];

//       n++;
//       x++;
//     }

    

    return (
        <>
        
         <h1 className='h1'>Simple Expense Manager Project</h1>
               
        <div className='body'>
            <div className='container'>
               
                <form>
                    <div className="div">
                        <span className="yname">Type</span><br />
                        <select className='select'  name='type' value={user.id} onChange={setData}>
                        {/* <option>--Choose One</option> */}
                            <option id="cash">Cash</option>
                            <option id="upi">UPI</option>
                        </select>
                    </div>

                    <div className="div1">
                        <span className="sname">Add Friend</span><br />
                        <input type='text' name='friend' className='select' id='friend' value={user.friend} onChange={setData}/>
                </div>

                <div className="div2">
                        <span className="yname">Name</span><br />
                        <input type='text' name='name' className='name' id='name' value={user.name} onChange={setData}/>
                </div>

                <div className="div3">
                        <span className="yname">Date</span><br />
                        <input class="input" type="datetime-local" name="date" value={user.date} className='date'  />
                </div>

                <div className="div4">
                <span className="yname">Currency</span><br />
                        <select name='currency' className='currency' value={user.id}>
                            <option id="rs">RS</option>
                            <option id="usd">USD</option>
                        </select>
                </div>

                <div className="div5">
                        <span className="yname">Amount</span><br />
                        <input name='amount' className='amount' id='amount' value={user.amount} onChange={setData}/>
                </div>
                <div className='div6'>
                    <button className='btn' onClick={showData}>Add A New Expense</button>
                </div>
                </form>
                </div>
            </div>
           
            <table className="table table-borderedt table-center table-primary" id='table'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Friend</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>     
            {
                 data.map((v,i)=>{
                    return(
                        <tr key={i}>
                            <td>{v.type}</td>
                            <td>{v.friend}</td>
                            <td>{v.name}</td>
                            <td>{v.date}</td>
                            <td>{v.currency}</td>
                            <td>{v.amount}</td>
                            <td><button onClick={()=>deleteData(i)}>Delete</button></td>
                            <td><button onClick={()=>upData(i)}>update</button></td>
                        </tr>
                    )
                 })
                }
            </tbody>
        </table>
            
        </>
    )
}

export default Coperation