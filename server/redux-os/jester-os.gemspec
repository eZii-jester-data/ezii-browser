Gem::Specification.new do |s|
  s.name        = 'jester-os'
  s.version     = '0.0.1'
  s.date        = '2019-10-01'
  s.summary     = "jEstEr operating system"
  s.description = "Web-based, operating on the cloud platform: Dockerized, GDPR-compliant, 3D-Ready"
  s.authors     = ["KOMA"]
  s.email       = 'manu@korfmann.info'
  s.files       = Dir.glob('**/*') - Dir.glob('**/*').grep(/\.pdf\Z/) - Dir.glob('tmp/**/*') - Dir.glob('**/*').grep(/master\.key\Z/)
  s.homepage    = 'https://rubygems.org/gems/ezii-os'
  s.license     = '0'
end
