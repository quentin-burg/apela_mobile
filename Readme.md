# NPM INSTALL APRES AVOIR CLONE

# Todo :

- modifier le logo de l'application
- modifier le nom de l'application
- créer composant `Article` qui contient un article
- créer composant `ArticlesList` qui contient la liste des articles. Ce sera une liste verticale scrollable
- créer un composant `Menu` en bas qui contiendra deux boutons `ButtonMenu` : un qui redirigera vers le catalogue, un autre vers le numéro
- créer le composant `CallApela` qui contiendra le numéro pour appeler
- gérer la navigation entre les vues (swipe + menu button)

# Etape si bug

rm -rf node_modules && npm install
npm start -- --reset-cache

# Commands :

- to build application => react-native run-android
- to run on emulator or device => yarn start

Note : pour importer styled-components pour react-native, `import styled from 'styled-components/native'`
