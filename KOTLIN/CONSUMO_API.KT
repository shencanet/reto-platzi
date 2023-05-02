interface ApiService {
    @GET("/users/{id}")
    fun getUser(@Path("id") userId: String): Call<User>
}

// Path: KOTLIN\CONSUMO_API.KT
val retrofit = Retrofit.Builder()
    .baseUrl("https://api.example.com")
    .addConverterFactory(GsonConverterFactory.create())
    .build()

    val apiService = retrofit.create(ApiService::class.java)

    apiService.getUser("123").enqueue(object : Callback<User> {
        override fun onResponse(call: Call<User>, response: Response<User>) {
            val user = response.body()
            // Usa la información del usuario aquí
        }
    
        override fun onFailure(call: Call<User>, t: Throwable) {
            // Maneja el error aquí
        }
    })