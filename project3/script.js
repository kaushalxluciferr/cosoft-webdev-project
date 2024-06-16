const display=document.getElementById("display");
function appenddisplay(input)
{
    display.value +=input;
}
function cleardisplay()
{
display.value="";
}
function calculate(){
    try
    {
    display.value=eval(display.value);
    }
    catch(error)
    {
display.value="Error";
    }
}