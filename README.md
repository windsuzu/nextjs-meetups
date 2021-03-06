<!--
*** Thanks for checking out the nextjs-meetups. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username (that is "windsuzu"), repo_name (that is "nextjs-meetups"), project_title, project_description
-->

<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![PR Welcome][pr-welcome-shield]](#contributing) -->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![Author][author-shield]][author-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://nextjs-meetups-pearl.vercel.app/">
    <img src="public/favicon.ico" alt="" height="50">
  </a>

  <h3 align="center">NEXT.js Demo - A Meetups Website</h3>

  <p align="center">
    An example of a meetups website built with NEXT.js. <br>Its purpose is to demonstrate SSG/SSR, file-based routing, and backend API routes.
    <br />
    <a href="http://nextjs-meetups-pearl.vercel.app/">View Demo</a>
    ยท
    <a href="https://github.com/windsuzu/nextjs-meetups/issues">Report Bug</a>
    ยท
    <a href="https://github.com/windsuzu/nextjs-meetups/issues">Request Feature</a>
  </p>
</p>


<details>
<summary>Table of Contents</summary>

* [About](#about)
* [Examples](#examples)
  * [๐ผ๏ธ Layout](#๏ธ-layout)
  * [๐ File-based Routing](#-file-based-routing)
    * [basic routing](#basic-routing)
    * [nested-routes](#nested-routes)
    * [dynamic routes & extract url parameters](#dynamic-routes--extract-url-parameters)
    * [Link & imperative navigation](#link--imperative-navigation)
  * [๐คซ Static Site Generation (SSG)](#-static-site-generation-ssg)
  * [๐ค Server-Side Rendering (SSR)](#-server-side-rendering-ssr)
  * [๐ API Route](#-api-route)
  * [๐ Environment Variables](#-environment-variables)
* [Preview](#preview)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

</details>

---

<!-- ABOUT THE PROJECT -->
## About

<table>
<tr>
<td>

้ๅๅฐๆก็จไพ่จ้ NEXT.js ๅบๆฌ็็น่ฒ่ๆถๆงๅฏซๆณ๏ผไพๅฆไปฅๆไปถ็ฎ้็ณป็ตฑไฝ็บ่ทฏ็ฑ็ฎก็ (file-based routing)ใSSG (static site generation) ๅ SSR (server-side rendering) ็ๅฏฆไฝ๏ผไปฅๅๅฉ็จ API route ่็ๅพ็ซฏ็ธ้่ซๆฑใ

**Built With**

* HTML5, CSS3, Javascript ES6
* React.js
* NEXT.js

**[DEMO]** : http://nextjs-meetups-pearl.vercel.app/

</td>
</tr>
</table>

---

## Examples

### ๐ผ๏ธ Layout

ๆๅๅฏไปฅ็จ [_app.js](https://github.com/windsuzu/nextjs-meetups/blob/43f89b08a5ace4950ebd1779f9c4f1bb6237425e/pages/_app.js) ้ฒ่กๅจๅฑ่จญๅฎใ้คไบๅฏไปฅๅจ [_app.js](https://github.com/windsuzu/nextjs-meetups/blob/43f89b08a5ace4950ebd1779f9c4f1bb6237425e/pages/_app.js) ๆพๅฅๅฎ็พฉๅฅฝ็ `globals.css` ๅค๏ผๅ?็บ่ฃก้ข็ `<Component />` ไปฃ่กจๆฏไธๅ้?้ข๏ผๆไปฅๅฐ `<Layout>` ๅไฝ `<Component />` ๅฏไปฅๅฐ `<Layout>` ็่จญๅฎไฝ็จๅจๆฏไธๅ้?้ขไธใ

### ๐ File-based Routing

#### basic routing

ๅฐๆชๆกๆพๅจ `pages` ่ณๆๅคพๅบไธๅฐฑๅฏไปฅๅจๅฐๆ็ URL ็ๅฐ่ฉฒๆชๆก็้?้ขใ

```
/pages/index.js    => localhost/
/pages/welcome.js  => localhost/welcome
```
---

#### nested-routes

ๅจๅปบ็ซ `pages` ๅบไธๅปบ็ซๅฆๅค็่ณๆๅคพ๏ผๅฐฑๅฏไปฅๅปบ็ซ**ๅทข็ URL**ใ

```
/pages/meetup/index.js  => localhost/meetup/
/pages/meetup/other.js  => localhost/meetup/other
```
---

#### dynamic routes & extract url parameters

ๅฐๆชๆกๅ็จไธญๆฌ่ `[]` ๅ่ฆ๏ผไธญ้ๅกซๅฅ็ๅ็จฑ (e.g.`meetupId`) ๆไฝ็บ**็ถฒๅๅๆธ (url params)** ่ขซไฝฟ็จใ

```
/pages/[meetupId]/index.js  => localhost/123
                            => localhost/234
                            => ...

# is equal to 
# /pages/[meetupId].js
```

ๆๅฉ็จฎๆนๅผๅฏไปฅๅๅพ URL ไธ็ๅๆธ๏ผไธๅๆฏ้้ๅจ component ไธญไฝฟ็จ `useRouter`๏ผๅฆไธๅๆฏ้้ๅจ SSG/SSR ไธญไฝฟ็จ `context.params` ๅๅพใ

1. useRouter

``` js
// localhost/123
const router = useRouter();
console.log(router.query.meetupId);  // 123
```

2. Context.params (e.g. [MeetupDetailPage](https://github.com/windsuzu/nextjs-meetups/blob/main/pages/%5BmeetupId%5D/index.js#L23-L24))

``` js
// localhost/123
export const getStaticProps = async (ctx) => {
  const meetupId = ctx.params.meetupId; // 123
} 
```

---

#### Link & imperative navigation

* [Link as `<a href>`](https://github.com/windsuzu/nextjs-meetups/blob/main/components/layout/MainNavigation.js#L10-L15)
* [Link with button and passHref](https://github.com/windsuzu/nextjs-meetups/blob/main/components/meetups/MeetupItem.js#L17-L19)
* [Navigate Programmatically](https://github.com/windsuzu/nextjs-meetups/blob/main/pages/new-meetup/index.js#L19)

---

### ๐คซ Static Site Generation (SSG)

> SSG ๆๅจ build time ๅฐฑ้้ API ๅๅพ่ณๆ๏ผไธฆๅปบ็ซๅฅฝ้ๆ้?้ขใไผบๆๅจๅจไนๅพๆถๅฐ request ๆๆ้่คไฝฟ็จ้ไบๅทฒ็ถ็ๆๅฅฝ็้ๆ้?้ขใ่ฅไฝ?่ช็บ้?้ขๅฏไปฅๅจ็่ฆฝๅจ็ผ้่ซๆฑๅๅฐฑๅ็ข็ๅฅฝ๏ผไธฆไธไธๆๅธธๅธธๆน่ฎ๏ผๆจ่ฆไฝฟ็จ SSGใ

* [getStaticProps](https://github.com/windsuzu/nextjs-meetups/blob/main/pages/%5BmeetupId%5D/index.js#L23-L46) ๆๅจไผบๆๅจ็ซฏๅท่ก๏ผๅฏไปฅๆๅ API ่ณๆ๏ผไธฆๅๅณ props ็ตฆ componentใๅฆๅคๆๆ context ๅๆธๅฏไปฅ็ฒๅพ req, res ่ณ่จใ
* [getStaticPaths](https://github.com/windsuzu/nextjs-meetups/blob/main/pages/%5BmeetupId%5D/index.js#L48-L65) ็จไพๅฎ็พฉๅๆ่ทฏ็ฑๅฏ่ฝๆ็ข็็่ทฏๅพ (URLs)๏ผ่งฃๆฑบๅๆ่ทฏ็ฑๅฏ่ฝๆ็ก้็จฎๅฏ่ฝ็่ทฏๅพใ
  * fallback ่งฃๆฑบ็จๆถ้ๅฐ็กๅฎ็พฉๅจ getStaticPaths ็่ทฏ็ฑๆ
    * `false` ๆ็ดๆฅ้กฏ็คบ 404 Not Found
    * `true` ๆ้ฆฌไธ้กฏ็คบ็ฉบ็ฝ้?้ข๏ผไธฆ่ฉฆ่ๅป่ผๅฅๆญฃ็ขบ้?้ข
    * `"blocking"` ๆๅกๅจๅๆฌ้?้ข๏ผ็ญๅฐ่ผๅฅๆๅๆ้กฏ็คบๆญฃ็ขบ้?้ข

### ๐ค Server-Side Rendering (SSR)

> SSR ๆ็ๆฏไผบๆๅจๅจๆฏๆฌกๆถๅฐ่ซๆฑๆ๏ผๅฐฑๆ้ๆฐ็ข็ๅฐๆ็้ๆ้?้ขใ้ค้ไฝ?็้?้ข็่ณๆๆๆ้?ป็น็ๆดๆฐ๏ผไธๅงๅฎนๆๆ?นๆๆฏๆฌก็่ซๆฑ่ๆไธๅๆ๏ผๅจ้็จฎๆๆณไธๆ้ธๆไฝฟ็จ SSRใ

* [getServerSideProps](https://github.com/windsuzu/nextjs-meetups/blob/main/pages/index.js#L28-L47) ๅๆณๅ SSG ็ธๅ๏ผๅชๆฏๆๅจๆถๅฐๆฏๆฌก็ request ๅพ้ฝ้ๆฐๆธฒๆใ

### ๐ API Route

NEXT.js ๆไพ็ทจๅฏซๅพ็ซฏ็จๅผ็ขผ็ๅ่ฝ๏ผๅช่ฆๅจ `/pages/api/` ๅบไธๅปบ็ซๅพ็ซฏ API ๅ่ฝ๏ผๅฐฑๅฏไปฅๅจไปปไฝๅ็ซฏ็ component ๅผๅซ่ฉฒ APIใAPI ไธๆจฃๆๆ?นๆ `/pages/api/` ็ๆถๆงๅปบ็ซ URL ้ฃ็ตใ

```
/pages/api/new-meetup.js  => localhost/api/new-meetup
```

* [Backend [POST /api/new-meetup]](https://github.com/windsuzu/nextjs-meetups/blob/43f89b08a5ace4950ebd1779f9c4f1bb6237425e/pages/api/new-meetup.js#L10)
* [Frontend [fetch("/api/new-meetup")]](https://github.com/windsuzu/nextjs-meetups/blob/main/pages/new-meetup/index.js#L9-L20)

### ๐ Environment Variables

NEXT.js ๅฏไปฅๅจ `next.config.js` ๆ `vercel` ๅฎ็พฉ็ฐๅข่ฎๆธ:

``` js
const nextConfig = {
    ...
    env: {
        MONGODB_ACCOUNT: "XXXXX",
        MONGODB_PWD: "XXXXXXXX",
        MONGODB_COLLECTION: "XXXXX",
    },
};

module.exports = nextConfig;
```

ไธฆไธ้้ `process.env.MONGODB_ACCOUNT` ๅๅพ่ฉฒ่ฎๆธใ

## Preview

<p align="center">
  <img src="public/screenshots/1.png" width=68%>
  <img src="public/screenshots/2.png" width=68%>
</p>

## License

Distributed under the MIT License. See [LICENSE](https://github.com/windsuzu/nextjs-meetups/blob/main/LICENSE) for more information.

## Contact

Reach out to the maintainer at one of the following places:

* [GitHub discussions](https://github.com/windsuzu/nextjs-meetups/discussions)
* The email which is located [in GitHub profile](https://github.com/windsuzu)

## Acknowledgements

* [Maximilian Schwarzmรผller](https://www.udemy.com/user/maximilian-schwarzmuller/)

[contributors-shield]: https://img.shields.io/github/contributors/windsuzu/nextjs-meetups.svg?style=for-the-badge
[contributors-url]: https://github.com/windsuzu/nextjs-meetups/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/windsuzu/nextjs-meetups.svg?style=for-the-badge
[issues-url]: https://github.com/windsuzu/nextjs-meetups/issues
[license-shield]: https://img.shields.io/github/license/windsuzu/nextjs-meetups.svg?style=for-the-badge&label=license
[license-url]: https://github.com/windsuzu/nextjs-meetups/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/windsuzu
[pr-welcome-shield]: https://shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge
[author-shield]: https://shields.io/badge/Made_with_%E2%9D%A4_by-windsuzu-F4A92F?style=for-the-badge
[author-url]: https://github.com/windsuzu
