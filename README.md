<!-- PROJECT SHIELDS -->

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/86c466a8c63f41299fa38a54b0f452de)](https://app.codacy.com/gh/lucioerlan/Distance-Between?utm_source=github.com&utm_medium=referral&utm_content=lucioerlan/Distance-Between&utm_campaign=Badge_Grade)
[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/erlanlucio/)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/lucioerlan/Distance-Between&count_bg=%23E71A18&title_bg=%23555555&icon=dependabot.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)


<!-- PROJECT -->
<br />
<p align="center">
  <h3 align="center"> 

   Api Calculate Distance  🐦 

  </h3> 
  <p align="center">
    <img src="https://user-images.githubusercontent.com/67064886/116720887-1286db00-a9b3-11eb-8339-23f2d80f5ae1.png" alt="Logo" >
    <br />
    <br />
    <a href="https://github.com/lucioerlan/Distance-Between/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucioerlan/Distance-Between/issues">Request Feature</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## 🤔 About The Project

Easily calculate the distance and time between two locations.

**1-** address Method

**2-** lat lon Method


<br>


<!-- INSTALLATION -->

## 🔨 Installation

You'll need [Node.js](https://nodejs.org) installed on your computer in order to build this app.

```bash
git clone https://github.com/lucioerlan/Distance-Between.git
$ cd Distance-Between
$ npm install
```

<br>


<!-- RUNNING TESTS -->

## 🤓 Documentation and running tests

* Access swagger http://localhost:5000/api/docs 🥇
* $ npm test

<br>

## 🎋 Request using CURL

```
$ curl -X GET 'http://localhost:5000/api/search/geo?OriginOne=city=Bujari&OriginTwo=state=AC&DestOne=city=Manaus&DestTwo=state=AM&method=search'
```
OR
```
$ curl -X GET 'http://localhost:5000/api/search/reverse?OriginOne=lat=-9.8309656&OriginTwo=lon=-67.9520886&DestOne=lat=-3.1316333&DestTwo=lon=-59.9825041&method=reverse'
```


<br>


<!-- RUNNING -->

## 🚀 Running

```
$ npm start 
```

#### Or Run Docker 🐳

```
$ docker-compose up -d
```

<br>


<!-- LICENSE -->

## 🔓 License

This project lives under MIT License. See LICENSE for more details. © - [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
