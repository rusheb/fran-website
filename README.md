## Development

Requires Ruby 3.4.0 (via `rbenv`) and Bundler 2.6.8:
```
brew install rbenv
rbenv install 3.4.0
rbenv local 3.4.0
gem install bundler -v 2.6.8 --no-document
```

If `bundle`/`jekyll` still use your system Ruby, make sure your shell loads `rbenv`:
```
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc
```

Install gems and run local server
```
make serve
```

Full build
```
make build
```

### How to publish

The site is **built and deployed by GitHub Actions** on each push to **`main`**.

You don't need to build locally before push.