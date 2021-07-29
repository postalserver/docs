__NUXT_JSONP__("/developer/webhooks", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al){return {data:[{document:{slug:"webhooks",description:"",title:"Webhooks",position:4.3,category:"Developer",toc:[{id:$,depth:v,text:aa},{id:ab,depth:v,text:ac},{id:ad,depth:v,text:ae},{id:af,depth:v,text:ag}],body:{type:"root",children:[{type:b,tag:r,props:{},children:[{type:a,value:"Postal supports sending webhooks over HTTP when various events occur during the lifecycle of a message."}]},{type:a,value:l},{type:b,tag:r,props:{},children:[{type:a,value:"This page lists all the different types of event along with an example JSON payload that you'll receive. In many cases, only a small amount of information will be sent, if you require more information you should use the API to get obtain it."}]},{type:a,value:l},{type:b,tag:w,props:{id:$},children:[{type:b,tag:x,props:{ariaHidden:s,href:"#message-status-events",tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aa}]},{type:a,value:l},{type:b,tag:r,props:{},children:[{type:a,value:"These events are triggered on various events in an e-mail's lifecycle. The payload format is identical for all messages however the "},{type:b,tag:m,props:{},children:[{type:a,value:"status"}]},{type:a,value:" attribute may change. The following statuses may be delivered."}]},{type:a,value:l},{type:b,tag:"ul",props:{},children:[{type:a,value:l},{type:b,tag:B,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"MessageSent"}]},{type:a,value:" - when a message is successfully delivered to a recipient\u002Fendpoint."}]},{type:a,value:l},{type:b,tag:B,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"MessageDelayed"}]},{type:a,value:" - when a message's delivery has been delayed. This will be sent each time we attempt a delivery and a message is delayed further."}]},{type:a,value:l},{type:b,tag:B,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"MessageDeliveryFailed"}]},{type:a,value:" - when a message cannot be delivered."}]},{type:a,value:l},{type:b,tag:B,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"MessageHeld"}]},{type:a,value:" - when a message is held."}]},{type:a,value:l}]},{type:a,value:l},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"status\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"Sent\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"details\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"Message sent by SMTP to aspmx.l.google.com (2a00:1450:400c:c0b::1b) (from 2a00:67a0:a:15::2)\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"output\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"250 2.0.0 OK 1477944899 ly2si31746747wjb.95 - gsmtp\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"time\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"0.22"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"sent_with_ssl\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l}]}]}]},{type:a,value:l},{type:b,tag:w,props:{id:ab},children:[{type:b,tag:x,props:{ariaHidden:s,href:"#message-bounces",tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ac}]},{type:a,value:l},{type:b,tag:r,props:{},children:[{type:a,value:"If we receive a bounce message for a message that was previously accepted, you'll receive the "},{type:b,tag:m,props:{},children:[{type:a,value:"MessageBounced"}]},{type:a,value:ai}]},{type:a,value:l},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"original_message\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"bounce\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"12347"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"abcdef124\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"incoming\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"5817a64332f44_4ec93ff59e79d154565eb@someserver.com\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"abcde@amrp.appmail.io\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"postmaster@someserver.com\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"Delivery Error\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"1477945179.12994"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,R,q,S]},children:[{type:a,value:q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l}]}]}]},{type:a,value:l},{type:b,tag:w,props:{id:ad},children:[{type:b,tag:x,props:{ariaHidden:s,href:"#message-click-event",tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ae}]},{type:a,value:l},{type:b,tag:r,props:{},children:[{type:a,value:"If you have click tracking enabled, the "},{type:b,tag:m,props:{},children:[{type:a,value:"MessageLinkClicked"}]},{type:a,value:" event will tell you that a user has clicked on a link in one of your e-mails."}]},{type:a,value:l},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"url\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"https:\u002F\u002Fatech.media\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"VJzsFA0S\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"ip_address\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"185.22.208.2\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"user_agent\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"Mozilla\u002F5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit\u002F537.36 (KHTML, like Gecko) Chrome\u002F54.0.2840.98 Safari\u002F537.36\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l}]}]}]},{type:a,value:l},{type:b,tag:w,props:{id:af},children:[{type:b,tag:x,props:{ariaHidden:s,href:"#dns-error-event",tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ag}]},{type:a,value:l},{type:b,tag:r,props:{},children:[{type:a,value:"We constantly monitor your domains to ensure that your SPF\u002FDKIM\u002FMX records are correct. If you'd like to be notified when our checks fail, you can subscribe to the "},{type:b,tag:m,props:{},children:[{type:a,value:"DomainDNSError"}]},{type:a,value:ai}]},{type:a,value:l},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"domain\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"example.com\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"820b47a4-4dfd-42e4-ae6a-1e5bed5a33fd\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"dns_checked_at\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"1477945711.5502"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"spf_status\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"spf_error\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,R,q,S]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"dkim_status\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"Invalid\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"dkim_error\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"The DKIM record at example.com does not match the record we have provided. Please check it has been copied correctly.\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"mx_status\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"Missing\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"mx_error\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,R,q,S]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"return_path_status\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"return_path_error\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,R,q,S]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"server\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"54529725-8807-4069-ab29-a3746c1bbd98\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"AwesomeApp Mail Server\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"permalink\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"awesomeapp\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"organization\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"atech\""}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:l}]}]}]}]},dir:"\u002Fen\u002Fdeveloper",path:"\u002Fen\u002Fdeveloper\u002Fwebhooks",extension:".md",createdAt:al,updatedAt:al,to:"\u002Fdeveloper\u002Fwebhooks"},prev:{slug:"api",title:"Using the API",to:"\u002Fdeveloper\u002Fapi"},next:{slug:"auto-responders-and-bounces",title:"Auto-Responders & Bounces",to:"\u002Fother-content\u002Fauto-responders-and-bounces"}}],fetch:{},mutations:[]}}("text","element","span","token","string","punctuation","operator",":",",","\n    ","\n  ","\n","code","number","{","}","null","p","true","\"timestamp\"","\"token\"",2,"h2","a",-1,"icon","icon-link","li","div","nuxt-content-highlight","pre","language-javascript","line-numbers","1477945177.12994","\"id\"","\"direction\"","\"message_id\"","\"to\"","\"from\"","\"subject\"","\"spam_status\"","\"NotSpam\"","\"tag\"","keyword","nil","12345","\"abcdef123\"","\"outgoing\"","\"5817a64332f44_4ec93ff59e79d154565eb@app34.mail\"","\"test@example.com\"","\"sales@awesomeapp.com\"","\"Welcome to AwesomeApp\"","\"welcome\"","message-status-events","Message Status Events","message-bounces","Message Bounces","message-click-event","Message Click Event","dns-error-event","DNS Error Event","\"message\""," event.","\"uuid\"","\"OK\"","2021-07-29T19:48:17.117Z")));