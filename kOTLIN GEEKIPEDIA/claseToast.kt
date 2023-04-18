package com.example.toast

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

public class MainActivity extends  AppCompatActivity{
    @override
    protected void Oncreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        var matematicas = 5;
        var fisica = 5;
        var quimica = 5;
        var promedio = 0;
        promedio = (matematicas + fisica + quimica) / 3;

        if (promedio >= 6){
            Toast.makeText(this, "Aprobado", Toast.LENGTH_SHORT).show();
    }else if(promedio <= 5){
        Toast.makeText(this, "Reprobado", Toast.LENGTH_SHORT).show();
    }
}
}
/* LA ESTRUCTURA CLASE TOAST
Toast_make Text(Context contexto, String texto, Int Duracion).show() */