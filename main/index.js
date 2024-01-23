function update(){
   
    let bill = Numeber(document.getElementById("yourBill").value)
    let tipPercentege = document.getElementById("tipInput").value
    let split= document.getElementById("splitInput").value

    let tipValue = bill * (tipPercentege / 100)
    let billTottla = bill + tipValue
    let billEach = billTottla / split

     
}
