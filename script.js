async function buttonClick() {
    let ta = document.getElementById("ta");
    let mtext = document.getElementById("misspelled");
    let text = ta.value;
    await fetch("http://127.0.0.1:5000/spell_check", {method: "POST", body: JSON.stringify({"message": text}), headers: {'Content-Type': 'application/json'}})
    .then((response)=>{
        mtext.value = "";
        response.json().then((data)=>{
            for(let i = 0; i < data["incorrect"].length; i++)
                mtext.value += data["incorrect"][i] + '\n';
        })
    })
}