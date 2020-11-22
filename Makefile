combine:
	@echo "> Gathering translations..."
	@mkdir -p source
	@for f in i18n/*/gl/*.json; do cp $$f source/`basename $$f`; done
	@echo "> Joining..."
	@gulp
	@echo "> Done."
