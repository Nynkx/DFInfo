package server

func Init() {
	router := newRouter()

	router.Run()
}
