# nous

Nous is a universal cross-platform app package manager and generator CLI, which is mostly for full stack web apps and other applications which requires multiple components across different tools.
It managaes your package manager files for you. For all kinds of package managers files, 
you would have to find all the files in all kinds of weird locations. Why not use a manager
to manage all your dependencies clutter and forget about it all in one line? 

By the way, it generates a new app for you no matter what kind of app you are trying to work with

- For example, for web apps, it pulls a docker/vagrant container for spring, react, couchbase and autowire all components for you?
- For system level homework, C++ and assembly stuff, it will be annoying to sort out files on your own based on the undetermined best practice of the file hierarchy, makefiles and goals 
- For database evaluation, pulls docker and point you, or scripted out the referenced path for the database.
- Also must generate all test for you at first. Big fan of TDD.

It scaffhold all the dependencies issues for your application, no matter what platform you runs on. 
It support frontend frameworks, backend frameworks, database communications, api gateway and virtualization

All it does is script all the dependencies first, and run:

- `nous -mvn install sonar`
- `nous -pip install pytorch` 
- `nous -npm -g install lit-html`

This can essentially acted out as an evaluation or perfomance testing project.

And this has to be a opionated optimal practice.

## Potential supported Config file format

- [TOML](https://en.wikipedia.org/wiki/TOML)
- [.properties](https://en.wikipedia.org/wiki/.properties)
- [JSON](https://en.wikipedia.org/wiki/JSON)
- [YAML](https://en.wikipedia.org/wiki/YAML) 

## Platforms

- WSL
- Windows
- Linux
- MacOS

## Supported package managers

- Java:
  - Maven
  - Gradle
- JavaScript:
  - NPM
  - yarn
- Python:
  - pip
  - conda
- Ruby
  - Gem
- PHP
  - Composer
- C++
  - [placeholder]
- C#
  - NuGet
- Rust
- Go
- Docker
- Scripts
  - powershell
  - bash

## [Future Releases]

- Support config file for editing
  - editorconfig
  - prettier
  - ...
