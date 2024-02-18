function first(){
    var x=document.getElementById("pro").value;
    var y=document.getElementById("app").value;
    var a = "Django_Procedure";
    var b="How to add multiple apps in a single project. Here are the steps to follow :-";
    var c="PHASE1: Project creation";
    var d1="Step1 : In Terminal";
    var d2="django-admin startproject "+x+"";
    var d3="It is used to create a project with folder name and project name as "+x+"";
    var d4="Step2 :";
    var d5="cd "+x+"";
    var d6="We changed the current dirctory to "+x+"";
    
    var e1="Step3 :";
    
    var e2="django-admin startapp "+y+"";
    var e3="We created an app with app name as "+y+"";
    
    var f1="Step4 :";
    
    var f2="python manage.py runserver";
    var f3="Run the Django development server";
    var f4="If everything is okay with your Project, Django will start running the server at localhost port 8000 (127.0. 0.1:8000), and then you have to navigate to that link in your browser.";
    var f5="If you are doing multiple apps in same project you might get Page Not Found Error, You can ignore it.";
    var f6="PHASE2: Creating urls";
    var g1="Step5 :";
    var g2="5a) In "+y+", create folder templates";
    var g3="5b) In "+y+"/templates, create folder "+y+"";
    var g4="5c) In "+y+"/templates/html, create file index.html";
    var h1="Step6: In index.html write a program which include 'Hello World' and {{param1}}";
    var h2="<body>"+
    "   <p>Hello World</p>"+
    "    <p>{{param1}}</p>"+
    "</body>";
    var h3="Step7 : Go to "+x+"/settings.py add";
    
    var h4="INSTALLED_APPS = [...,\""+y+"\", ]";
    var i1="Step8 : Go to "+y+"/views.py";
    
    var i2="def home(request):<br>    return render(request,'"+y+"/index.html',{'param1':\"hello world\"})";
    var j1="Step9 : Create urls.py in "+y+" and add";
    var j2="from django.urls import path<br>from "+y+".views import home<br>urlpatterns = [path('', home),]";
    var j3="This is not mandatory to create urls.py for each apps. you can add all apps path in urls.py in main project.";
    var j4="It's an option that most Django developer seem to take advantage of because it helps keep your code organized - i,e; the urls relevant to a specific app live in that app's folder.";
    var k1="Step10 : In "+x+"/urls.py";
    var k2="There will be two parts :";
    var k3="10a) After from django.urls import path";
    var k4="import include- It is used for including the content of a file into your current program.";
    var k5="from django.urls import include";
    var k6="10b) Inside urlpatterns add";
    var k7="path(\""+y+"\" ,include(\""+y+".urls\")),";
    var l1="Step11 : In Terminal run,";
    var l2="python manage.py runserver";
    var l3="You will get output as";
    var l4="Hello World<br>hello world<br>In Browser, We should make changes in the server at localhost port 8000 i.e; 127.0.0.1:8000/"+y+"";
    var al=[a,b,c,d1,d2,d3,d4,d5,d6,e1,e2,e3,f1,f2,f3,f4,f5,f6,g1,g2,g3,g4,h1,h2,h3,h4,i1,i2,j1,j2,j3,j4,k1,k2,k3,k4,k5,k6,k7,l1,l2,l3,l4];
    var al1=['a','b','c','d1','d2','d3','d4','d5','d6','e1','e2','e3','f1','f2','f3','f4','f5','f6','g1','g2','g3','g4','h1','h2','h3','h4','i1','i2','j1','j2','j3','j4','k1','k2','k3','k4','k5','k6','k7','l1','l2','l3','l4'];
    for (x in al) {
    document.getElementById(al1[x]).innerHTML=al[x];
    }
    console.log(s);
    }
    
    var t = first();