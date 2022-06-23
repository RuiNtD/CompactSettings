Remove-Item -Recurse dist
New-Item -Type Directory dist
Copy-Item static\* dist

sass src/CompactSettings.theme.scss dist/CompactSettings.theme.css
sperm build
