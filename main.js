const form=document.getElementById("form");
form.addEventListener('submit',(e)=>{
    (e).preventDefault();
    let Name=document.getElementById("Name").value.trim()
    let movieSelect=document.getElementById("MovieSelect").value.trim()
    let date=document.getElementById("date").value.trim()
    let timing=document.getElementById("time").value.trim()
    let seatSelect=document.getElementById("SeatSelect").value.trim()
    let NumTick=document.getElementById("Numtick").value.trim()
    display(Name,movieSelect,date,timing,seatSelect,NumTick);
    form.reset()
});

function display(Name,movieSelect,date,timing,seatSelect,NumTick){
    const n=document.getElementById("n");
    const m=document.getElementById("m");
    const d=document.getElementById("d");
    const st=document.getElementById("st");
    const seat=document.getElementById("seat");
    const not=document.getElementById("not");
    const c=document.getElementById("c");
    n.innerHTML+="</br>"+Name;
    m.innerHTML+="</br>"+movieSelect;
    d.innerHTML+="</br>"+date;
    st.innerHTML+="</br>"+timing;
    seat.innerHTML+="</br>"+seatSelect;
    not.innerHTML+="</br>"+NumTick;
    let cost=0;
    if(seatSelect.localeCompare("gold (Rs:2000)")==0){
        cost=NumTick*2000;
    }
    else if(seatSelect.localeCompare("silver (Rs:1500)")==0){
        cost=NumTick*1500;
    }
    else if(seatSelect.localeCompare("classic (Rs:1000)")==0){
        cost=NumTick*1000;
    }
    c.innerHTML+="</br>Rs"+cost;
}

