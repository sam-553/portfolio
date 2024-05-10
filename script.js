const tabcontents=document.getElementsByClassName("tab-contents");
const tablinks=document.getElementsByClassName("tab-links");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab")

}