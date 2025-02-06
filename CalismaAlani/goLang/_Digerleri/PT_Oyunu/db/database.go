package database

import (
	"fmt"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	db, err := gorm.Open(sqlite.Open("vt.db"))
	if err != nil {
		fmt.Println("DB CNCTN ERR")
	}
	DB = db
	fmt.Println("Yes")
}
