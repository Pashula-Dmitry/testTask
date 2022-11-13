# Test task

### Project resources:

- [Design]()
- [API]()

## Project structure:
``` 
.

├── src
├───assets
│   ├───fonts
│   │   └───...
│   ├───i18n                              #translations taken from localise
│   │   ├───en
│   │   └───no
│   ├───icons
│   └───images
├───pages                                 #application pages
│   ├───admin
│   └───...
└───shared                                #shared bits of code
    ├───components                        
    │   └───...
    ├───constants
    ├───entities
    │   └───...
    ├───helpers
    ├───hooks
    ├───interfaces
    ├───services
    └───store
        └───...
├── node_modules
├── package.json           
├── .eslintr.json          # linter configuration
└── tsconfig.json          # ts definition
```

## Code quality:

- Use `package.json` script `npm run lint` and `prettier:check`

### Access to DEV:

###Development server

```bash
npm install
npm start
# or
yarn
yarn start
```

###Build:

```bash
npm install
npm run build
# or
yarn
yarn run build
```
