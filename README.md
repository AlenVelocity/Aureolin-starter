<div align=center>

<img src="https://i.ibb.co/TBGmcVJ/Aureolin.png" alt="Aureolin" height=128 width=128></img>

# Aureolin Starter
Starter Project for Aureolin

</div>

## Available Scripts
```
build: Builds the project to the dist folder
lint: Lints the project - EsLint
fmt: Formats the project - Prettier
dev: Starts the development server
start: Starts the built project
```

## Project Structure
```
[root]
|- .eslintignore
|- .eslintrc.js
|- .gitignore
|- .prettierrc
|- package.json
|- package-lock.json
|- README.md
|- tsconfig.json
|- src
    |- components
        |- Aureolin.tsx
        |- Card.tsx
    |- controllers
        |- HelloController.ts
        |- HomeController.tsx
    |- middleware
        |- AureolinX.ts
    |- Providers
        |- PackageProvider.ts
        |- TimeProvider.ts
    |- main.ts (entry point)

```

# Routes
```
/ (GET)
/about 
/routes
/time
/about
/hello
/hello/:name
/hello/:name/:age
/hello/:name/:age/:place
```

