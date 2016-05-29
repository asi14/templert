var server_ip = '[server_ip]';
var server_port = '[server_port]';

function swduino_stream_execute(url,regionid,callback,delay)
{
var xmlHttp;
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null){alert ("Browser does not support HTTP Request");return;} 
xmlHttp.onreadystatechange=function()
{
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 
 if(regionid){document.getElementById(regionid).innerHTML = xmlHttp.responseText;}
 if(callback){setTimeout(callback+"('"+xmlHttp.responseText+"')",0);}
 if(delay){setTimeout("swduino_stream_execute('"+url+"','"+regionid+"','"+callback+"','"+delay+"')",delay);}

 } 
}
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}
} 

function swduino_stream(variable,regionid,callback,delay,server,port)
{
 if(!delay){delay=500;}
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/get/'+variable;
 swduino_stream_execute(url,regionid,callback,delay);
}