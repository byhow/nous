build:
	go build -o bin/ns src/main.go 

run: 
	make build && bin/ns

clean:
	rm -f ./ns