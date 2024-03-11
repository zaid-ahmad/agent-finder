<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Agent Finder</h3>

  <p align="center">
    A simple website that helps businesses find the best suitable AI agent for them. 
    <br />
    <br />
    <a href="https://agent-finder.vercel.app/">View Live</a>
    ·
    <a href="https://github.com/zaid-ahmad/agent-finder/issues">Report Bug</a>
    ·
    <a href="https://github.com/zaid-ahmad/agent-finder/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![AI Agent Finder Screen Shot][product-screenshot]](https://agent-finder.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Next.js
* React
* TypeScript
* Tailwind CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Use this Google Sheets to get the data [Google Sheets Link](https://docs.google.com/spreadsheets/d/1VnOv_C0v_FgDeKuQBaGuMNsWgoWOpLkGbE_XS_2Vb3Q/edit#gid=0)
2. Clone the repo
   ```sh
   git clone https://github.com/zaid-ahmad/agent-finder.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const SHEET_ID = 'ENTER THE SHEET ID';
   ```
5. Create a secrets.json and add it to .gitignore
   ```js
    {
      "type": "",
      "project_id": "",
      "private_key_id": "",
      "private_key": "",
      "client_email": "",
      "client_id": "",
      "auth_uri": "",
      "token_uri": "",
      "auth_provider_x509_cert_url": "",
      "client_x509_cert_url": "",
      "universe_domain": "googleapis.com"
    }
   ```

   > Watch this video if you get stuck setting up the google sheets: [YouTube](https://www.youtube.com/watch?v=K6Vcfm7TA5U)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Zaid Ahmad - [@zaidahmad__dev](https://twitter.com/zaidahmad__dev) - zaidd250@gmail.com

Project Link: [https://github.com/zaid-ahmad/agent-finder](https://github.com/zaid-ahmad/agent-finder)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/zaid-ahmad/agent-finder.svg?style=for-the-badge
[contributors-url]: https://github.com/zaid-ahmad/agent-finder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/zaid-ahmad/agent-finder.svg?style=for-the-badge
[forks-url]: https://github.com/zaid-ahmad/agent-finder/network/members
[stars-shield]: https://img.shields.io/github/stars/zaid-ahmad/agent-finder.svg?style=for-the-badge
[stars-url]: https://github.com/zaid-ahmad/agent-finder/stargazers
[issues-shield]: https://img.shields.io/github/issues/zaid-ahmad/agent-finder.svg?style=for-the-badge
[issues-url]: https://github.com/zaid-ahmad/agent-finder/issues
[license-shield]: https://img.shields.io/github/license/zaid-ahmad/agent-finder.svg?style=for-the-badge
[license-url]: https://github.com/zaid-ahmad/agent-finder/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/zaidahmad25
[product-screenshot]: https://i.ibb.co/1THSC6m/612shots-so.png
