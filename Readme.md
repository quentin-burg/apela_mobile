# NPM INSTALL APRES AVOIR CLONE

# Todo :

- Corriger le bug qui laisse le splashscreen en background

# Etape si bug

rm -rf node_modules && npm install
npm start -- --reset-cache


# Si l'app ne peut pas se connecter au serveur de développement

adb reverse tcp:8081 tcp:8081

# Commands :

- to build application => react-native run-android
- to run on emulator or device => yarn start

Note : pour importer styled-components pour react-native, `import styled from 'styled-components/native'`


Note pour plus tard :

[
  {
    "id": "1",
    "name": "biere",
    "description": "25cl 8deg.",
    "price": "3",
    "image": "hibou.jpg"
  },
  {
    "id": "2",
    "name": "chips",
    "description": "250g",
    "price": "1.5",
    "image": "hibou.jpg"
  }
]


{
    "1": {
        "name": "biere",
        "description": "25cl 8deg.",
        "price": "3",
        "image": "hibou.jpg"
    },
    "2": {
        "name": "biere",
        "description": "25cl 8deg.",
        "price": "3",
        "image": "hibou.jpg"
    }
}

### Jaune : #FBB03B


# To make release

In android folder :
- ./gradlew clean
- ./gradlew assembleRelease
In root folder :
- react-native run-android --variant=release


