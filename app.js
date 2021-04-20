
var a=[
    {
        title:"A complete graph can have",
        options:["n^2 spanning tree","n^n spanning tree","2n spanning tree","n^(n-2) spanning tree"],
        correct:"n^(n-2) spanning tree"
    },
    {
        title:"What is the full form of CSS",
        options:["Cascading Style Sheets","Cascadeless Styling Sheet","Common Styling Sheet","None of These"],
        correct:"Cascading Style Sheets"
    },
    {
        title:"How to include javascript to HTML documents",
        options:["input","link","script","None of These"],
        correct:"script"
    },
    {
        title:"How to declare variable in javascript",
        options:["int","var","char","All of the above"],
        correct:"var"
    },
    {
        title:"What => means in javascript",
        options:["Arrow Function","implies","Equal to","Invalid"],
        correct:"Arrow Function"
    },
    {
        title:"Which of these is not javascript framework",
        options:["Angular js","Angular","bootstrap","Django"],
        correct:"Django"
    },
    {
        title:"How do you define objects in js",
        options:["{}","[]","none","()"],
        correct:"{}"
    },
    {
        title:"_________ Javascript is also called cleint-side javascript",
        options:["Microsoft","Navigator","LiveWire","Nativ"],
        correct:"Navigator"
    },
    {
        title:"What is the output of '2'+2",
        options:["22","5","'4'"," None of these"],
        correct:"22"
    },
    {
        title:"What is the output of '2'-1",
        options:["1","'1'","3","None of these"],
        correct:"3"
    }
]

var score=0;
var q_no=0;
var index;

function check(){
    var radio= document.getElementsByName("option");
    var selected=false;
    
    for(var i=0;i<4;i++){
        if(radio[i].checked){
        selected=true;
        index=i;
        break;
        }
    }

    
    if(!selected)
    alert("Please select an option");
    else{
        var ans=document.getElementById("r"+index).value;
        console.log(ans+" "+index);
        if(ans==a[q_no].correct){
        score++;
        document.getElementById("submit").innerHTML="<p id='cc' style='background-color: #BFECCE; color: green;'>Correct</p><button class='btn btn-success' onclick='next()'>Next</button>";
        }
        else{
            document.getElementById("submit").innerHTML="<p id='cc' style='background-color: #FCD3D3; color: maroon;'>Incorrect</p><button class='btn btn-success' onclick='next()'>Next</button>";
        }
    }
}


function next(){
    q_no++;

    document.getElementsByName("option")[index].checked=false;

    document.getElementById("question").innerHTML=a[q_no].title;
document.getElementById("op0").innerHTML=a[q_no].options[0];
document.getElementById("op1").innerHTML=a[q_no].options[1];
document.getElementById("op2").innerHTML=a[q_no].options[2];
document.getElementById("op3").innerHTML=a[q_no].options[3];

document.getElementById("r0").value=a[q_no].options[0];
document.getElementById("r1").value=a[q_no].options[1];
document.getElementById("r2").value=a[q_no].options[2];
document.getElementById("r3").value=a[q_no].options[3];

if(q_no!=a.length-1)
document.getElementById("submit").innerHTML="<button class='btn btn-warning' onclick='check()'>Submit</button>";
else
document.getElementById("submit").innerHTML="<button class='btn btn-warning' onclick='finish()'>Finish</button>"
}


function finish(){
    document.getElementById("head").innerHTML="<div class='container' id='head'>SCORE: "+score+"</div>";

    var b="<ul>";
    for(var i=0;i<a.length;i++){
    b=b+"<li>"+a[i].title+" - <span class='badge badge-success'>"+a[i].correct+"</span></li>";
}
b=b+"</ul>";
document.getElementById('test').innerHTML="";
document.getElementById("ans").innerHTML=b;

    document.getElementById("h").innerHTML="<h2>ANSWER</h2>";
    document.getElementById("f").innerHTML="<button class='btn btn-primary' onclick='restart()'>Restart</button>";
}   


function restart(){
    q_no=0;
    location.reload();
}