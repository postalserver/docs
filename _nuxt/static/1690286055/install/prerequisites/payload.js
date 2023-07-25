__NUXT_JSONP__("/install/prerequisites", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{document:{slug:"prerequisites",description:"",title:"Prerequisites",position:h,category:A,toc:[{id:B,depth:h,text:C},{id:x,depth:h,text:D},{id:E,depth:h,text:F},{id:G,depth:h,text:H},{id:I,depth:h,text:J},{id:K,depth:h,text:L}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"There are some things you'll need to do before you can install Postal."}]},{type:a,value:c},{type:b,tag:i,props:{id:B},children:[{type:b,tag:f,props:{href:"#servers",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We "},{type:b,tag:"strong",props:{},children:[{type:a,value:"strongly"}]},{type:a,value:" recommend installing Postal on its own dedicated server (i.e. a server running no other software). The minimum specification for Postal is as follows:"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"At least 4GB of RAM"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"At least 2 CPU cores"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"At least 100GB of disk space"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most people install Postal on virtual servers. There are lots of providers to choose from including "},{type:b,tag:f,props:{href:"https:\u002F\u002Fm.do.co\u002Fc\u002F17696597a9ed",rel:[t,u,v],target:w},children:[{type:a,value:"Digital Ocean"}]},{type:a,value:z},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.linode.com",rel:[t,u,v],target:w},children:[{type:a,value:"Linode"}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"One thing to be aware of is you'll need to ensure that your provider does not block port 25 outbound. This is quite common and is used to prevent abuse from spammers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It doesn't matter what operating system you choose as long as you are able to install Docker on it (see next section). Nothing in these instructions will make assumptions about your operating system."}]},{type:a,value:c},{type:b,tag:i,props:{id:x},children:[{type:b,tag:f,props:{href:"#docker",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Postal runs entirely using containers which means to run Postal you'll need some software to run these containers. We recommend using Docker for this purpose but you can use whatever software you wish."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You'll need to install Docker on your server to begin with. "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fget-docker\u002F",rel:[t,u,v],target:w},children:[{type:a,value:"Follow the instructions on the Docker website"}]},{type:a,value:" to install Docker."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In addition to Docker, you'll also need "},{type:b,tag:e,props:{},children:[{type:a,value:N}]},{type:a,value:". This is an extra utility which "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fcompose\u002Finstall\u002F",rel:[t,u,v],target:w},children:[{type:a,value:"can be found on the Docker website"}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before continuing ensure that you can run both "},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:z},{type:b,tag:e,props:{},children:[{type:a,value:N}]},{type:a,value:" from your prompt."}]},{type:a,value:c},{type:b,tag:i,props:{id:E},children:[{type:b,tag:f,props:{href:"#system-utilities",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are a few system utilities that you need to have installed before you'll be able to run some of the Postal commands."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On Ubuntu\u002FDebian:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"apt install git curl jq\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On CentOS\u002FRHEL:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"yum install git curl jq\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{id:G},children:[{type:b,tag:f,props:{href:"#git--installation-helper-repository",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You'll need to make sure you have "},{type:b,tag:e,props:{},children:[{type:a,value:"git"}]},{type:a,value:" installed on your server. You'll then need to clone the Postal installation helper repository. This contains some bootstrapping config and other useful things which will speed along your installation."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fpostalserver.io\u002Fstart\u002Finstall \u002Fopt\u002Fpostal\u002Finstall\nsudo ln -s \u002Fopt\u002Fpostal\u002Finstall\u002Fbin\u002Fpostal \u002Fusr\u002Fbin\u002Fpostal\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{id:I},children:[{type:b,tag:f,props:{href:"#mariadb",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Postal requires a database engine to store all email and other essential configuration data. You will need to provide credentials that allow full access to create and delete databases as well as having full access to any databases created. Postal will provision a database automatically for each mail server that you create."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can run MariaDB in a container, assuming you have Docker, using this command:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"docker run -d \\\n   --name postal-mariadb \\\n   -p 127.0.0.1:3306:3306 \\\n   --restart always \\\n   -e MARIADB_DATABASE=postal \\\n   -e MARIADB_ROOT_PASSWORD=postal \\\n   mariadb\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This will run a MariaDB instance and have it listen on port 3306."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:O}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you are unable or unwilling to grant root access, the database user you create separately needs all permissions on databases called "},{type:b,tag:e,props:{},children:[{type:a,value:"postal"}]},{type:a,value:z},{type:b,tag:e,props:{},children:[{type:a,value:"postal-*"}]},{type:a,value:" (this prefix can be configured in the "},{type:b,tag:e,props:{},children:[{type:a,value:"message_db"}]},{type:a,value:" part of your configuration)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"alert",props:{},children:[{type:a,value:"\nWhilst you can configure the maximum message size however you wish, you will need to verify that MariaDB is configured with "},{type:b,tag:e,props:{},children:[{type:a,value:"innodb_log_file_size"}]},{type:a,value:" to at least 10 times the biggest message you wish to send (150MB for 15MB email, 250MB for 25MB email, etc)."},{type:b,tag:P,props:{},children:[]},{type:b,tag:P,props:{},children:[]},{type:a,value:"If you have a legacy v1 database you might also want to check that raw tables in the database have the type "},{type:b,tag:e,props:{},children:[{type:a,value:"LONGBLOB"}]},{type:a,value:".\n"}]},{type:a,value:c},{type:b,tag:i,props:{id:K},children:[{type:b,tag:f,props:{href:"#rabbitmq",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"RabbitMQ is responsible for dispatching messages between different processes - in our case, the workers. As with MariaDB, there are numerous ways for you to install this. For this guide, we're just going to run a single RabbitMQ worker."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"docker run -d \\\n   --name postal-rabbitmq \\\n   -p 127.0.0.1:5672:5672 \\\n   --restart always \\\n   -e RABBITMQ_DEFAULT_USER=postal \\\n   -e RABBITMQ_DEFAULT_PASS=postal \\\n   -e RABBITMQ_DEFAULT_VHOST=postal \\\n   rabbitmq:3.8\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This will run a single RabbitMQ instance and have it listen on port 5672."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:O}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Finstall",path:"\u002Fen\u002Finstall\u002Fprerequisites",extension:".md",createdAt:Q,updatedAt:Q,to:"\u002Finstall\u002Fprerequisites"},prev:{title:"Feature List",path:"\u002Fen\u002Fwelcome\u002Ffeature-list",to:"\u002Fwelcome\u002Ffeature-list"},next:{title:A,path:"\u002Fen\u002Finstall\u002Finstallation",to:"\u002Finstall\u002Finstallation"}}],fetch:{},mutations:[]}}("text","element","\n","p","code","a","li",2,"h2","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","nofollow","noopener","noreferrer","_blank","docker","ul"," and ","Installation","servers","Servers","Docker","system-utilities","System utilities","git--installation-helper-repository","Git & installation helper repository","mariadb","MariaDB","rabbitmq","RabbitMQ",".","docker-compose","Be sure to choose a secure password. You'll need to put this in your Postal configuration when you install it so be sure to make a (secure) note of it.","br","2023-07-25T11:53:23.190Z")));