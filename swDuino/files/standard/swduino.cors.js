var server_ip = '[server_ip]';
var server_port = '[server_port]';

function swduino_createcorsrequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function swduino_makecorsrequest(url,callback) {
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  xhr.onload = function() {
   var text = xhr.responseText;
   if(callback){setTimeout(callback+"("+text+")",0);}
  };
  xhr.onerror = function() {
  };
  xhr.send();
}

function swduino_cors_get(variable,callback,server,port)
{
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/get/'+variable;
 swduino_makecorsrequest(url,callback);
}

function swduino_cors_set(variable,value,server,port)
{
 if (!server){server=server_ip;}
 if (!port){port=server_port;}
 var url = 'http://'+server+':'+port+'/set/'+variable+'/'+value;
 swduino_makecorsrequest(url);
}