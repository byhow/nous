# Nous

Nous is a universal cross-platform package manager and api builder. It consists of:
* Command line tools
* Dependency visualizer, which is mostly for full stack web apps and other applications which requires multiple components across different toolings.
  
### Features
* It manages your package manager configs for you. For all kinds of package managers files,
you would have to find all the files in all kinds of weird locations. Why not use a manager
to manage all your dependencies clutter and forget about it all in one line?

* It also generates a new app for you no matter what kind of app you are trying to work with.
  - For web apps, it pulls a docker/vagrant container for spring, react, CouchBase and wires all components automatically
  - For System level homework, C++ and assembly stuff, it will be annoying to sort out files on your own based on the undetermined best practice of the file hierarchy and Makefile
  - To ensure TDD, it will generate test cases for APIs you are designing
  - Link up remote git repo for remote dependencies management

* It scaffolds all the dependencies issues for your application, no matter what platform you runs on.
* It support frontend frameworks, backend frameworks, database communications, api gateway and virtualization

All it does is script all the dependencies first by porting commands to different packages:
- `ns -mvn install sonar`
- `ns -pip install pytorch`
- `ns -npm -g install lit-html`

(This can essentially acted out as an evaluation or performance testing project.)

### Warning
This contains opinionated optimal practices

### Potential supported Config file format

- [TOML](https://en.wikipedia.org/wiki/TOML)
- [.properties](https://en.wikipedia.org/wiki/.properties)
- [JSON](https://en.wikipedia.org/wiki/JSON)
- [YAML](https://en.wikipedia.org/wiki/YAML)

### Platforms

- WSL
- Windows
- Linux
- MacOS

### Supported package managers (suggested)

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

## [Future Releases Plans]

- Support config file for editing
  - `editorconfig`
  - `prettier`
  - ...
