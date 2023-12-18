### How the Web works 
```
 how the web works provides a simplified view of what happens when you view a webpage in a web browser on your computer or phone.
 
 1): Clients and Servers 
 cmputers  connected to the internet are called clents and servers.

 * clients are the typical web user's internet-connected devices (for example, your computer connected to your wifi, or your phone connected to your mobile network)and we-accessing software available on those devices(usually a web browser like Firefox or Chrome).

 * server are computer that store webpage, sites, or apps. When a client device wants to access a webpage,  a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser


 The Client and server we've descrbed above don't tell the whole story. There are many other parts involved,and we'll describe them below.

 For now , let's imagine that web is a road.On one end of the road is the client, which is like your house. On the othher end of the road is the server, which is a shop you want to buy something from.

 In addition to the client and the server, we also need to say hello to :

 * Your internet connection: Allows you to send and receive data on the web. it's basically like the street between your house and the shop.

 * TCP/IP: Transmission control Protocol and Internet Protocol are Communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. in our example, this is like a car or a bike (or however else you might get around).

 *DNS: Domain Name System is like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's IP address it can retrieve the website. The  Browser needs to find out which serveer the website lives on, so it can send HTTP messages to the right place  this is like looking up the address of the shop so you can access it.

 *HTTP: Hypertext Transfer Proctocol is an application protocol that defines a language for clients and servers to speak to each other. this is like the language you use to order your goods.

 *Component files: A website is made up of many different files, which are like the different parts of the goods you buy from he shop. these files come in two main types:

 1) Code files : Website are built primarily from HTML,CSS and Javascript, thought you'll meet other technologies a bit later.
 2) Assests    : this is a collective name for alll other stuff that makes up a website, such as image, music, Video,Word documents and PDF's
```

### So what happens , exactly? 
```
when you type a web addresss into your browser(for our analogy that's like walking to the shop):

1. The browser goes to the DNS server, and finds the real adress of that server that the websiote lives on (you find the address of the shop).

2. the browser sends an HTTP request to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). this message, and all other data sent between the client and the server, is ent across your internet connection using TCP/IP.

3. if the server approves the client's request, the server sends the client a "200 OK" message, which means "of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets(the shop gives you your goods, and you bring them back to your house).

4. the browser assembles the small chunks into a complete web page and dispays it to you (the good arrive at your door - new shiny stuff awesome!)
```

### ORDER IN WHICH COMPONENT FILES ARE PARSED
```
when browser send request to servers for HTML files, those HTML files often contain elements refrencing external CSS stylesheets and SCRIPT elements refrencing external JavaSCript scripts. its's important to know the order in which those files are parsed by the browser as the browser loads the page.

1. The browser parses the HTML file first and that leads to the browser recognizing and elemnt refrences to external CSS styleSheets and any script elemnt refrences to scripts.

2. As the browser parses the HTML, it sends request back to the server for any CSS files it has found from link elements ,and any JavaScript files it has found from script elements, and from those, then parse the CSS and Javascript.

3. the browser generates an in-memory DOM tree from the parsed HTML, generates an in-memory CSSOM structure from the parsed CSS, and compilers and execute the parsed JavaScript.

4. As the Browser builds the DOM tree and applies the style from the CSSOM tree and executes the Javasript, a vosal representation of the page is painted to the Sreen, and the user sees the page content and can begin and can begin to intract with it.

```

### DNS explained 
```
Real web adresses are'nt the nice, memobrable strings you type into your address bar to find your fav website .  they are special numbers that look like this 192.0.2.172. 

This is called an IP address, and it represents a unique location on the web. however, it's not very easy to rember,? that's why the domain NAMe System was invented . this system uses special servers that match up a web addrss you type into your browser (like "mozilla.org") to the website's real (IP) address.

Website can be reached directly via their IP addresses .


```

### Packets explained
```
Earlier we used the term "packets" to describe the format in which the data is sent from server to client. What do we mean here? Basically, when data is sent across the web, it is sent in thousands of small chunks. There are multiple reasons why data is sent in small packets. They are sometimes dropped or corrupted, and it's easier to replace small chunks when this happens. Additionally, the packets can be routed along different paths, making the exchange faster and allowing many different users to download the same website at the same time. If each website was sent as a single big chunk, only one user could download it at a time, which obviously would make the web very inefficient and not much fun to use.
```