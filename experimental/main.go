package main

import (
	"log"
	"os"

	"github.com/urfave/cli"
)

var app = cli.NewApp()

func info() {
	app.Name = "Nous"
	app.Usage = "A universal package manager"
	app.Version = "0.0.1beta"
}

func flags() {
	app.Flags = []cli.Flag{
		&cli.StringFlag{
			Name:  "npm",
			Value: "install",
		},
	}
}

func main() {
	info()
	flags()
	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}
