# frozen_string_literal: true

source "https://rubygems.org"

# ✅ Chirpy theme (7.1 이상, 8.0 미만)
gem "jekyll-theme-chirpy", ">= 7.1", "< 8.0"

# Gem specification
gemspec

# ✅ HTML 검사기 (배포 전 테스트용)
group :test do
  gem "html-proofer", "~> 4.4"
end

# ✅ Windows 및 JRuby 환경용 타임존/파일 감시 설정
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# ✅ 성능 개선용
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# ✅ 기본 Jekyll 플러그인
gem "webrick", "~> 1.8"
gem "jekyll-include-cache"
gem "jekyll-paginate"
gem "jekyll-seo-tag"

# ✅ HTML/XML 파싱 (필수)
gem "nokogiri", ">= 1.18.10"

# ⚙️ 기타 참고 (필요시 추가 가능)
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
