package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {

	conStr := "localhost:8080"

	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("./assets/"))
	mux.Handle("/assets/", http.StripPrefix("/assets/", fs))
	mux.HandleFunc("/", index)

	fmt.Printf("Listening and Serving on %s\n", conStr)
	http.ListenAndServe(conStr, mux)
}

func index(w http.ResponseWriter, r *http.Request) {
	f, err := os.Open("index.html")
	if err != nil {
		panic(err)
	}
	defer f.Close()

	io.Copy(w, f)
	io.Copy(os.Stdout, f)
}
