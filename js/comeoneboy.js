
		var apikey = "AIzaSyAHIDPKFSVbDwk-NdlAW8n3uh2q6AJkyAA";//Your Drive Api Key
                var eid="";
                var video="";
                var embed="";

        if(!getParameterByName('id') || getParameterByName('ib')){
          var eid = prompt('Enter Drive Video ID :- ');
          embed = `
       <iframe width="auto" height="auto" scrolling="no" src="${location.href}?id=${eid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen> </iframe>
          `;
          prompt('Here is Your Embed Code :- ',embed);
          window.location.href = window.location.href+'?id='+eid;
        }, 
        video = getParameterByName('id') ;
        if(getParameterByName('ib')){
            video = btoa(getParameterByName('ib'));
        },
        var vidurl = "https://www.googleapis.com/drive/v3/files/"+video+"?alt=media&key="+apikey;
        document.write("<video controls id='video' src="+vidurl+"></video>");


function getembed(){
            var code = `
<iframe width="auto" height="auto" 
scrolling="no"
src="${location.href}?id=${video}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>
          `;
          prompt('Here is Your Embed Code :- ',code);
},

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

