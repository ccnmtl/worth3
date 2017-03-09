check:
	java -jar epubcheck-4.0.2/epubcheck.jar worthbook -mode exp

build:
	java -jar epubcheck-4.0.2/epubcheck.jar worthbook -mode exp -save
