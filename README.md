                                            Api Calculate Distance  🐦       
<br>
<p align="center">
<img src="https://user-images.githubusercontent.com/47280551/75129017-cb61d380-56a5-11ea-838f-a65159e72aeb.png">
<br>

### description
```sh
Api that calculates the distance between two locations!
```
<br>


### Running Node Docker

![docker build](https://user-images.githubusercontent.com/67064886/88506892-69d5c600-cfb1-11ea-82c0-b43d699fec8a.png)
```
$ docker build -t distance/node-api .
```
<br>

![node api](https://user-images.githubusercontent.com/67064886/88506894-6a6e5c80-cfb1-11ea-8e54-98792292d3ae.png)
```
$ docker run -p 5000:5000 distance/node-api
```
<br>





### Installation
```bash
npm install
```
<br>



### Initialization

```bash
npm start
```
<br>


### Method 1 - Latitude and Longitude     (router.project-osrm)




Origem Belo Horizonte   ( -19.9245,-43.9353 )
Destino São Paulo       ( -23.5505,-46.6333 )

Example of how to pass the parameters
http://localhost:5000/api/search?origem= '+ Latitude_Origem +' , '+ Longitude_Origem +' &destino= '+ Latitude_Origem +' , '+ Longitude_Origem +' 


How to use
http://localhost:5000/api/search?origem=-19.9245,-43.9353&destino=-23.5505,-46.6333

<br><br>



## 🔓 License 
MIT © [Erlan Lúcio](https://br.linkedin.com/in/erlan-lucio)

