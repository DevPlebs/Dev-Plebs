# DEVPLEBS

## 👔 Conventional Commits

This project follows [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) specifications. The Husky `commit-msg` hook checks that commit messages adhere to these standards using [commitlint](https://github.com/conventional-changelog/commitlint).

#### Commitizen

This project uses [Commitizen](https://github.com/commitizen/cz-cli) to generate commit messages that adhere to Conventional Commit specifications. To run Commitizen, call `npm run cz`. This will walk you through generating a commit messsage by prompting you to enter following:

- Commit type (feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert)
- Scope (_optional_)
- Short description
- Long description (_optional_)
- Whether it produces any breaking changes
- Whether it closes any open issues
