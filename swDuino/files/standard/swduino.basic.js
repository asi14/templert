var server_ip = '[server_ip]';
var server_port = '[server_port]';

function swduino_basic_execute(url,regionid,callback)
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

function swduino_get(variable,regionid,callback,server,port)
{
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/get/'+variable;
 swduino_basic_execute(url,regionid,callback);
}

function swduino_set(variable,value,server,port)
{
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/set/'+variable+'/'+value;
 swduino_basic_execute(url);
}

function swduino_register(key,callback,server,port)
{
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/register/'+key;
 swduino_basic_execute(url,'',callback);
}

function swduino_unregister(server,port)
{
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/unregister';
 swduino_basic_execute(url);
}