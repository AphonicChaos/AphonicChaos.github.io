version ?= latest
.PHONY: 
	create-migration
	docker-image
	release
	watch

create-migration:
	touch "./migrations/$$(date +%s)-$(message).sql"


docker-image:
	docker build -t "winisayso/vouched:$(version)" -t winisayso/vouched:latest .

publish:
	docker image publish "winisayso/vouched:latest"

watch:
	ls app/**/*.hs vouched.cabal cabal.project | entr -c -r cabal run
