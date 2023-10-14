let output=document.getElementById('input')
function show(num){
    output.value = output.value+num
}
function caluclate(){
    try{
        output.value = eval(output.value)

    }
    catch{
        output.value = "Error!!!"
    }
}
function clr(){
    output.value=""
}
function remove(){
    output.value=output.value.slice(0,-1)
}