# Ensure you have the correct source for gems
source "https://rubygems.org"

# Add necessary gems for Jekyll
gem "jekyll-remote-theme"

# Add dependencies for Ruby 3.4.0 compatibility (csv and base64)
gem "csv"
gem "base64"

# Grouping Jekyll-specific plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  # Uncomment and use this for GitHub Pages deployment
  # gem "github-pages" # https://github.com/github/pages-gem
end

# Uncomment the following line if developing on Windows:
# Performance booster for watching directories on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?
