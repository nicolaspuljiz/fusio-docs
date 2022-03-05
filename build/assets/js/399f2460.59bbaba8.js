"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5318],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},l="Apache",s={unversionedId:"installation/apache",id:"installation/apache",title:"Apache",description:"It is recommended to setup a virtual host in your sites-available folder which points to the public folder of Fusio.",source:"@site/docs/installation/apache.md",sourceDirName:"installation",slug:"/installation/apache",permalink:"/docs/installation/apache",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/installation/apache.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/installation/docker"},next:{title:"Nginx",permalink:"/docs/installation/nginx"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apache"},"Apache"),(0,i.kt)("p",null,"It is recommended to setup a virtual host in your sites-available folder which points to the public folder of Fusio.\nAfter this you also have to change the configuration of the url i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'psx_url'      => 'http://api.acme.com',\n'psx_dispatch' => '', // since we use clean urls\n")),(0,i.kt)("p",null,"The following contains a sample apache config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<VirtualHost *:80>\n    ServerName api.acme.com\n    DocumentRoot /var/www/html/fusio/public\n\n    <Directory /var/www/html/fusio/public>\n        Options FollowSymLinks\n        AllowOverride All\n        Require all granted\n\n        # rewrite\n        RewriteEngine On\n        RewriteBase /\n\n        RewriteCond %{REQUEST_FILENAME} !-f\n        RewriteCond %{REQUEST_FILENAME} !-d\n        RewriteRule (.*) /index.php/$1 [L]\n\n        RewriteCond %{HTTP:Authorization} ^(.*)\n        RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]\n    </Directory>\n\n    # log\n    LogLevel warn\n    ErrorLog ${APACHE_LOG_DIR}/fusio.error.log\n    CustomLog ${APACHE_LOG_DIR}/fusio.access.log combined\n</VirtualHost>\n")),(0,i.kt)("p",null,"On a Ubuntu/Debian system you could place the config at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apache/sites-available/fusio.conf"),". Through the command\n",(0,i.kt)("inlineCode",{parentName:"p"},"a2ensite fusio")," you would activate the site."),(0,i.kt)("p",null,"You should enable the module ",(0,i.kt)("inlineCode",{parentName:"p"},"mod_rewrite")," so that the .htaccess file in the public folder is used. It is also possible\nto include the htaccess commands directly into the virtual host which also increases performance. The htaccess contains\nan important rule which redirects the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header to Fusio which is otherwise removed. If the .htaccess file\ndoes not work please check whether the AllowOverride directive is set correctly i.e. to All."))}f.isMDXComponent=!0}}]);