Aframe.registerComponent(createbuttons, {
    init: function(){
        var button1 = document.createElement("button");
        button1.innerHTML = "Order Now";
        button1.setAttribute("id", "order-button");
        button1.setAttribute("class", "btn btn-danger ml-3 ml-3");

        var button2 = document.createElement("button");
        button2.innerHTML = "Order Summary";
        button2.setAttribute("id", "order-summary-button");
        button2.setAttribute("class", "btn btn-danger ml-3");

        var buttonDIV = document.getElementById("button-div");
        buttonDIV.appendChild(button1);
        buttonDIV.appendChild(button2);
    }
});

getorderSummary :async function(uid){
    return await firebase
    .firebase()
    .collection("users")
    .doc(uid)
    .get()
    .then( doc => doc.data());
}
    
