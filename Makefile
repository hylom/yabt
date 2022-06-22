.PHONY: server build
HUGO=./hugo

build:
	$(HUGO)

serve:
	$(HUGO) server -D -p 8080
