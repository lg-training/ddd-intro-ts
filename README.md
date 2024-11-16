# 🛠️ LogBook μ-service Clean Architecture

<img src="https://avatars.githubusercontent.com/u/105936384?s=400&u=290ae673580a956864a07d4aef8e4448372a836b&v=4" align="left" width="172px" height="172px"/>
<img align="left" width="0" height="172px" hspace="10"/>

> 👋The project has some good practices, it is basics to begin with NodeJS.
>

[![lg-labs][0]][1]
[![License][2]][LIC]

From **Lg Training** or **lgt**! Get a guide basic over some tools on study or practice mode.

For more information, check this pages https://lufgarciaqu.medium.com.

# Using NodeJs 22 with Yarn 1.22.22

[Support for Prisma] [2]

## Take a tour

Vide reference [here][1].

## 🚀 Build project
Using `makefile`

Step 1/3: Install dependencies

```bash
  make app-install
```
Step 2/3: Run app

```bash
  make app-build
```

Step 3/3: Run app

```bash
  make app-start
```

## 🚀 Run locally

Using `makefile`

```shell
make app-run
```
> The [Logbook API with Port 8080][3]

> ✍️ Creating a Logbook with NAME=Example. _The **name** by default is Example._
>```bash
>make post-logbook
>```
>_Optionals: `make post-logbook NAME=OtherName` `make post-logbook POST_PAYLOAD='[JSON]' NAME=Other`_

> ✍️ Getting an Offer with `LOGBOOK_ID=UUID`. _The **logbookId** by default is 38b04fc5-349b-4e5b-9531-c35b3153a0cc._
>```bash
>make get-logbook LOGBOOK_ID=REPLACE_BY_UUID
>```
>_Optionals: `make get-logbook LOGBOOK_ID=UUID`_


_The `Sqlite` database and mng migration with `liquibase`._

## 📚Contents
### What can you do?
- [x] POST /logbooks
- [x] GET /logbooks
---
- [x] ORM Prisma

## ⚖️ License

The MIT License (MIT). Please see [License][LIC] for more information.


[0]: https://img.shields.io/badge/LgLabs-community-blue?style=flat-square
[1]: https://lufgarciaqu.medium.com
[2]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[4]: https://docs.gradle.org/current/userguide/userguide.html

[LIC]: LICENSE

[img1]: https://github.com/lg-labs-pentagon/lg-labs-boot-parent/assets/105936384/31c27db8-1e77-478d-a38e-7acf6ba2571c



## Important: 
Use Node 22, [Support for Prisma] [2]


[1]: https://www.youtube.com/watch?v=f7Su4KoqSio&t=366s
[2]: https://github.com/prisma/prisma/issues/25560#issuecomment-2462151407
[3]: http://localhost:8080

