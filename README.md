## P1C2
<div class="foldable__content"><p id="r-7134567" data-claire-element-id="31402162" class="hoveredCourseElement">&nbsp;<img id="r-7148539" data-claire-element-id="31402161" src="https://user.oc-static.com/upload/2021/01/19/16110448127505_Banner%20Exercez-vous.png" alt="Banner Exercez-vous"></p><p id="r-7148459" data-claire-element-id="31401932" class="">Je vous avais parlé au chapitre précédent d'un exercice fil rouge qui nous accompagnerait tout au long de ce cours. Vous vous en souvenez&nbsp;? Nous allons créer ensemble <strong>un site pour un magasin de plantes</strong>, La maison jungle !&nbsp;</p><p id="r-7134568" data-claire-element-id="31375458" class="">Il est temps de mettre en pratique ce que vous venez de voir. <br>Votre mission, si vous l'acceptez, est la suivante&nbsp;:</p><ul id="r-7134573" data-claire-element-id="31380769" class=""><li id="r-7134570" data-claire-element-id="31380768"><p id="r-7134569" data-claire-element-id="31380767"><strong>Créer le premier composant Header</strong> qui contient le nom de notre magasin&nbsp;: La maison jungle. Le composant Header correspond à une balise&nbsp;<code data-claire-semantic="text">h1</code>&nbsp; .</p></li><li id="r-7134572" data-claire-element-id="31375462"><p id="r-7134571" data-claire-element-id="31375461"><strong>L'intégrer dans un élément HTML</strong> qui aura pour id "root".</p></li></ul><p id="r-7134575" data-claire-element-id="31402221" class="">Vous trouverez <a href="https://codepen.io/nicolaspatschkowski/pen/ExgrqLV" target="_blank" rel="noopener noreferrer nofollow">le lien du CodePen pour commencer l'exercice ici</a>. Vous êtes des petits chanceux : je vous ai déjà paramétré React, ReactDOM et Babel.</p><p id="r-7134576" data-claire-element-id="31402222" class="">Et voici <a href="https://codepen.io/nicolaspatschkowski/pen/vYXVqod" target="_blank" rel="noopener noreferrer nofollow">la solution que je vous propose, juste ici</a>.</p><p id="r-7134578" data-claire-element-id="31375465" class="">Vous pouvez faire les exercices directement dans les liens, ou bien créer votre propre compte CodePen, et copier-coller le contenu au fur et à mesure. Ou même le faire en local dans des fichiers HTML, c’est vraiment comme vous préférez. 🤗</p></div>

---
---
---
## P1C3

<div class="foldable__content"><p id="r-7148464" data-claire-element-id="31401948" class="hoveredCourseElement"><img id="r-7148463" data-claire-element-id="31401947" src="https://user.oc-static.com/upload/2021/01/19/16110441424568_Banner%20Exercez-vous.png" alt="Banner Exercez-vous"></p><p id="r-7134757" data-claire-element-id="31401967" class="">Vous avez appris plein de choses dans ce chapitre, bravo&nbsp;! C'est maintenant l'occasion de les mettre en pratique. <br>Vous trouverez <a href="https://codepen.io/nicolaspatschkowski/pen/JjRmgdJ" target="_blank" rel="noopener noreferrer nofollow">ici le lien CodePen</a> pour commencer l'exercice. Voilà ce qui est attendu de vous&nbsp;:</p><ul id="r-7134770" data-claire-element-id="31397316" class=""><li id="r-7134759" data-claire-element-id="31376842"><p id="r-7134758" data-claire-element-id="31376841"><strong>Réutiliser le composant Banner de ce chapitre</strong> qui présente le nom de notre boutique. Vous devez sortir le titre dans une variable JavaScript&nbsp;: le titre doit initialement être en minuscules et être transformé en majuscules avec du JavaScript.</p></li><li id="r-7134761" data-claire-element-id="31376814"><p id="r-7134760" data-claire-element-id="31376813"><strong>Créer un composant</strong> &lt;Cart /&gt; (panier) qui viendra sous notre titre.</p></li><li id="r-7134763" data-claire-element-id="31376852"><p id="r-7134762" data-claire-element-id="31376851"><strong>Le panier contient 3 plantes</strong> : un monstera, un lierre et un bouquet de fleurs.</p></li><li id="r-7134765" data-claire-element-id="31376818"><p id="r-7134764" data-claire-element-id="31376817"><strong>Créer 3 variables</strong> pour les prix des plantes : le monstera coûte 8, le lierre coûte 10, et le bouquet de fleurs coûte 15.</p></li><li id="r-7134767" data-claire-element-id="31397315"><p id="r-7134766" data-claire-element-id="31397314"><strong>Le panier contient une liste </strong>(&lt;ul&gt; 😉), et chaque élément présente le nom de l'article, et le prix.</p></li><li id="r-7134769" data-claire-element-id="31373606"><p id="r-7134768" data-claire-element-id="31373605"><strong>Le total du panier</strong> additionne les trois prix.</p></li></ul><p id="r-7134772" data-claire-element-id="31401968" class="">Et <a href="https://codepen.io/nicolaspatschkowski/pen/MWjPNaa" target="_blank" rel="noopener noreferrer nofollow">la solution </a><a href="https://codepen.io/nicolaspatschkowski/pen/MWjPNaa" target="_blank" rel="noopener noreferrer nofollow">correspondante se trouve ici</a>.</p></div>

---
---
---
## P2C1

<div class="foldable__content"><p id="r-7148475" data-claire-element-id="31401991" class=""><img id="r-7148474" data-claire-element-id="31401990" src="https://user.oc-static.com/upload/2021/01/19/16110442954533_Banner%20Exercez-vous.png" alt="Banner Exercez-vous"></p><p id="r-7135174" data-claire-element-id="31377251" class="hoveredCourseElement">Vous pouvez commencer l’exercice à partir de la base de code que nous avons créée ensemble avec Create React App.</p><p id="r-7135176" data-claire-element-id="31427572" class="">Votre mission est la suivante : <strong>importer le composant&nbsp;<code data-claire-semantic="text">Cart</code>&nbsp;</strong>que vous <a href="https://codepen.io/atoulmet/pen/YzWMvWP" target="_blank" rel="noopener noreferrer nofollow">aviez créé dans l’exercice du chapitre précédent</a> dans un fichier à part, dans le dossier&nbsp;<code data-claire-semantic="text">/components</code>.</p><p id="r-7135178" data-claire-element-id="31400631" class="">Vous trouverez la solution de l’exercice sur <a href="https://github.com/OpenClassrooms-Student-Center/7008001-Debutez-avec-React/tree/P2C1-Solution" target="_blank" rel="noopener noreferrer nofollow">la branche P2C1-Solution</a>.</p></div>

---
---
---

---
---
---

---
---
---

---
---
---

---
---
---

---
---
---

---
---
---

---
---
---

---
---
---

---
---
---
---
---
---
---
---
---
---
---
---



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
