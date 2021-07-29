__NUXT_JSONP__("/features/ip-pools", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{document:{slug:"ip-pools",description:"",title:j,position:3.1,category:"Features",toc:[{id:k,depth:l,text:m},{id:n,depth:l,text:o}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"Postal supports sending messages from different IP addresses. This allows you to configure certain sets of IPs for different mail servers or send from different IPs based on the sender or recipient addresess."}]},{type:a,value:c},{type:b,tag:p,props:{id:k},children:[{type:b,tag:q,props:{ariaHidden:h,href:"#enabling-ip-pools",tabIndex:r},children:[{type:b,tag:d,props:{className:[s,t]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"By default, IP pools are disabled and all email is sent from any IP address on the host running the workers. To use IP pools, you'll need to enable them in the configuration file. You can do this by setting the following in your "},{type:b,tag:g,props:{},children:[{type:a,value:"postal.yml"}]},{type:a,value:" configuration file. You'll then need to restart Postal using "},{type:b,tag:g,props:{},children:[{type:a,value:"postal stop"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"postal start"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-yaml","line-numbers"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[f,u,v]},children:[{type:a,value:"general"}]},{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:x}]},{type:a,value:"\n  "},{type:b,tag:d,props:{className:[f,u,v]},children:[{type:a,value:"use_ip_pools"}]},{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:x}]},{type:a,value:" "},{type:b,tag:d,props:{className:[f,"boolean","important"]},children:[{type:a,value:h}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:p,props:{id:n},children:[{type:b,tag:q,props:{ariaHidden:h,href:"#configuring-ip-pools",tabIndex:r},children:[{type:b,tag:d,props:{className:[s,t]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once you have enabled IP pools, you'll need to set them up within the web interface. You'll see an "},{type:b,tag:i,props:{},children:[{type:a,value:j}]},{type:a,value:" link in the top right of the interface. From here you can add pools and then add IP addresses within them."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once an IP pool has been added, you'll need to assign it any organization that should be permitted to use it. Open up the organization and choose "},{type:b,tag:i,props:{},children:[{type:a,value:"IPs"}]},{type:a,value:" and then tick the pools you want to allocate."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once allocated to an organization, you can assign the IP pool to servers from the server's "},{type:b,tag:i,props:{},children:[{type:a,value:"Settings"}]},{type:a,value:" page. You can also use the IP pool to configure IP rules for the organization or server."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:"\nIt's "},{type:b,tag:"b",props:{},children:[{type:a,value:"very important"}]},{type:a,value:" to make sure that the IP addresses you add in the web interface are actually configured on your Postal servers. If the IPs don't exist on the server, message delivery may fail or messages will not be dequeued correctly.\n"}]}]},dir:"\u002Fen\u002Ffeatures",path:"\u002Fen\u002Ffeatures\u002Fip-pools",extension:".md",createdAt:y,updatedAt:y,to:"\u002Ffeatures\u002Fip-pools"},prev:{slug:"click-and-open-tracking",title:"Click & Open Tracking",to:"\u002Ffeatures\u002Fclick-and-open-tracking"},next:{slug:"spam-and-virus-checking",title:"Spam & Virus Checking",to:"\u002Ffeatures\u002Fspam-and-virus-checking"}}],fetch:{},mutations:[]}}("text","element","\n","span","p","token","code","true","strong","IP Pools","enabling-ip-pools",2,"Enabling IP pools","configuring-ip-pools","Configuring IP pools","h2","a",-1,"icon","icon-link","key","atrule","punctuation",":","2021-07-29T19:48:17.117Z")));